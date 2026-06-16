import { useState } from "react";
import { z } from "zod";

type FormStrings = {
  fields: { name: string; email: string; phone: string; subject: string; message: string };
  submit: string;
  sending: string;
  success: string;
  error: string;
  optional: string;
  required: string;
  errors: { nameTooShort: string; emailInvalid: string; subjectTooShort: string; messageTooShort: string };
};

interface Props {
  strings: FormStrings;
  contactHref: string;
}

export default function ContactForm({ strings: s, contactHref }: Props) {
  const schema = z.object({
    name: z.string().trim().min(2, s.errors.nameTooShort).max(100),
    email: z.string().trim().email(s.errors.emailInvalid).max(255),
    phone: z.string().trim().max(30).optional(),
    subject: z.string().trim().min(2, s.errors.subjectTooShort).max(150),
    message: z.string().trim().min(10, s.errors.messageTooShort).max(2000),
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

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
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-gray-200 rounded-md p-8 space-y-5">
      <Field label={s.fields.name} name="name" required error={errors.name} requiredLabel={s.required} />
      <Field label={s.fields.email} name="email" type="email" required error={errors.email} requiredLabel={s.required} />
      <Field label={`${s.fields.phone} ${s.optional}`} name="phone" type="tel" error={errors.phone} requiredLabel={s.required} />
      <Field label={s.fields.subject} name="subject" required error={errors.subject} requiredLabel={s.required} />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5">
          {s.fields.message} <span className="text-accent">{s.required}</span>
        </label>
        <textarea id="message" name="message" rows={6} required className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === "sending"} className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors disabled:opacity-60">
        {status === "sending" ? s.sending : s.submit}
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
