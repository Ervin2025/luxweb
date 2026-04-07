import { redirect } from 'next/navigation';

export default function ContactRedirectPage() {
  redirect('/about#trade-desk');
}
