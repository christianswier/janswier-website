import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { FacebookFeed } from "@/components/facebook-feed";
import { ProduceIllustration } from "@/components/produce-illustration";
import { TodayMarkets } from "@/components/today-markets";
import { getMarkets } from "@/lib/markets";
import { withBasePath } from "@/lib/paths";

export default function HomePage() {
  const markets = getMarkets();

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Al generaties op de markt</p>
            <h1>Het lekkerste fruit, de beste groente.</h1>
            <p className="hero-intro">
              Verse groente, fruit en aardappelen op negen markten in Noord-Holland. Met veel producten rechtstreeks uit onze eigen regio.
            </p>
            <div className="button-row">
              <Link href="/markten" className="button">
                Waar staan we vandaag? <ArrowRightIcon />
              </Link>
              <Link href="/producten" className="button secondary">Bekijk onze producten</Link>
            </div>
          </div>
          <div className="hero-visual">
            <ProduceIllustration />
          </div>
        </div>
      </section>

      <section className="section today-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Dichtbij en vertrouwd</p>
            <h2>Waar staan we vandaag?</h2>
          </div>
          <Link href="/markten" className="text-link desktop-link">Volledig weekschema <ArrowRightIcon /></Link>
        </div>
        <TodayMarkets markets={markets} />
        <Link href="/markten" className="text-link mobile-link">Volledig weekschema <ArrowRightIcon /></Link>
      </section>

      <section className="section benefits-section" aria-labelledby="waarom-heading">
        <div className="section-heading centered">
          <p className="eyebrow">Waarom Jan Swier</p>
          <h2 id="waarom-heading">Kwaliteit die u kunt proeven</h2>
        </div>
        <div className="benefit-grid">
          <article><span>01</span><h3>Vers ingekocht</h3><p>We kiezen dagelijks producten op smaak, kwaliteit en versheid.</p></article>
          <article><span>02</span><h3>Veel uit de regio</h3><p>Waar mogelijk werken we rechtstreeks met telers uit Noord-Holland.</p></article>
          <article><span>03</span><h3>Persoonlijk advies</h3><p>Vraag ons gerust wat rijp is, hoe u het bewaart of wat er in het seizoen is.</p></article>
        </div>
      </section>

      <section className="section story-section">
        <div className="story-image">
          <Image src={withBasePath("/images/pieter-frank-swier.jpg")} alt="Pieter en Frank Swier bij de marktkraam" width={625} height={416} />
        </div>
        <div className="story-copy">
          <p className="eyebrow">Een echt familiebedrijf</p>
          <h2>Iedere dag met zorg naar de markt</h2>
          <p>
            Samen met onze medewerkers staan Pieter en Frank Swier iedere week op negen locaties. Vanuit onze thuisbasis in Zwaagdijk-Oost vertrekken de verkoopwagens vroeg in de ochtend met een vers en zorgvuldig samengesteld assortiment.
          </p>
          <Link href="/bedrijf" className="text-link">Lees ons verhaal <ArrowRightIcon /></Link>
        </div>
      </section>

      <FacebookFeed />
    </>
  );
}
