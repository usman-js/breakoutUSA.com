import Link from "next/link";
import { ArrowRight, Globe2, Handshake, Layers, LineChart, Package, ShoppingBag } from "lucide-react";
import Button from "@/components/Button";
import Section, { SectionHeading } from "@/components/Section";
import MarketplacePanel from "@/components/MarketplacePanel";
import ProcessSteps from "@/components/ProcessSteps";
import { marketplaces, partnershipBenefits, services } from "@/lib/site";

export const metadata = {
  title: "E-Commerce & Brand Partnerships",
  description:
    "Breakout USA partners with brands and suppliers to explore new opportunities across leading e-commerce marketplaces.",
};

const serviceIcons = [ShoppingBag, Handshake, Layers, Package, Globe2, LineChart];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="reveal">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              E-commerce &amp; brand partnerships
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Your Brand. Our Marketplace Expertise. Shared Growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We partner with brands and suppliers to explore new opportunities across leading e-commerce marketplaces.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/brand-partnerships">Become a Brand Partner</Button>
              <Button href="/services" variant="secondary">Explore Our Services</Button>
            </div>
          </div>
          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <MarketplacePanel />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-line bg-navy-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-sm text-navy-900 sm:grid-cols-3 sm:px-8">
          <p><span className="font-semibold">Marketplace-focused</span> — built around how online channels actually work.</p>
          <p><span className="font-semibold">Clear terms</span> — eligibility and commercial details agreed up front.</p>
          <p><span className="font-semibold">Direct communication</span> — one point of contact throughout.</p>
        </div>
      </div>

      {/* Marketplaces */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Marketplace channels"
            title="Reach customers on the platforms they already shop."
            text="We work with brands to explore selling on major online marketplaces. Each channel has its own rules, audience, and requirements, and we plan around them."
          />
          <ul className="grid gap-4 sm:grid-cols-3">
            {marketplaces.map((marketplace) => (
              <li key={marketplace.name} className="rounded-lg border border-line p-6">
                <img src={marketplace.logo} alt={`${marketplace.name} logo`} className="h-8 w-auto" />
                <p className="mt-4 font-semibold text-navy-900">{marketplace.name}</p>
                <p className="mt-1 text-sm text-muted">{marketplace.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What we do */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="What we do"
          title="Services built around marketplace selling."
          text="From brand approval to listings and order coordination, we handle the operational side of selling online."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div key={service.title} className="bg-white p-8">
                <Icon className="text-electric" size={24} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline">
            View all services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Why partner */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Why partner with us"
              title="A professional approach to long-term growth."
            />
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-3">
            {partnershipBenefits.map((benefit) => (
              <li key={benefit.title} className="border-t border-navy-900 pt-5">
                <h3 className="font-semibold text-navy-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Brand partnership process"
          title="Four clear steps from first contact to next steps."
        />
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Let&apos;s Explore a Partnership.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy-100">
              Are you a brand owner, manufacturer, or authorized distributor? Tell us about your products and let&apos;s discuss potential opportunities.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button href="/brand-partnerships" variant="light">Start a Partnership Conversation</Button>
          </div>
        </div>
      </Section>
    </>
  );
}