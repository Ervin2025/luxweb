interface ImageCodeBadgeProps {
  code: string;
  className?: string;
}

export default function ImageCodeBadge({ code, className = '' }: ImageCodeBadgeProps) {
  return (
    <span
      className={`image-code-badge absolute right-4 top-4 z-20 rounded-full border border-[#ead7a8]/50 bg-[rgba(12,14,13,0.78)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f4dfae] shadow-[0_10px_30px_rgba(8,9,8,0.25)] ${className}`}
      aria-hidden="true"
    >
      {code}
    </span>
  );
}
