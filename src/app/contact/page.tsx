import type { Metadata } from "next";
import { GrapeMotif } from "@/components/grape-motif";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Jan Swier AGF in Zwaagdijk-Oost.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <GrapeMotif className="page-grape-motif" />
        <div><p className="eyebrow">We helpen u graag</p><h1>Contact</h1><p>Heeft u een vraag over een product, een markt of ons bedrijf? Neem gerust contact met ons op.</p></div>
      </section>
      <section className="section contact-grid">
        <div className="contact-details">
          <p className="eyebrow">Direct contact</p>
          <h2>Waarmee kunnen we helpen?</h2>
          <dl>
            <div><dt>Telefoon</dt><dd><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></dd></div>
            <div><dt>E-mail</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt>Adres</dt><dd>{site.address}</dd></div>
          </dl>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Appelmarkt%203%2C%20Zwaagdijk-Oost" target="_blank" rel="noreferrer">Bekijk op Google Maps ↗</a>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
