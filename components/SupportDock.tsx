import { TRADE_SUPPORT_HREF } from '@/lib/navigation-data';

export default function SupportDock() {
  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 pb-[env(safe-area-inset-bottom)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:pb-0">
      <div className="pointer-events-auto flex items-center justify-end">
        <a
          href={TRADE_SUPPORT_HREF}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#d6c3a0] bg-[#f6f0e4] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_10px_30px_rgba(26,24,22,0.08)] transition hover:border-primary hover:bg-[#f1e7d6] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]"
        >
          <span className="sm:hidden">Support</span>
          <span className="hidden sm:inline">Find Support</span>
        </a>
      </div>
    </div>
  );
}
