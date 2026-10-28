import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text="Draft placeholder. This page must be reviewed and finalized by qualified legal counsel before launch."
      />
      <Section>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
          <p className="rounded-md border border-dashed border-electric/40 bg-electric-50 p-4 text-sm text-electric-600">
            [Placeholder] Replace this section with the finalized Privacy Policy for Breakout USA. It should describe
            what inquiry data is collected from the forms, how it is used, and how it is stored.
          </p>
          <p>Last updated: [to confirm]</p>
        </div>
      </Section>
    </>
  );
}
