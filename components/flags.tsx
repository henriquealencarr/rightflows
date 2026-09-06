export function FlagBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 22" className={className} aria-hidden="true">
      <rect width="32" height="22" fill="#009739" />
      <polygon points="16,3 29,11 16,19 3,11" fill="#FEDD00" />
      <circle cx="16" cy="11" r="5" fill="#012169" />
    </svg>
  );
}

export function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 22" className={className} aria-hidden="true">
      <rect width="32" height="22" fill="#B22234" />
      <g fill="#fff">
        <rect y="1.69" width="32" height="1.69" />
        <rect y="5.08" width="32" height="1.69" />
        <rect y="8.46" width="32" height="1.69" />
        <rect y="11.85" width="32" height="1.69" />
        <rect y="15.23" width="32" height="1.69" />
        <rect y="18.62" width="32" height="1.69" />
      </g>
      <rect width="14" height="11.85" fill="#3C3B6E" />
    </svg>
  );
}
