import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export default function Section({
  children,
  tone = "white",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "white" | "soft" | "navy";
  id?: string;
  className?: string;
}) {
  const bg = {
    white: "bg-white",
    soft: "bg-navy-50",
    navy: "bg-navy-900 text-white",
  }[tone];
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
      )}
      <h2 className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isDark ? "text-navy-100" : "text-muted"}`}>{text}</p>
      )}
    </div>
  );
}
