'use client';

import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import {
  PROJECT_CLIENT_TYPE_OPTIONS,
  PROJECT_SERVICE_OPTIONS,
  PROJECT_STAGE_OPTIONS,
  PROJECT_TYPE_OPTIONS,
} from '@/lib/form-options';

const timelineOptions = ['Urgent', '2-4 weeks', '1-2 months', '3+ months', 'Planning stage'] as const;

const initialFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  clientType: '',
  projectType: '',
  projectStage: '',
  timeline: '',
  siteLocation: '',
  message: '',
};

interface ProjectEnquiryFormProps {
  submitLabel?: string;
  className?: string;
}

export default function ProjectEnquiryForm({
  submitLabel = 'Send to Trade Desk',
  className = '',
}: ProjectEnquiryFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const attachmentLabel = useMemo(() => {
    if (!attachment) {
      return 'Upload Drawings / Photos / Moodboard';
    }

    return attachment.name;
  }, [attachment]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFeedback(null);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFeedback(null);
    const file = event.target.files?.[0] ?? null;

    if (file && file.size > 5 * 1024 * 1024) {
      setFeedback('Please upload one file up to 5 MB in PDF, JPG, PNG or WebP format.');
      event.target.value = '';
      setAttachment(null);
      return;
    }

    setAttachment(file);
  };

  const handleServiceToggle = (service: string) => {
    setFeedback(null);
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(item => item !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedServices.length === 0) {
      setFeedback('Select at least one service so the brief can be routed to the right LuxAura team.');
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        setFeedback('Form service is not configured. Please try again later.');
        setIsSubmitting(false);
        return;
      }

      const body = new FormData();
      body.append('access_key', accessKey);
      body.append('subject', 'LuxAura Project Enquiry - Trade Desk');
      body.append('name', formData.name);
      body.append('company_or_studio', formData.company);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('client_type', formData.clientType);
      body.append('project_type', formData.projectType);
      body.append('project_stage', formData.projectStage);
      body.append('services_needed', selectedServices.join(', '));
      body.append('timeline', formData.timeline);
      body.append('site_location', formData.siteLocation);
      body.append('message', formData.message);

      if (attachment) {
        body.append('attachment', attachment);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });

      const data = await response.json();

      if (data.success) {
        setFormData(initialFormState);
        setSelectedServices([]);
        setAttachment(null);
        router.push('/thank-you?form=contact');
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
    <form
      onSubmit={handleSubmit}
      className={`section-shell space-y-5 p-5 sm:space-y-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
        <Field label="Company / Studio" htmlFor="company">
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Client Type" htmlFor="clientType">
          <select
            id="clientType"
            name="clientType"
            required
            value={formData.clientType}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select client type</option>
            {PROJECT_CLIENT_TYPE_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Type" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select project type</option>
            {PROJECT_TYPE_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Project Stage" htmlFor="projectStage">
          <select
            id="projectStage"
            name="projectStage"
            required
            value={formData.projectStage}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select project stage</option>
            {PROJECT_STAGE_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
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

      <Field label="Site Location" htmlFor="siteLocation">
        <input
          type="text"
          id="siteLocation"
          name="siteLocation"
          value={formData.siteLocation}
          onChange={handleChange}
          className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
        />
      </Field>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-neutral-700">Services Needed</legend>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {PROJECT_SERVICE_OPTIONS.map(option => {
            const isActive = selectedServices.includes(option);

            return (
              <label
                key={option}
                className={`cursor-pointer rounded-[1.2rem] border px-4 py-3.5 text-sm leading-6 transition sm:py-4 ${
                  isActive
                    ? 'border-primary bg-primary/6 text-neutral-900'
                    : 'border-primary/10 bg-neutral-50 text-neutral-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => handleServiceToggle(option)}
                  className="sr-only"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field label="Upload Drawings / Photos / Moodboard" htmlFor="attachment">
        <label
          htmlFor="attachment"
          className="flex min-h-[58px] cursor-pointer flex-col items-start gap-3 rounded-[1rem] border border-dashed border-primary/20 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-600 transition hover:border-primary sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="min-w-0 text-pretty pr-0 leading-6 sm:truncate sm:pr-4">{attachmentLabel}</span>
          <span className="rounded-full border border-primary/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Select
          </span>
        </label>
        <input
          type="file"
          id="attachment"
          name="attachment"
          accept=".pdf,.jpg,.jpeg,.png,.webp"
          onChange={handleFileChange}
          className="sr-only"
        />
        <p className="mt-2 text-xs text-neutral-500">Single file. PDF or image. Up to 5 MB.</p>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share what the project requires, what stage it is at, and any material, fabrication, visual or site information that may help us support the brief."
          className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
        />
      </Field>

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
        {isSubmitting ? 'Sending to Trade Desk...' : submitLabel}
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
      <span className="mb-2.5 block text-sm font-medium leading-6 text-neutral-700">{label}</span>
      {children}
    </label>
  );
}
