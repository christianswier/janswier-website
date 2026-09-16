"use client";

import { type FormEvent, useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return;
    setStatus("sending");

    const form = event.currentTarget;
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <div className="field"><label htmlFor="name">Naam</label><input id="name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="email">E-mailadres</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="field"><label htmlFor="subject">Onderwerp</label><input id="subject" name="subject" required /></div>
      <div className="field"><label htmlFor="message">Bericht</label><textarea id="message" name="message" rows={7} minLength={10} required /></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="company">Bedrijf</label><input id="company" name="company" tabIndex={-1} autoComplete="off" /></div>
      <p className="form-privacy">Door dit formulier te versturen gaat u akkoord met de verwerking van uw gegevens zoals beschreven in ons <a href="/privacy/">privacybeleid</a>.</p>
      <button className="button" type="submit" disabled={!endpoint || status === "sending"}>
        {status === "sending" ? "Versturen…" : "Bericht versturen"}
      </button>
      {!endpoint && <p className="form-message">Het formulier wordt bij de productieconfiguratie gekoppeld. U kunt ons nu rechtstreeks e-mailen.</p>}
      {status === "success" && <p className="form-message success" role="status">Bedankt. Uw bericht is verstuurd.</p>}
      {status === "error" && <p className="form-message error" role="alert">Versturen is niet gelukt. Probeer het later opnieuw of stuur een e-mail.</p>}
    </form>
  );
}
