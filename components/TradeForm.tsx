'use client';

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import {
  FORM_INTENT_OPTIONS,
  TRADE_PROJECT_BUSINESS_TYPES,
  TRADE_PROJECT_FOCUS_OPTIONS,
  type FormIntent,
} from '@/lib/site-data';

const initialFormState = {
  intent: 'trade-access' as FormIntent,
  companyName: '',
  abn: '',
  contactName: '',
  position: '',
  email: '',
  phone: '',
  businessType: '',
  projectFocus: '',
  message: '',
};

function validateAbn(abn: string) {
  if (!/^\d{11}$/.test(abn)) {
    return false;
  }

  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const digits = abn.split('').map(Number);
  digits[0] = digits[0] - 1;

  const total = digits.reduce((sum, digit, index) => sum + digit * weights[index], 0);
  return total % 89 === 0;
}

interface TradeFormProps {
  initialIntent?: FormIntent;
}

export default function TradeForm({ initialIntent = 'trade-access' }: TradeFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({ ...initialFormState, intent: initialIntent });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    setFormData(prev => ({ ...prev, intent: initialIntent }));
  }, [initialIntent]);

  const abnDigits = formData.abn.replace(/\D/g, '').slice(0, 11);
  const requiresAbn = formData.intent === 'trade-access';
  const isAbnValid = useMemo(
    () => (!requiresAbn ? true : validateAbn(abnDigits)),
    [abnDigits, requiresAbn]
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFeedback(null);
    setFormData(prev => ({
      ...prev,
      [name]: name === 'abn' ? value.replace(/\D/g, '').slice(0, 11) : value,
    }));
  };

  const handleIntentChange = (intent: FormIntent) => {
    setFeedback(null);
    setFormData(prev => ({
      ...prev,
      intent,
      abn: intent === 'trade-access' ? prev.abn : '',
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (requiresAbn && !isAbnValid) {
      setFeedback('Enter a valid 11-digit ABN before submitting a trade access request.');
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

      const activeIntent = FORM_INTENT_OPTIONS.find(option => option.value === formData.intent);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `LuxAura Trade Account - ${activeIntent?.label ?? 'Enquiry'}`,
          enquiry_intent: formData.intent,
          enquiry_intent_label: activeIntent?.label ?? formData.intent,
          company_name: formData.companyName,
          abn: requiresAbn ? abnDigits : '',
          abn_checksum_status: requiresAbn ? 'passed' : 'not-required',
          contact_name: formData.contactName,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          project_focus: formData.projectFocus,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ ...initialFormState, intent: initialIntent });
        router.push(`/thank-you?form=trade-projects&intent=${formData.intent}`);
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
    <form onSubmit={handleSubmit} className="section-shell space-y-5 p-6 sm:space-y-6 sm:p-10">
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
          Choose your intent
        </legend>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {FORM_INTENT_OPTIONS.map(option => {
            const isActive = formData.intent === option.value;

            return (
              <label
                key={option.value}
                className={`cursor-pointer rounded-[1.5rem] border p-4 transition sm:p-5 ${
                  isActive
                    ? 'border-primary bg-primary/6 shadow-[0_18px_40px_rgba(20,22,20,0.06)]'
                    : 'border-primary/10 bg-neutral-50'
                }`}
              >
                <input
                  type="radio"
                  name="intent"
                  value={option.value}
                  checked={isActive}
                  onChange={() => handleIntentChange(option.value)}
                  className="sr-only"
                />
                <p className="font-heading text-2xl font-semibold text-neutral-900">{option.label}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{option.description}</p>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Company Name" htmlFor="companyName">
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
        </Field>
        <Field label={requiresAbn ? 'ABN' : 'ABN (Optional)'} htmlFor="abn">
          <input
            type="text"
            id="abn"
            name="abn"
            required={requiresAbn}
            inputMode="numeric"
            value={formData.abn}
            onChange={handleChange}
            placeholder={requiresAbn ? 'Required for trade access' : 'Only needed for trade access'}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          />
          <p
            className={`mt-2 text-xs ${
              !requiresAbn
                ? 'text-neutral-500'
                : abnDigits.length === 11 && isAbnValid
                  ? 'text-primary'
                  : 'text-neutral-500'
            }`}
          >
            {!requiresAbn
              ? 'ABN verification is only required when requesting trade access.'
              : abnDigits.length === 11
                ? isAbnValid
                  ? 'ABN checksum passed.'
                  : 'ABN format is invalid.'
                : 'Enter 11 digits for ABN verification.'}
          </p>
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
        <Field label="Position / Title" htmlFor="position">
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
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
        <Field label="Business Type" htmlFor="businessType">
          <select
            id="businessType"
            name="businessType"
            required
            value={formData.businessType}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select one</option>
            {TRADE_PROJECT_BUSINESS_TYPES.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Primary Project Focus" htmlFor="projectFocus">
          <select
            id="projectFocus"
            name="projectFocus"
            required
            value={formData.projectFocus}
            onChange={handleChange}
            className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
          >
            <option value="">Select focus</option>
            {TRADE_PROJECT_FOCUS_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about the brief" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Include brands of interest, timing, room type, fabrication needs, trims, systems or sample support."
          className="w-full rounded-[1rem] border border-primary/15 bg-neutral-50 px-4 py-3.5 text-neutral-800 outline-none transition focus:border-primary"
        />
      </Field>

      <div className="rounded-[1.5rem] bg-neutral-50 p-5 text-sm leading-7 text-neutral-700 sm:p-6">
        <p className="font-semibold text-neutral-900">What happens next?</p>
        <ul className="mt-3 space-y-2">
          <li>Trade access requests are reviewed with ABN-backed business details.</li>
          <li>Project enquiries are routed to the right product and fabrication support lane.</li>
          <li>Approved accounts move into the right support path for pricing, sampling and follow-up.</li>
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
        {isSubmitting ? 'Submitting...' : 'Submit Trade & Project Request'}
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
