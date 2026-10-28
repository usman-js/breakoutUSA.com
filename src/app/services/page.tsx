import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import { services } from "@/lib/site";

export const metadata = {
  title: "Our Services",
  description: "Marketplace selling, brand partnership sourcing, listing management, and more from Breakout USA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="How we may work with your brand."
        text="A clear overview of the e-commerce services Breakout USA provides to brand partners. Every engagement is scoped and agreed in writing before work begins."
      >
        <Button href="/brand-partnerships">Become a Brand Partner</Button>
      </PageHero>

      {services.map((service, index) => (
        <Section key={service.title} tone={index % 2 === 0 ? "white" : "soft"} id={`service-${index + 1}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="text-sm font-semibold text-electric">0{index + 1}</span>
            </div>
            <div className="lg:col-span-5">
              <SectionHeading title={service.title} text={service.summary} />
            </div>
            <ul className="space-y-4 lg:col-span-6">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-3 border-b border-line pb-4 text-base text-navy-900">
                  <Check size={20} className="mt-0.5 shrink-0 text-electric" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Not sure which service fits?</h2>
            <p className="mt-3 text-navy-100">
              Start with a partnership inquiry. We will discuss your products and recommend the right next steps.
            </p>
          </div>
          <Button href="/brand-partnerships" variant="light">Start a Partnership Conversation</Button>
        </div>
      </Section>
    </>
  );
}
