import { useState } from "react";
import { z } from "zod";

const DIAL_CODES = [
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+32", flag: "🇧🇪", name: "Belgique" },
  { code: "+41", flag: "🇨🇭", name: "Suisse" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada" },
  { code: "+44", flag: "🇬🇧", name: "Royaume-Uni" },
  { code: "+34", flag: "🇪🇸", name: "Espagne" },
  { code: "+39", flag: "🇮🇹", name: "Italie" },
  { code: "+49", flag: "🇩🇪", name: "Allemagne" },
  { code: "+212", flag: "🇲🇦", name: "Maroc" },
  { code: "+213", flag: "🇩🇿", name: "Algérie" },
  { code: "+216", flag: "🇹🇳", name: "Tunisie" },
  { code: "+221", flag: "🇸🇳", name: "Sénégal" },
  { code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire" },
  { code: "+237", flag: "🇨🇲", name: "Cameroun" },
  { code: "+243", flag: "🇨🇩", name: "RD Congo" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+224", flag: "🇬🇳", name: "Guinée" },
  { code: "+222", flag: "🇲🇷", name: "Mauritanie" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+86", flag: "🇨🇳", name: "Chine" },
  { code: "+91", flag: "🇮🇳", name: "Inde" },
  { code: "+55", flag: "🇧🇷", name: "Brésil" },
  { code: "+966", flag: "🇸🇦", name: "Arabie Saoudite" },
  { code: "+971", flag: "🇦🇪", name: "Émirats" },
  { code: "+90", flag: "🇹🇷", name: "Turquie" },
  { code: "+7", flag: "🇷🇺", name: "Russie" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+48", flag: "🇵🇱", name: "Pologne" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+30", flag: "🇬🇷", name: "Grèce" },
  { code: "+40", flag: "🇷🇴", name: "Roumanie" },
] as const;

type DialCode = typeof DIAL_CODES[number]["code"];

type FormStrings = {
  fields: { firstName: string; name: string; email: string; phone: string; subject: string; message: string };
  submit: string;
  sending: string;
  success: string;
  error: string;
  optional: string;
  required: string;
  gdpr: string;
  errors: { firstNameTooShort: string; nameTooShort: string; emailInvalid: string; subjectTooShort: string; messageTooShort: string };
};

interface Props {
  strings: FormStrings;
  contactHref: string;
}

export default function ContactForm({ strings: s, contactHref }: Props) {
  const schema = z.object({
    firstName: z.string().trim().min(2, s.errors.firstNameTooShort).max(100),
    name: z.string().trim().min(2, s.errors.nameTooShort).max(100),
    email: z.string().trim().email(s.errors.emailInvalid).max(255),
    phone: z.string().trim().max(30).optional(),
    subject: z.string().trim().min(2, s.errors.subjectTooShort).max(150),
    message: z.string().trim().min(10, s.errors.messageTooShort).max(2000),
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dialCode, setDialCode] = useState<DialCode>("+33");

  const selectedCountry = DIAL_CODES.find((c) => c.code === dialCode) ?? DIAL_CODES[0];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    if (raw.phoneNumber) {
      raw.phone = `${dialCode}${String(raw.phoneNumber).replace(/^0/, "")}`;
    }
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fieldErrors[i.path[0] as string] = i.message; });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      // TODO: remplacer par l'appel à votre API d'envoi (Resend, SendGrid…)
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
      setDialCode("+33");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-gray-200 rounded-md p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={s.fields.firstName} name="firstName" required error={errors.firstName} requiredLabel={s.required} />
        <Field label={s.fields.name} name="name" required error={errors.name} requiredLabel={s.required} />
      </div>
      <Field label={s.fields.email} name="email" type="email" required error={errors.email} requiredLabel={s.required} />

      {/* Téléphone avec sélecteur d'indicatif */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 mb-1.5">
          {s.fields.phone} <span className="text-gray-400 font-normal text-xs">{s.optional}</span>
        </label>
        <div className="flex">
          <div className="relative shrink-0">
            {/* Select transparent : la valeur affichée est masquée, le span par-dessus prend le relais */}
            <select
              value={dialCode}
              onChange={(e) => setDialCode(e.target.value as DialCode)}
              aria-label="Indicatif téléphonique"
              className="appearance-none h-full rounded-l-md border border-r-0 border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              style={{ width: "5.5rem", color: "transparent", paddingLeft: "0.5rem", paddingRight: "1.5rem", paddingTop: "0.625rem", paddingBottom: "0.625rem" }}
            >
              {DIAL_CODES.map((c) => (
                <option key={`${c.code}-${c.name}`} value={c.code} style={{ color: "#111827" }}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>
            {/* Affichage compact : drapeau + code uniquement */}
            <span className="pointer-events-none absolute inset-y-0 left-0 right-4 flex items-center justify-center gap-1 text-sm select-none">
              <span className="text-base leading-none">{selectedCountry.flag}</span>
              <span className="text-gray-800 font-medium">{selectedCountry.code}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center text-gray-400">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </div>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="6 71 66 12 01"
            className="min-w-0 flex-1 rounded-r-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {errors.phone && <p className="mt-1 text-xs text-accent">{errors.phone}</p>}
      </div>

      <Field label={s.fields.subject} name="subject" required error={errors.subject} requiredLabel={s.required} />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5">
          {s.fields.message} <span className="text-accent">{s.required}</span>
        </label>
        <textarea id="message" name="message" rows={6} required className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      <p className="text-xs text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-3">{s.gdpr}</p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            {s.sending}
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            {s.submit}
          </>
        )}
      </button>

      {status === "success" && <p className="text-sm text-primary bg-secondary border border-primary/20 rounded-md p-3">{s.success}</p>}
      {status === "error" && <p className="text-sm text-accent bg-red-50 border border-accent/20 rounded-md p-3">{s.error}</p>}
    </form>
  );
}

function Field({ label, name, type = "text", required, error, requiredLabel }: {
  label: string; name: string; type?: string; required?: boolean; error?: string; requiredLabel: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900 mb-1.5">
        {label} {required && <span className="text-accent">{requiredLabel}</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  );
}
