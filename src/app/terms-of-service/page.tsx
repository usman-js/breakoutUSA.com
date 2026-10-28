import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        text="Draft placeholder. This page must be reviewed and finalized by qualified legal counsel before launch."
      />
      <Section>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
          <p className="rounded-md border border-dashed border-electric/40 bg-electric-50 p-4 text-sm text-electric-600">
            [Placeholder] Replace this section with the finalized Terms of Service for Breakout USA.
          </p>
          <p>Last updated: [to confirm]</p>
        </div>
      </Section>
    </>
  );
}
