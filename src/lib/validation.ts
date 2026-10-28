// Shared validation used by both the browser form and the API route.
// Never trust the browser alone: the server validates again.

export type InquiryType = "partnership" | "contact";

export type InquiryInput = {
  type: InquiryType;
  fullName: string;
  email: string;
  company: string;
  website: string;
  role: string;
  category: string;
  marketplace: string;
  message: string;
  consent: boolean;
};

export type FieldErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateInquiry(input: InquiryInput): FieldErrors {
  const errors: FieldErrors = {};

  if (input.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (input.type === "partnership") {
    if (input.company.trim().length < 2) {
      errors.company = "Please enter your company or brand name.";
    }
    if (input.website.trim() && !isValidUrl(input.website.trim())) {
      errors.website = "Please enter a full URL starting with https://";
    }
    if (!input.role) {
      errors.role = "Please select your role.";
    }
    if (!input.category) {
      errors.category = "Please select a product category.";
    }
    if (!input.marketplace) {
      errors.marketplace = "Please select your current marketplace presence.";
    }
  }

  if (input.message.trim().length < 10) {
    errors.message = "Please write a short message (at least 10 characters).";
  }

  if (!input.consent) {
    errors.consent = "Please confirm you agree to be contacted about this inquiry.";
  }

  return errors;
}

export function sanitizeInquiry(raw: unknown): InquiryInput | null {
  if (!raw || typeof raw !== "object") return null;
  const data = raw as Record<string, unknown>;

  const text = (key: string) =>
    typeof data[key] === "string" ? (data[key] as string).slice(0, 2000) : "";

  const type = data.type === "contact" ? "contact" : "partnership";

  return {
    type,
    fullName: text("fullName"),
    email: text("email"),
    company: text("company"),
    website: text("website"),
    role: text("role"),
    category: text("category"),
    marketplace: text("marketplace"),
    message: text("message"),
    consent: data.consent === true,
  };
}
