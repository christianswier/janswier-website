import type { Metadata } from "next";
import { GrapeMotif } from "@/components/grape-motif";

export const metadata: Metadata = {
  title: "Milieu",
  description: "Lees hoe Jan Swier werkt aan minder afval, hergebruik van materialen, efficiënt vervoer en zonne-energie.",
  alternates: { canonical: "/milieu" },
};

const measures = [
  {
    number: "01",
    title: "Afval scheiden",
    text: "Afval van de marktdag gaat mee terug naar onze thuisbasis. Daar scheiden we papier en karton, hout, plastic, groenafval en restafval voor de juiste verwerking.",
  },
  {
    number: "02",
    title: "Minder verpakkingen",
    text: "We verkopen zoveel mogelijk producten los. We moedigen klanten aan om een eigen tas of boodschappennetje mee te nemen en gebruiken alleen verpakking wanneer dat nodig is.",
  },
  {
    number: "03",
    title: "Herbruikbaar fust",
    text: "Kunststof kratten en pallets gaan terug naar onze leveranciers. Na reiniging worden ze opnieuw gebruikt, zodat dezelfde materialen vele malen kunnen rouleren.",
  },
  {
    number: "04",
    title: "Efficiënt vervoer",
    text: "We plannen de verkoopwagens zo efficiënt mogelijk en gebruiken energiezuinige ledverlichting in onze voertuigen en bedrijfsruimte.",
  },
  {
    number: "05",
    title: "Zonne-energie",
    text: "Zonnepanelen op ons bedrijfspand leveren elektriciteit voor onder andere de koelcellen, verlichting, heftruck en elektrische palletwagens.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="page-hero sustainability-hero">
        <GrapeMotif className="page-grape-motif" />
        <div>
          <p className="eyebrow">Bewust omgaan met onze omgeving</p>
          <h1>Onze milieuvoetafdruk</h1>
          <p>Met praktische keuzes proberen we afval, verpakkingen en energiegebruik zoveel mogelijk te beperken.</p>
        </div>
      </section>
      <section className="section">
        <div className="measure-list">
          {measures.map((measure) => (
            <article key={measure.number} className="measure-item">
              <span>{measure.number}</span>
              <div><h2>{measure.title}</h2><p>{measure.text}</p></div>
            </article>
          ))}
        </div>
        <div className="honesty-note">
          <h2>Stap voor stap beter</h2>
          <p>We blijven kijken waar we materialen kunnen besparen, vaker kunnen hergebruiken en onze werkwijze verder kunnen verbeteren.</p>
        </div>
      </section>
    </>
  );
}
