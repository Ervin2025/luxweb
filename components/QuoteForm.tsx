'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { QUOTE_PRODUCT_OPTIONS, QUOTE_USAGE_OPTIONS } from '@/lib/site-data';

const initialFormState = {
  projectName: '',
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  productType: '',
  usage: '',
  priceBand: '',
  siteLocation: '',
  timeline: '',
  message: '',
};

const timelineOptions = ['Urgent', '2-4 weeks', '1-2 months', 'Planning stage'];

export default function QuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
          subject: 'New Project Quote Request - Luxaura',
          project_name: formData.projectName,
          company_name: formData.companyName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          product_type: formData.productType,
          usage: formData.usage,
          price_band: formData.priceBand,
          site_location: formData.siteLocation,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData(initialFormState);
        router.push('/thank-you?form=quote');
      } else {
        setFeedback('Something went wrong. Please try again or contact the trade desk directly.');
      }
    } catch {
      setFeedback('Error submitting request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="section-shell space-y-6 p-8 sm:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Project Name" htmlFor="projectName">
          <input
            type="text"
            id="projectName"
            name="projectName"
            required
            value={formData.projectName}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
        <Field label="Studio / Company" htmlFor="companyName">
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Contact Name" htmlFor="contactName">
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Phone Number" htmlFor="phone">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
        <Field label="Site / Suburb" htmlFor="siteLocation">
          <input
            type="text"
            id="siteLocation"
            name="siteLocation"
            value={formData.siteLocation}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Product / Service" htmlFor="productType">
          <select
            id="productType"
            name="productType"
            required
            value={formData.productType}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select one</option>
            {QUOTE_PRODUCT_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Usage" htmlFor="usage">
          <select
            id="usage"
            name="usage"
            value={formData.usage}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select usage</option>
            {QUOTE_USAGE_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Price Band" htmlFor="priceBand">
          <select
            id="priceBand"
            name="priceBand"
            value={formData.priceBand}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select band</option>
            <option value="$">Value ($)</option>
            <option value="$$">Balanced ($$)</option>
            <option value="$$$">Luxury ($$$)</option>
          </select>
        </Field>
        <Field label="Timeline" htmlFor="timeline">
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Notes" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Include quantities, widths, trims, track needs, performance requirements, site notes and any fabrication complexity."
          className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
        />
      </Field>

      <div className="rounded-[1.5rem] bg-neutral-50 p-6 text-sm leading-7 text-neutral-700">
        <p className="font-semibold text-neutral-900">Quote workflow</p>
        <ul className="mt-3 space-y-2">
          <li>Public pricing stays hidden while the team reviews the project scope.</li>
          <li>Luxaura aligns fabrics, trims, systems and fabrication into one response where needed.</li>
          <li>Trade clients can continue into account support and project follow-up after submission.</li>
        </ul>
      </div>

      {feedback ? (
        <div className="rounded-[1.3rem] border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {feedback}
        </div>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full justify-center text-center disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting Quote...' : 'Submit Project Quote'}
      </button>
    </form>
  );
}

function Field({
  children,
  htmlFor,
  label,
}: {
  children: ReactNode;
  htmlFor: string;
  label: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-700">{label}</span>
      {children}
    </label>
  );
}
