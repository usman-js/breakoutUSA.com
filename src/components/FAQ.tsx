import { ChevronDown } from "lucide-react";

export default function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-navy-900 focus:outline-none focus-visible:text-electric">
            {item.question}
            <ChevronDown size={20} className="shrink-0 text-electric transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
