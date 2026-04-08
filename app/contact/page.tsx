import { permanentRedirect } from 'next/navigation';

export default function ContactRedirectPage() {
  permanentRedirect('/about#trade-desk');
}
