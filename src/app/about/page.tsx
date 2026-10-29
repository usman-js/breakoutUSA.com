import PageHero from "@/components/PageHero";
import Section, { SectionHeading } from "@/components/Section";
import Visual from "@/components/Visual";
import Button from "@/components/Button";

export const metadata = {
  title: "About Us",
  description: "Learn about Breakout USA's approach to e-commerce and professional brand partnerships.",
};

// Placeholder shown for details the business has not yet confirmed.
function Confirm({ children }: { children: string }) {
  return (
    <mark className="rounded bg-electric-50 px-1.5 py-0.5 text-electric-600 not-italic">[{children}]</mark>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A focused e-commerce partner for brands."
        text="Breakout USA works with brand owners, manufacturers, and authorized distributors to explore selling on leading online marketplaces."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <SectionHeading eyebrow="Who we are" title="Built on professional, long-term relationships." />
            <p>
              Breakout USA is an e-commerce and brand partnership business. Our work centers on helping established
              brands decide whether, where, and how their products can be sold on online marketplaces such as Amazon,
              Walmart Marketplace, and eBay.
            </p>
            <p>
              We believe a partnership works best when it is clear from the start: who is approving what, which
              products are eligible, and what each side is responsible for. That clarity is at the core of how we
              approach every conversation.
            </p>
            <p>
              Founded in <Confirm>2022</Confirm>, we are based in{" "}
              <Confirm> Arlington Virginia, USA </Confirm>.
            </p>
          </div>
          <Visual className="aspect-[4/3] w-full" label="Replace with a licensed team or office photo" />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Our approach"
          title="How we work with every partner."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Clarity first",
              text: "We confirm eligibility, scope, and terms before any work begins, so expectations are shared from day one.",
            },
            {
              title: "Marketplace-aware",
              text: "Each channel has its own rules and audience. We plan around those realities rather than applying one approach everywhere.",
            },
            {
              title: "Honest communication",
              text: "We will tell you what we see, including what is not realistic. We do not guarantee sales results.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t-2 border-electric pt-6">
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-navy-900">Interested in working together?</h2>
            <p className="mt-3 text-muted">Tell us about your products and we will explain how a partnership could work.</p>
          </div>
          <Button href="/brand-partnerships">Become a Brand Partner</Button>
        </div>
      </Section>
    </>
  );
}
