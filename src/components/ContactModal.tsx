"use client";

import { useEffect, useRef, useState } from "react";
import type { ContactForm } from "@/lib/content";
import { MailIcon } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactModal({ cta, f }: { cta: string; f: ContactForm }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function close() {
    setOpen(false);
    // Let the closing animation finish before resetting a success message.
    if (status === "sent") {
      setStatus("idle");
      setEmail("");
      setMessage("");
    }
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          message: message.trim(),
          website: data.get("website"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      const payload = (await res.json().catch(() => ({}))) as { error?: string };
      setError(
        payload.error === "invalid_email"
          ? f.errorEmail
          : payload.error === "invalid_message"
            ? f.errorMessage
            : f.errorGeneric,
      );
      setStatus("error");
    } catch {
      setError(f.errorGeneric);
      setStatus("error");
    }
  }

  return (
    <>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => setOpen(true)}>
        <MailIcon />
        <span>{cta}</span>
      </button>

      <dialog ref={dialogRef} className="modal" onClose={() => setOpen(false)}>
        <div className="modal-card">
          <button type="button" className="modal-close" onClick={close} aria-label={f.close}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {status === "sent" ? (
            <div className="modal-done">
              <h2 className="modal-title">{f.title}</h2>
              <p className="modal-success">{f.success}</p>
              <button type="button" className="btn btn-primary btn-lg" onClick={close}>
                {f.close}
              </button>
            </div>
          ) : (
            <form className="modal-form" onSubmit={submit} noValidate>
              <h2 className="modal-title">{f.title}</h2>
              <p className="modal-sub">{f.sub}</p>

              <label className="field">
                <span className="field-label">{f.emailLabel}</span>
                <input
                  className="field-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.emailPlaceholder}
                  autoComplete="email"
                  required
                />
              </label>

              <label className="field">
                <span className="field-label">{f.messageLabel}</span>
                <textarea
                  className="field-input field-textarea"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={f.messagePlaceholder}
                  rows={6}
                  maxLength={5000}
                  required
                />
              </label>

              <input
                className="field-honeypot"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {status === "error" ? (
                <p className="modal-error" role="alert">
                  {error}
                </p>
              ) : null}

              <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
                {status === "sending" ? f.sending : f.submit}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
