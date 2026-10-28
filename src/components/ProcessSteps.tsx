import { processSteps } from "@/lib/site";

export default function ProcessSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
      {processSteps.map((step, index) => (
        <li key={step.title} className="bg-white p-7">
          <span className="text-sm font-semibold text-electric">0{index + 1}</span>
          <h3 className="mt-3 text-lg font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
