// Illustrative visual used as a stand-in for licensed photography.
// Replace with real, licensed images (warehouse, products, team) before launch.
export default function Visual({ label = "Replace with licensed image", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-navy-900 ${className}`} role="img" aria-label={label}>
      <svg viewBox="0 0 600 500" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#1d3f6e" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="500" fill="url(#grid)" />
        {/* Stacked product boxes */}
        <g>
          <rect x="120" y="290" width="160" height="110" fill="#132d52" stroke="#1d3f6e" />
          <rect x="130" y="250" width="120" height="40" fill="#1d3f6e" />
          <rect x="300" y="310" width="150" height="90" fill="#132d52" stroke="#1d3f6e" />
          <rect x="320" y="270" width="110" height="40" fill="#1e6bff" opacity="0.85" />
          <rect x="200" y="170" width="130" height="80" fill="#1d3f6e" stroke="#2a5288" />
        </g>
        {/* Conveyor line */}
        <rect x="60" y="415" width="480" height="8" fill="#1e6bff" opacity="0.6" />
        <rect x="60" y="430" width="480" height="3" fill="#1d3f6e" />
      </svg>
      <span className="absolute bottom-3 left-3 rounded bg-white/10 px-2 py-1 text-[11px] text-navy-100">
        {label}
      </span>
    </div>
  );
}
