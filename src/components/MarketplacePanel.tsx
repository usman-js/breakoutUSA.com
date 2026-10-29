import { marketplaces } from "@/lib/site";

// Dark navy hero panel: marketplace channel rows plus a "Brand approval" timeline.
export default function MarketplacePanel() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#0e1f38] p-8 sm:p-12">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#1d3f6e" strokeOpacity="0.45" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy-100/70">Marketplace channels</p>

        <ul className="mt-6 space-y-4">
          {marketplaces.map((marketplace) => (
            <li
              key={marketplace.name}
              className="flex items-center justify-between rounded-md border border-white/15 bg-white/[0.06] px-6 py-5"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 items-center rounded-md bg-white px-2.5">
                  <img src={marketplace.logo} alt={`${marketplace.name} logo`} className="h-5 w-auto" />
                </span>
                <span className="font-semibold text-white">{marketplace.name}</span>
              </span>
              <span className="text-sm text-navy-100/70">Marketplace</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center gap-4" aria-label="Brand approval timeline">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
          <span className="h-0.5 flex-1 bg-gradient-to-r from-electric to-electric/20" />
          <span className="text-sm text-navy-100">Brand approval</span>
          <span className="h-0.5 flex-1 bg-gradient-to-r from-electric/20 to-electric" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
        </div>
      </div>
    </div>
  );
}