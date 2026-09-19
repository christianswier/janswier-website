import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GrapeMotif } from "@/components/grape-motif";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Maak kennis met familiebedrijf Jan Swier en onze thuisbasis in Zwaagdijk-Oost.",
  alternates: { canonical: "/bedrijf" },
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <GrapeMotif className="page-grape-motif" />
        <div>
          <p className="eyebrow">Familiebedrijf uit West-Friesland</p>
          <h1>Over Jan Swier</h1>
          <p>Iedere marktdag begint in Zwaagdijk-Oost, waar we ons assortiment samenstellen en de verkoopwagens klaarmaken.</p>
        </div>
      </section>

      <section className="section split-section">
        <div className="content-copy">
          <p className="eyebrow">Pieter en Frank Swier</p>
          <h2>Persoonlijk en vertrouwd</h2>
          <p>Waarschijnlijk kent u ons al van een van onze markten. Samen met onze medewerkers zorgen we ervoor dat iedere kraam er verzorgd bij staat en vol ligt met verse groente, fruit en aardappelen.</p>
          <p>We kopen bij verschillende telers, groothandels en importeurs. Daarbij kijken we altijd naar wat op dat moment de beste smaak en kwaliteit biedt. Veel producten komen rechtstreeks uit onze eigen regio.</p>
        </div>
        <Image className="rounded-image" src={withBasePath("/images/pieter-frank-swier.jpg")} alt="Pieter en Frank Swier bij een van hun marktkramen" width={625} height={416} />
      </section>

      <section className="section split-section reversed">
        <Image className="rounded-image wide-image" src={withBasePath("/images/thuisbasis.jpg")} alt="De thuisbasis van Jan Swier in Zwaagdijk-Oost" width={1200} height={675} />
        <div className="content-copy">
          <p className="eyebrow">Onze thuisbasis</p>
          <h2>Van Zwaagdijk-Oost naar de markt</h2>
          <p>Ons bedrijfspand staat centraal op het WFO-bedrijventerrein. Vanuit hier vertrekken onze verkoopwagens vroeg in de ochtend naar de markten en keren ze na afloop weer terug.</p>
          <p>Het pand biedt ruimte aan drie koelcellen, onze werkvloer, kantoor, verpakkingen en herbruikbaar fust. Leveranciers brengen hier dagelijks verse producten.</p>
          <Link href="/markten" className="text-link">Bekijk waar we deze week staan →</Link>
        </div>
      </section>
    </>
  );
}
