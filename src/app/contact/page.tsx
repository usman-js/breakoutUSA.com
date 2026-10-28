import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InquiryForm from "@/components/InquiryForm";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Breakout USA.",
};

export default function ContactPage() {
  const hasContactDetails = Boolean(company.contactEmail || company.phone || company.address);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business."
        text="Send us a message and we will get back to you. For brand partnership inquiries, please use the dedicated partnership form."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <aside className="space-y-8 lg:col-span-2">
            {hasContactDetails ? (
              <dl className="space-y-6 text-base">
                {company.contactEmail && (
                  <div>
                    <dt className="text-sm font-semibold text-navy-900">Email</dt>
                    <dd className="mt-1 text-muted">
                      <a href={`mailto:${company.contactEmail}`} className="hover:text-electric">{company.contactEmail}</a>
                    </dd>
                  </div>
                )}
                {company.phone && (
                  <div>
                    <dt className="text-sm font-semibold text-navy-900">Phone</dt>
                    <dd className="mt-1 text-muted">{company.phone}</dd>
                  </div>
                )}
                {company.address && (
                  <div>
                    <dt className="text-sm font-semibold text-navy-900">Address</dt>
                    <dd className="mt-1 whitespace-pre-line text-muted">{company.address}</dd>
                  </div>
                )}
              </dl>
            ) : (
              <p className="rounded-md border border-dashed border-electric/40 bg-electric-50 p-5 text-sm text-electric-600">
                Business contact details will appear here once confirmed. Set them in <code>src/lib/site.ts</code>.
              </p>
            )}
          </aside>

          <div className="lg:col-span-3">
            <InquiryForm
              type="contact"
              title="Send us a message"
              description="All fields marked * are required."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
