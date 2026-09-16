import type { Metadata } from "next";
import Link from "next/link";
import { GrapeMotif } from "@/components/grape-motif";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Onze producten",
  description: "Ontdek het assortiment groente, fruit, aardappelen en lokale specialiteiten van Jan Swier.",
  alternates: { canonical: "/producten" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero product-hero">
        <GrapeMotif className="page-grape-motif" />
        <div>
          <p className="eyebrow">Vers, lekker en met zorg gekozen</p>
          <h1>Onze producten</h1>
          <p>Van Hollandse aardbeien tot Opperdoezer Ronden. Ons assortiment beweegt mee met het seizoen en wat op dat moment het lekkerst is.</p>
        </div>
      </section>
      <section className="section">
        <ProductCatalog />
        <div className="availability-note">
          <h2>Benieuwd wat er vandaag op de kraam ligt?</h2>
          <p>Het aanbod verschilt per seizoen en markt. Kom langs en vraag ons gerust naar de actuele selectie.</p>
          <Link href="/markten" className="button">Bekijk onze markten</Link>
        </div>
      </section>
    </>
  );
}
