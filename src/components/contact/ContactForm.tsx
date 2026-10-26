"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

export type InterestOption = {
  value: string;
  label: string;
};

type ContactFormProps = {
  initialInterest?: string;
  options: InterestOption[];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ initialInterest = "", options }: ContactFormProps) {
  const t = useTranslations("form");
  const defaults = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      phone: "",
      interest: initialInterest,
      message: "",
    }),
    [initialInterest],
  );

  const [form, setForm] = useState<FormState>(defaults);
  const [interestSource, setInterestSource] = useState(initialInterest);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  if (initialInterest !== interestSource) {
    setInterestSource(initialInterest);
    setForm((prev) => ({ ...prev, interest: initialInterest }));
  }

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setError("");
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setError(t("required"));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus("error");
      setError(t("invalidEmail"));
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          interest: form.interest,
          interestLabel:
            options.find((option) => option.value === form.interest)?.label ??
            form.interest,
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(t("sendError"));
      }

      setStatus("success");
      setForm({ ...defaults, interest: form.interest });
    } catch {
      setStatus("error");
      setError(t("sendError"));
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form contact-form--success" role="status">
        <span className="icon-well icon-well--accent">
          <Icon name="check" />
        </span>
        <h3 className="text-xl tracking-tight">{t("received")}</h3>
        <p className="text-ink-500 mt-2 max-w-[42ch] text-sm">{t("receivedBody")}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="cta-secondary"
            onClick={() => setStatus("idle")}
          >
            {t("another")}
          </button>
          <a
            href={siteConfig.contact.whatsapp}
            className="cta"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="message" className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__intro">
        <h2 id="contact-form-heading" className="text-2xl tracking-tight">
          {t("heading")}
        </h2>
        <p className="text-ink-500 mt-2 max-w-[48ch] text-sm">{t("intro")}</p>
      </div>

      <div className="contact-form__grid">
        <label className="field">
          <span className="field__label">{t("name")}</span>
          <input
            className="field__control"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={onChange}
          />
        </label>

        <label className="field">
          <span className="field__label">{t("email")}</span>
          <input
            className="field__control"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={onChange}
          />
        </label>

        <label className="field">
          <span className="field__label">{t("phone")}</span>
          <input
            className="field__control"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={onChange}
          />
        </label>

        <label className="field">
          <span className="field__label">{t("interest")}</span>
          <select
            className="field__control"
            name="interest"
            value={form.interest}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value || "empty"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field field--full">
          <span className="field__label">{t("message")}</span>
          <textarea
            className="field__control field__control--area"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={onChange}
            placeholder={t("placeholder")}
          />
        </label>
      </div>

      {error ? (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button type="submit" className="cta" disabled={status === "submitting"}>
          {status === "submitting" ? t("sending") : t("submit")}
          <Icon name="arrow-right" className="size-4" />
        </button>
        <p className="text-ink-500 max-w-[36ch] text-xs">
          {t("privacy", { email: siteConfig.contact.email })}
        </p>
      </div>
    </form>
  );
}
