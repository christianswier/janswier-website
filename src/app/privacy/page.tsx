import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy-informatie van Jan Swier AGF.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section legal-page">
      <p className="eyebrow">Uw gegevens</p>
      <h1>Privacy</h1>
      <p>Jan Swier AGF verwerkt alleen persoonsgegevens die u zelf verstrekt wanneer u telefonisch, per e-mail of via het contactformulier contact met ons opneemt.</p>
      <h2>Contactformulier</h2>
      <p>De gegevens uit het contactformulier gebruiken we uitsluitend om uw vraag te beantwoorden. De definitieve bewaartermijn en gegevensverwerkers worden ingevuld zodra de formulierdienst is gekozen.</p>
      <h2>Facebook</h2>
      <p>Facebookberichten worden pas geladen nadat u hiervoor kiest. Vanaf dat moment kan Facebook gegevens verwerken en cookies plaatsen volgens het eigen privacybeleid van Meta.</p>
      <h2>Contact over privacy</h2>
      <p>Heeft u vragen over uw gegevens? Neem contact op via <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <p className="draft-notice">Deze pagina is een technische concepttekst en moet vóór publicatie juridisch en inhoudelijk worden aangevuld.</p>
    </section>
  );
}
