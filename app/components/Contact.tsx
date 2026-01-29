'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Placeholder - no actual backend
    setFormStatus({
      type: 'success',
      message:
        'Thank you for your message! This is a placeholder form with no backend connected. In production, your message would be sent.',
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Hide message after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: null, message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24 items-start">
        {/* Left Column - Info */}
        <div>
          <h2 className="font-cormorant text-[3.5rem] font-semibold mb-8 text-[var(--color-text)]">
            Contact
          </h2>
          <h3 className="font-cormorant text-[1.8rem] mb-6 text-[var(--color-text)]">
            Let's Connect
          </h3>
          <p className="text-[1.1rem] leading-relaxed text-[var(--color-muted)] mb-8">
            I'm always interested in discussing new opportunities, collaborations, or just chatting
            about technology and innovation. Feel free to reach out!
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] border-2 border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-muted)] text-[1.2rem] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1"
              title="GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-gupta-003683329/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] border-2 border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-muted)] text-[1.2rem] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1"
              title="LinkedIn"
            >
              LI
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-[50px] h-[50px] border-2 border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-muted)] text-[1.2rem] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1"
              title="Email"
            >
              @
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Form Message */}
          {formStatus.type && (
            <div
              className={`p-4 px-6 rounded-sm text-[0.95rem] ${
                formStatus.type === 'success'
                  ? 'bg-[#d4edda] text-[#155724] border border-[#c3e6cb]'
                  : 'bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb]'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-[var(--color-text)] font-medium text-[0.95rem]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-6 py-4 border-2 border-[var(--color-border)] rounded-[30px] font-work-sans text-base text-[var(--color-text)] bg-white transition-all duration-300 focus:outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-[var(--color-text)] font-medium text-[0.95rem]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-6 py-4 border-2 border-[var(--color-border)] rounded-[30px] font-work-sans text-base text-[var(--color-text)] bg-white transition-all duration-300 focus:outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-[var(--color-text)] font-medium text-[0.95rem]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="px-6 py-4 border-2 border-[var(--color-border)] rounded-[20px] font-work-sans text-base text-[var(--color-text)] bg-white transition-all duration-300 resize-y min-h-[150px] focus:outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-10 py-4 bg-[var(--color-accent)] text-white border-2 border-[var(--color-accent)] rounded-[30px] font-work-sans text-base font-medium cursor-pointer transition-all duration-300 self-start hover:bg-transparent hover:text-[var(--color-accent)] hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}