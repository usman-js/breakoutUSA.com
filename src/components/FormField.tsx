import type { ReactNode } from "react";

const inputBase =
  "mt-2 w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric disabled:opacity-60";

export function Field({
  id,
  label,
  error,
  required,
  children,
  hint,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label}
        {required && <span className="text-electric" aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function inputClass(hasError?: boolean) {
  return `${inputBase} ${hasError ? "border-red-500" : "border-line"}`;
}
