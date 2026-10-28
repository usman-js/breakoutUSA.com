import Link from "next/link";
import Logo from "./Logo";
import CopyrightYear from "./CopyrightYear";
import { Container } from "./Section";
import { company, navLinks, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="[&_span]:text-white" />
            <p className="mt-5 text-sm leading-relaxed text-navy-100/80">{company.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link href="/services" className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Brands</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Are you a brand owner, manufacturer, or authorized distributor?
            </p>
            <Link
              href="/brand-partnerships"
              className="mt-4 inline-block text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Start a partnership conversation
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-700 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>© <CopyrightYear /> {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
