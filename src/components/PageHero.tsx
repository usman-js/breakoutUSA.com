import type { ReactNode } from "react";
import { Container } from "./Section";

export default function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-navy-50 py-16 sm:py-20">
      <Container>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
