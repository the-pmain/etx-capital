export function Logo({ className = "h-6 w-auto text-ink", label = "ETX" }) {
  return (
    <svg viewBox="0 0 96 40" role="img" aria-label={label} className={className} fill="none">
      <rect x="2" y="6" width="4" height="28" fill="currentColor" />
      <rect x="2" y="6" width="23" height="4" fill="currentColor" />
      <rect x="2" y="19" width="18" height="4" fill="currentColor" />
      <rect x="2" y="30" width="23" height="4" fill="currentColor" />
      <rect x="33" y="6" width="25" height="4" fill="currentColor" />
      <rect x="43.5" y="6" width="4" height="28" fill="currentColor" />
      <path d="M66 6 L90 34" className="stroke-gold" strokeWidth="4.2" />
      <path d="M90 6 L66 34" className="stroke-gold" strokeWidth="4.2" />
    </svg>
  );
}
