import React, { useState } from 'react';
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { socialsData } from '../../data/socials';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'React Native Mobile App Development',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey && serviceId !== 'your_emailjs_service_id_here') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'fadimalak45@gmail.com',
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.info('[EmailJS Dev Simulation] Message sent:', formData);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'React Native Mobile App Development',
        message: '',
        honeypot: '',
      });
      setTimeout(() => setStatus('idle'), 8000);
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMessage('Failed to send message. Please email fadimalak45@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-editorial-bg">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              08 // CONTACT
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-editorial-ink leading-none">
              Let's build something.
            </h2>
            <div className="pt-6">
              <a
                href="mailto:fadimalak45@gmail.com"
                className="font-heading text-xl sm:text-3xl text-editorial-accent hover:text-editorial-ink inline-flex items-center gap-2 underline underline-offset-8 transition-colors"
              >
                <span>fadimalak45@gmail.com</span>
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Content & Underline-Style Form */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Direct Channel Metadata */}
          <div className="lg:col-span-4 space-y-8 font-mono text-xs">
            <div>
              <span className="text-editorial-tertiary uppercase block mb-1">Direct WhatsApp</span>
              <a
                href="https://wa.me/923221971632?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-bold text-editorial-ink hover:text-editorial-accent transition-colors"
              >
                +92 322 1971632 ↗
              </a>
            </div>

            <div>
              <span className="text-editorial-tertiary uppercase block mb-1">Location &amp; Timezone</span>
              <p className="text-editorial-secondary">
                Swat, Khyber Pakhtunkhwa, Pakistan (GMT+5)
              </p>
            </div>

            <div className="pt-4 border-t border-editorial-border">
              <span className="text-editorial-tertiary uppercase block mb-2">Networks</span>
              <div className="flex flex-col space-y-1.5">
                {socialsData.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={social.platform !== 'Email' ? '_blank' : undefined}
                    rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-editorial-secondary hover:text-editorial-ink transition-colors"
                  >
                    <span>{social.platform}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Underline-Style Form */}
          <div className="lg:col-span-8">
            {/* Status alerts */}
            {status === 'success' && (
              <div className="mb-8 p-4 rounded border border-emerald-500/40 bg-emerald-500/5 text-emerald-600 font-mono text-xs flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message received. I will reply to your email promptly.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-4 rounded border border-editorial-accent/40 bg-editorial-accent/5 text-editorial-accent font-mono text-xs flex items-center gap-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-editorial-tertiary">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Henderson"
                    className="w-full bg-transparent border-b border-editorial-border py-2 text-editorial-ink placeholder:text-editorial-tertiary/40 font-body text-base focus:outline-none focus:border-editorial-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-editorial-tertiary">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full bg-transparent border-b border-editorial-border py-2 text-editorial-ink placeholder:text-editorial-tertiary/40 font-body text-base focus:outline-none focus:border-editorial-accent transition-colors"
                  />
                </div>
              </div>

              {/* Subject dropdown */}
              <div className="space-y-1">
                <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-editorial-tertiary">
                  Project Scope
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-editorial-border py-2 text-editorial-ink font-body text-base focus:outline-none focus:border-editorial-accent transition-colors cursor-pointer"
                >
                  <option value="React Native Mobile App Development" className="bg-editorial-bg text-editorial-ink">React Native Mobile App Development</option>
                  <option value="Full-Stack Web Application (React / Node / Firebase)" className="bg-editorial-bg text-editorial-ink">Full-Stack Web Application (React / Node / Firebase)</option>
                  <option value="WordPress &amp; WooCommerce E-Commerce Solution" className="bg-editorial-bg text-editorial-ink">WordPress &amp; WooCommerce E-Commerce Solution</option>
                  <option value="POS &amp; Thermal Printing Hardware Integration" className="bg-editorial-bg text-editorial-ink">POS &amp; Thermal Printing Hardware Integration</option>
                  <option value="Performance Optimization &amp; Architecture Audit" className="bg-editorial-bg text-editorial-ink">Performance Optimization &amp; Architecture Audit</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-editorial-tertiary">
                  Message / Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your timeline, goals, and technical specifications..."
                  className="w-full bg-transparent border-b border-editorial-border py-2 text-editorial-ink placeholder:text-editorial-tertiary/40 font-body text-base focus:outline-none focus:border-editorial-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-editorial-ink text-editorial-bg font-mono text-xs uppercase tracking-wider font-bold hover:bg-editorial-accent hover:text-black disabled:opacity-50 transition-colors duration-150"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
