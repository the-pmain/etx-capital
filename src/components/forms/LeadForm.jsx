import { Button } from "@/components/ui/Button.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { messages } from "@/i18n/index.js";
import { submitLead } from "@/lib/lead.js";
import { routes, withLocale } from "@/lib/paths.js";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function LeadForm({ locale, showPurpose = true, intent = "investor" }) {
  const t = messages(locale).form;
  const { pathname } = useLocation();
  const candidateMode = intent === "candidate";
  const [selectedPurpose, setSelectedPurpose] = useState(intent);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const [sending, setSending] = useState(false);

  const clearError = (name) => {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};

    if (!String(data.get("name") || "").trim()) nextErrors.name = t.required;
    const phone = String(data.get("phone") || "").trim();
    if (!phone) nextErrors.phone = t.required;
    else if (!/^\+?[0-9\s().-]{7,24}$/.test(phone)) nextErrors.phone = t.phoneInvalid;
    const email = String(data.get("email") || "").trim();
    if (email && form.email.validity.typeMismatch) nextErrors.email = t.emailInvalid;
    if (!form.consent.checked) nextErrors.consent = t.consentRequired;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = form.elements.namedItem(Object.keys(nextErrors)[0]);
      first?.focus?.();
      return;
    }

    if (String(data.get("company") || "").trim()) {
      setStatus("success");
      return;
    }

    setSending(true);
    setServerError("");
    const result = await submitLead({
      name: String(data.get("name") || ""),
      email,
      phone,
      message: String(data.get("message") || ""),
      experience: String(data.get("experience") || ""),
      languages: String(data.get("languages") || ""),
      preferredTime: String(data.get("preferredTime") || ""),
      purpose: showPurpose ? String(data.get("purpose") || intent) : intent,
      consentVersion: "1.0",
      consentAcceptedAt: new Date().toISOString(),
      locale,
      page: pathname,
    });
    setSending(false);

    if (result.ok) {
      setStatus("success");
      return;
    }
    setServerError(result.error === "rate_limited" ? t.rateLimit : t.sendError);
  };

  if (status === "success") {
    return (
      <div className="border-gold/45 bg-surface-2 mt-8 rounded-xl border p-6" role="status">
        <Icon name="check-check" className="text-gold size-6" />
        <p className="font-display text-h3 mt-4">{candidateMode ? t.candidateSuccessTitle : t.successTitle}</p>
        <p className="text-muted mt-2 text-sm">{candidateMode ? t.candidateSuccessText : t.successText}</p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 border-hairline bg-surface text-ink placeholder:text-muted/80 hover:border-gold focus:border-gold w-full rounded-lg border px-4 py-3 text-base transition-colors sm:text-sm";

  return (
    <form className="mt-8 space-y-6" noValidate onSubmit={onSubmit}>
      <div>
        <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-name">
          {t.name}
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t.namePh}
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "lead-name-error" : undefined}
          onInput={() => clearError("name")}
        />
        {errors.name ? <p id="lead-name-error" className="text-warn mt-2 text-xs">{errors.name}</p> : null}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-phone">
            {t.phone}
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            maxLength={24}
            placeholder={t.phonePh}
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "lead-phone-error" : undefined}
            onInput={() => clearError("phone")}
          />
          {errors.phone ? <p id="lead-phone-error" className="text-warn mt-2 text-xs">{errors.phone}</p> : null}
        </div>
        <div>
          <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-email">
            {t.email}
            <span className="text-muted ml-1 text-xs font-normal">{t.optional}</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            onInput={() => clearError("email")}
          />
          {errors.email ? <p id="lead-email-error" className="text-warn mt-2 text-xs">{errors.email}</p> : null}
        </div>
      </div>
      {showPurpose ? (
        <fieldset>
          <legend className="font-display text-ink block text-sm font-semibold">{t.purpose}</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {[
              ["investor", t.investor],
              ["partner", t.partner],
              ["candidate", t.candidate],
            ].map(([value, label]) => (
              <label
                key={value}
                className="border-hairline bg-surface hover:border-gold hover:text-gold has-checked:border-gold has-checked:text-gold flex cursor-pointer items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm transition-colors"
              >
                <input
                  type="radio"
                  name="purpose"
                  value={value}
                  defaultChecked={value === intent}
                  className="accent-gold size-4"
                  onChange={() => setSelectedPurpose(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}
      {candidateMode ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-experience">
              {t.experience}
            </label>
            <input
              id="lead-experience"
              name="experience"
              type="text"
              placeholder={t.experiencePh}
              className={fieldClass}
            />
          </div>
          <div>
            <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-languages">
              {t.languages}
            </label>
            <input
              id="lead-languages"
              name="languages"
              type="text"
              placeholder={t.languagesPh}
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-preferred-time">
              {t.preferredTime}
            </label>
            <input
              id="lead-preferred-time"
              name="preferredTime"
              type="text"
              placeholder={t.preferredTimePh}
              className={fieldClass}
            />
          </div>
        </div>
      ) : null}
      <div>
        <label className="font-display text-ink block text-sm font-semibold" htmlFor="lead-message">
          {t.message}
          <span className="text-muted ml-1 text-xs font-normal">{t.optional}</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows="5"
          placeholder={candidateMode ? t.candidateMessagePh : t.messagePh}
          className={`${fieldClass} resize-y`}
        />
      </div>
      <div>
        <label className="text-muted hover:text-gold flex cursor-pointer gap-3 text-sm leading-relaxed transition-colors">
          <input
            id="lead-consent"
            name="consent"
            type="checkbox"
            required
            className="accent-gold mt-0.5 size-4 shrink-0"
          aria-describedby={errors.consent ? "lead-consent-error" : undefined}
            onChange={() => clearError("consent")}
          />
          <span>{t.consent}</span>
        </label>
        <Link
          to={withLocale(locale, routes.consent(selectedPurpose))}
          className="text-gold hover:text-gold-soft mt-2 ml-7 inline-block text-xs"
        >
          {t.consentDocument}
        </Link>
        <span className="text-muted mx-2 text-xs">·</span>
        <Link
          to={withLocale(locale, routes.confidentiality)}
          className="text-gold hover:text-gold-soft mt-2 inline-block text-xs"
        >
          {t.policyDocument}
        </Link>
        {errors.consent ? <p id="lead-consent-error" className="text-warn mt-2 text-xs">{errors.consent}</p> : null}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="lead-company">{t.companyHoneypot}</label>
        <input id="lead-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" size="md" className="w-full sm:w-auto" disabled={sending}>
        {sending ? t.sending : candidateMode ? t.candidateSubmit : t.submit}
      </Button>
      {serverError ? (
        <p role="alert" className="border-warn/50 text-warn flex gap-2.5 rounded-lg border p-3 text-sm leading-relaxed">
          {serverError}
        </p>
      ) : null}
    </form>
  );
}
