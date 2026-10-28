"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Field, inputClass } from "./FormField";
import {
  categoryOptions,
  marketplaceOptions,
  roleOptions,
} from "@/lib/site";
import {
  validateInquiry,
  type FieldErrors,
  type InquiryInput,
  type InquiryType,
} from "@/lib/validation";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

const emptyForm: InquiryInput = {
  type: "partnership",
  fullName: "",
  email: "",
  company: "",
  website: "",
  role: "",
  category: "",
  marketplace: "",
  message: "",
  consent: false,
};

export default function InquiryForm({
  type,
  title,
  description,
}: {
  type: InquiryType;
  title: string;
  description?: string;
}) {
  const [form, setForm] = useState<InquiryInput>({ ...emptyForm, type });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const isPartnership = type === "partnership";

  function update<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateInquiry(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ state: "success" });
        setForm({ ...emptyForm, type });
        return;
      }

      const data = (await response.json().catch(() => null)) as { error?: string; errors?: FieldErrors } | null;
      if (data?.errors) setErrors(data.errors);
      setStatus({
        state: "error",
        message: data?.error ?? "Something went wrong. Please try again.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "We could not reach the server. Check your connection and try again.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="rounded-lg border border-line bg-white p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-electric" size={44} aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Thank you. Your inquiry has been received.</h3>
        <p className="mt-2 text-sm text-muted">We will review it and get back to you using the email you provided.</p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-electric hover:underline"
          onClick={() => setStatus({ state: "idle" })}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const submitting = status.state === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-line bg-white p-6 sm:p-10">
      <h3 className="text-xl font-semibold text-navy-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted">{description}</p>}

      {status.state === "error" && (
        <div role="alert" className="mt-6 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{status.message}</p>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={inputClass(!!errors.fullName)}
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field id="email" label="Business email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        {isPartnership && (
          <>
            <Field id="company" label="Company or brand name" required error={errors.company}>
              <input
                id="company"
                name="company"
                autoComplete="organization"
                className={inputClass(!!errors.company)}
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
            </Field>

            <Field id="website" label="Company website" error={errors.website} hint="Optional. Include https://">
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://"
                className={inputClass(!!errors.website)}
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
                aria-invalid={!!errors.website}
                aria-describedby={errors.website ? "website-error" : undefined}
              />
            </Field>

            <Field id="role" label="Your role" required error={errors.role}>
              <select
                id="role"
                name="role"
                className={inputClass(!!errors.role)}
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
                aria-invalid={!!errors.role}
                aria-describedby={errors.role ? "role-error" : undefined}
              >
                <option value="">Select a role</option>
                {roleOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field id="category" label="Product category" required error={errors.category}>
              <select
                id="category"
                name="category"
                className={inputClass(!!errors.category)}
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                aria-invalid={!!errors.category}
                aria-describedby={errors.category ? "category-error" : undefined}
              >
                <option value="">Select a category</option>
                {categoryOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>

            <div className="sm:col-span-2">
              <Field id="marketplace" label="Current marketplace presence" required error={errors.marketplace}>
                <select
                  id="marketplace"
                  name="marketplace"
                  className={inputClass(!!errors.marketplace)}
                  value={form.marketplace}
                  onChange={(e) => update("marketplace", e.target.value)}
                  aria-invalid={!!errors.marketplace}
                  aria-describedby={errors.marketplace ? "marketplace-error" : undefined}
                >
                  <option value="">Select an option</option>
                  {marketplaceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <Field
            id="message"
            label={isPartnership ? "Message" : "How can we help?"}
            required
            error={errors.message}
            hint="Tell us about your products or question. At least 10 characters."
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              className={inputClass(!!errors.message)}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <label className="flex gap-3 text-sm text-ink">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 h-4 w-4 accent-electric"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <span>
              I agree that Breakout USA may contact me about this inquiry. <span className="text-electric">*</span>
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Fields marked * are required.</p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-electric px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
          {submitting ? "Sending..." : isPartnership ? "Start a Partnership Conversation" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
