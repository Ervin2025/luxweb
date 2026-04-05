'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';

interface QuickInquiryDialogProps {
  styleName: string;
  label?: string;
  title?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  subjectPrefix?: string;
  enquiryType?: string;
  introText?: string;
}

const initialFormState = {
  name: '',
  email: '',
  style: '',
  dimensions: '',
};

export default function QuickInquiryDialog({
  styleName,
  label = 'Quick Inquiry',
  title = 'Quick Inquiry',
  variant = 'secondary',
  className = '',
  subjectPrefix = 'Quick Inquiry',
  enquiryType = 'quick-inquiry',
  introText = 'Send the style and rough size. We will come back with the next step quickly.',
}: QuickInquiryDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [formData, setFormData] = useState({ ...initialFormState, style: styleName });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setFormData(prev => ({ ...prev, style: styleName }));
  }, [styleName]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFeedback(null);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        setFeedback('Form service is not configured. Please try again later.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${subjectPrefix} - ${formData.style}`,
          enquiry_type: enquiryType,
          name: formData.name,
          email: formData.email,
          style: formData.style,
          approximate_dimensions: formData.dimensions,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFeedback('Thanks. Your enquiry has been sent to the LuxAura team.');
        setFormData({ ...initialFormState, style: styleName });
      } else {
        setFeedback('Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      setFeedback('Error submitting request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'ghost'
        ? 'inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80'
        : 'btn-secondary';

  return (
    <>
      <button type="button" className={`${buttonClass} ${className}`.trim()} onClick={() => setIsOpen(true)}>
        {label}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#101512]/55 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[2rem] border border-white/75 bg-[#f8f3ea] p-6 shadow-[0_30px_90px_rgba(16,21,18,0.22)] sm:p-8"
            onClick={event => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Project Enquiry
                </p>
                <h3 className="mt-3 font-heading text-4xl font-semibold text-neutral-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  {introText}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/70 text-neutral-800 transition hover:border-primary/25 hover:text-primary"
                aria-label="Close inquiry form"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-neutral-900">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-[1rem] border border-primary/15 bg-white px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-neutral-900">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[1rem] border border-primary/15 bg-white px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-neutral-900">Style</span>
                <input
                  type="text"
                  name="style"
                  required
                  value={formData.style}
                  onChange={handleChange}
                  className="w-full rounded-[1rem] border border-primary/15 bg-white px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-neutral-900">
                  Approx. Dimensions
                </span>
                <input
                  type="text"
                  name="dimensions"
                  required
                  value={formData.dimensions}
                  onChange={handleChange}
                  placeholder="Width x Drop, or approximate room size"
                  className="w-full rounded-[1rem] border border-primary/15 bg-white px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
                />
              </label>

              {feedback ? (
                <div className="rounded-[1.2rem] border border-primary/10 bg-white/70 px-4 py-3 text-sm text-neutral-700">
                  {feedback}
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="btn-primary flex-1 justify-center text-center disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                <button
                  type="button"
                  className="btn-secondary flex-1 justify-center text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
