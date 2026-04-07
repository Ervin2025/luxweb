import { redirect } from 'next/navigation';

export default function QuoteRedirectPage() {
  redirect('/about#project-enquiry');
}
