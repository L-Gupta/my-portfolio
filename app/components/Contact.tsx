'use client';

import { useState, FormEvent } from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
      message: 'Message received! I\'ll get back to you soon.',
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
    <section id="contact" className="py-4 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Get in <span className="text-[var(--color-accent)]">Touch</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
        </div>
        <p className="text-[var(--color-text-muted)] text-lg font-mono mt-2">
          // Let's build something amazing together
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* Email Card */}
          <div className="bento-card rounded-2xl p-6 group hover:border-[var(--color-accent)] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500 bg-opacity-10 flex items-center justify-center text-purple-500">
                <HiOutlineMail className="w-6 h-6" />
              </div>

              <div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mb-1">// email</div>
                <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  Email
                </h3>
              </div>
            </div>
            <a 
              href="mailto:lgupta22@wisc.edu"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-mono"
            >
              lgupta22@wisc.edu
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bento-card rounded-2xl p-6 group hover:border-[var(--color-accent)] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg bg-green-500 bg-opacity-10 flex items-center justify-center text-green-500">
                <FaGithub className="w-6 h-6" />
              </div>

              <div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mb-1">// github</div>
                <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                  GitHub
                </h3>
              </div>
            </div>
            <a 
              href="https://github.com/L-Gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors font-mono"
            >
              github.com/L-Gupta
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bento-card rounded-2xl p-6 group hover:border-[var(--color-accent)] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500 bg-opacity-10 flex items-center justify-center text-blue-500">
                <FaLinkedin className="w-6 h-6" />
              </div>

              <div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mb-1">// linkedin</div>
                <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-purple)] transition-colors">
                  LinkedIn
                </h3>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/lakshya-gupta-003683329/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-purple)] transition-colors font-mono"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>

          {/* Discord Card */}
          <div className="bento-card rounded-2xl p-6 group hover:border-[var(--color-accent)] transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg bg-[#5865F2] bg-opacity-10 flex items-center justify-center text-[#5865F2]">
                <FaDiscord className="w-6 h-6" />
              </div>

              <div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mb-1">// discord</div>
                <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  Discord
                </h3>
              </div>
            </div>
            <a 
              href="https://discord.com/users/1283191882926522401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-mono"
            >
              @lakshya081631
            </a>
          </div>
        </div>

        {/* Contact Form - Larger Card */}
        <div className="lg:col-span-2 bento-card rounded-2xl p-8">
          <div className="mb-6">
            <div className="text-sm font-mono text-[var(--color-text-muted)] mb-2">// send_message()</div>
            <h3 className="text-2xl font-bold text-[var(--color-text)]">
              Drop me a <span className="text-[var(--color-accent)]">message</span>
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Message */}
            {formStatus.type && (
              <div
                className={`p-4 rounded-lg font-mono text-sm ${
                  formStatus.type === 'success'
                    ? 'bg-[var(--color-accent)] bg-opacity-10 text-[var(--color-accent)] border border-[var(--color-accent)]'
                    : 'bg-red-500 bg-opacity-10 text-red-500 border border-red-500'
                }`}
              >
                {formStatus.message}
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-[var(--color-text-muted)] flex items-center gap-2">
                <span className="text-[var(--color-accent)]">const</span> name =
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-mono text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all placeholder:text-[var(--color-text-muted)]"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-[var(--color-text-muted)] flex items-center gap-2">
                <span className="text-[var(--color-accent)]">const</span> email =
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-mono text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all placeholder:text-[var(--color-text-muted)]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-[var(--color-text-muted)] flex items-center gap-2">
                <span className="text-[var(--color-accent)]">const</span> message =
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-mono text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all resize-y placeholder:text-[var(--color-text-muted)]"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_var(--color-accent-glow)] hover:scale-[1.02] font-mono flex items-center justify-center gap-2 group"
            >
              <span>send_message()</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <p className="text-xs text-[var(--color-text-muted)] text-center font-mono">
              // Form is a placeholder. Backend integration needed.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}