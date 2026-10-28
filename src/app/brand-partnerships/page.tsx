import PageHero from "@/components/PageHero";
import Section, { SectionHeading } from "@/components/Section";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import InquiryForm from "@/components/InquiryForm";
import { partnershipFaqs } from "@/lib/site";

export const metadata = {
  title: "Brand Partnerships",
  description:
    "Apply to authorize Breakout USA as a sales partner for your products on Amazon, Walmart Marketplace, and eBay.",
};

const whoCanApply = [
  {
    title: "Brand owners",
    text: "Companies that own the brand and have the authority to approve who sells its products online.",
  },
  {
    title: "Manufacturers",
    text: "Producers who make products under their own name or for other brands and can approve sales channels.",
  },
  {
    title: "Authorized distributors",
    text: "Distributors that hold written authorization to sell a brand's products and can share that authorization.",
  },
];

const neededInfo = [
  "Brand name and company legal name",
  "Company website or primary online presence",
  "Product categories and a short product overview",
  "Current marketplace presence, if any",
  "Confirmation that you can approve a sales partner for your products",
];

export default function BrandPartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Partnerships"
        title="Authorize Breakout USA to sell your products online."
        text="We are looking to partner with brands, manufacturers, and authorized distributors who want to explore new sales opportunities on leading online marketplaces."
      >
        <a
          href="#inquiry"
          className="inline-flex items-center justify-center rounded-md bg-electric px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-600"
        >
          Start a Partnership Conversation
        </a>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Who should apply" title="Brands and authorized sellers of their products." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whoCanApply.map((item) => (
            <div key={item.title} className="rounded-lg border border-line p-7">
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="The process" title="How a partnership comes together." />
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What we need" title="Information that helps us respond quickly." />
            <ul className="mt-8 space-y-3">
              {neededInfo.map((item) => (
                <li key={item} className="flex gap-3 text-base text-navy-900">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="FAQ" title="Common questions." />
            <div className="mt-8">
              <FAQ items={partnershipFaqs} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" id="inquiry">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Partnership inquiry"
              title="Tell us about your products."
              text="Share a few details and we will reply to your business email. Submitting this form does not commit you to any agreement."
            />
          </div>
          <div className="lg:col-span-3">
            <InquiryForm
              type="partnership"
              title="Partnership inquiry"
              description="All fields marked * are required."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
