'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeading from '@/components/SectionHeading';
import { CONTACT_INFO } from '@/lib/constants';
import { CONTACT_INTEREST_OPTIONS } from '@/lib/site-data';

const initialFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  enquiryType: '',
  message: '',
};

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          enquiry_type: formData.enquiryType,
          message: formData.message,
          subject: 'Trade Support Desk Enquiry - LuxAura',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData(initialFormState);
        router.push('/thank-you?form=contact');
      } else {
        setFeedback('Something went wrong. Please try again or contact the trade desk directly.');
      }
    } catch {
      setFeedback('Error sending message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFeedback(null);
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section id="priority-support" className="section-padding pt-6">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-shell p-6 sm:p-10">
            <SectionHeading
              eyebrow="Trade Support Desk"
              title="Send the brief to the right LuxAura team"
              description="Use this form for sourcing enquiries, fabrication support, upholstery questions, hardware and trims requests, trade access or wider project coordination."
            />
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                <Field label="Studio / Company" htmlFor="company">
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

              <Field label="Area of Interest" htmlFor="enquiryType">
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
                >
                  <option value="">Select enquiry type</option>
                  {CONTACT_INTEREST_OPTIONS.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please share what the project requires, what stage it is at, and any material, fabrication or system details that matter."
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
                {isSubmitting ? 'Sending Message...' : 'Send to Trade Support Desk'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-6 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
                Trade Support
              </p>
              <h3 className="mt-4 font-heading text-4xl font-semibold">
                Professional intake for sourcing, making and delivery questions
              </h3>
              <p className="mt-5 text-base leading-8 text-white/78">
                LuxAura is structured to support project discussions early, before sourcing,
                hardware and fabrication decisions become fragmented.
              </p>
            </article>

            <article className="section-shell p-6 sm:p-8">
              <h3 className="font-heading text-3xl font-semibold text-neutral-900">Contact details</h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-700 sm:text-base">
                <p>
                  <span className="font-semibold text-neutral-900">Phone:</span>{' '}
                  <a href="tel:+61450871699" className="transition hover:text-primary">
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">Email:</span>{' '}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="transition hover:text-primary">
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">Address:</span>{' '}
                  {CONTACT_INFO.address.display}
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">Hours:</span> {CONTACT_INFO.hours}
                </p>
              </div>
            </article>

            <article className="section-shell p-6 sm:p-8">
              <h3 className="font-heading text-3xl font-semibold text-neutral-900">Best uses for this page</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-700 sm:text-base">
                <li>Material Direction: clarify fabrics, performance needs and application fit before decisions spread across suppliers.</li>
                <li>Fabrication Alignment: bring window treatments, upholstery, trims or hardware into one more workable project pathway.</li>
                <li>Trade Support: request account access, project coordination or the next step on an active furnishing brief.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
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
