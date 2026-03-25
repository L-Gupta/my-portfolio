import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 30_000;
const ipRequestMap = new Map<string, number>();

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: 'Email service is not configured on the server.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const timestamp = new Date().toISOString();

    const lastRequestAt = ipRequestMap.get(ip);
    if (lastRequestAt && Date.now() - lastRequestAt < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        { error: 'Please wait 30 seconds before sending another message.' },
        { status: 429 }
      );
    }
    ipRequestMap.set(ip, Date.now());

    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';
    const website = typeof body?.website === 'string' ? body.website.trim() : '';

    // If honeypot is filled, pretend success but do not send email.
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || name.length > 100) {
      return NextResponse.json(
        { error: 'Please provide a valid name (1-100 characters).' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || message.length > 2000) {
      return NextResponse.json(
        { error: 'Please provide a message (1-2000 characters).' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      return NextResponse.json(
        { error: 'Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL on the server.' },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');
    const safeIp = escapeHtml(ip);
    const safeUserAgent = escapeHtml(userAgent);
    const safeTimestamp = escapeHtml(timestamp);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr />
        <p><strong>Timestamp:</strong> ${safeTimestamp}</p>
        <p><strong>IP:</strong> ${safeIp}</p>
        <p><strong>User Agent:</strong> ${safeUserAgent}</p>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nTimestamp: ${timestamp}\nIP: ${ip}\nUser Agent: ${userAgent}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Could not send your message right now. Please try again later.' },
        { status: 502 }
      );
    }

    console.log('Contact email sent:', {
      from: email,
      ip,
      timestamp,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Unexpected server error. Please try again later.' },
      { status: 500 }
    );
  }
}
