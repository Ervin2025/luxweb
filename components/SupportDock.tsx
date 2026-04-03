export default function SupportDock() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <a
          href="https://wa.me/61450871699?text=Hello%20Luxaura%2C%20I%20need%20trade%20support%20for%20a%20fabric%20or%20fabrication%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(20,40,32,0.28)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 text-base">
            ↗
          </span>
          WhatsApp / Live Chat
        </a>
        <a
          href="/contact#priority-support"
          className="rounded-full border border-primary/15 bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-[0_10px_30px_rgba(26,24,22,0.08)] backdrop-blur transition hover:border-primary hover:bg-white"
        >
          Designer Support Desk
        </a>
      </div>
    </div>
  );
}
