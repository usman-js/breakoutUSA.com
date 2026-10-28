import Link from "next/link";

// Brand mark: navy rounded square with white bold "BU", followed by the wordmark.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Breakout USA home"
    >
      <svg width="30" height="30" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="7" className="fill-navy-900" />
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#ffffff"
          fontSize="15"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          letterSpacing="-0.3"
        >
          BU
        </text>
      </svg>
      <span className="text-[17px] font-semibold tracking-tight">
        <span className="text-black">Breakout</span>{" "}
        <span className="text-electric">USA</span>
      </span>
    </Link>
  );
}
