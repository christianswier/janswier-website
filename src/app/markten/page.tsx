import type { Metadata } from "next";
import { GrapeMotif } from "@/components/grape-motif";
import { MarketCard } from "@/components/market-card";
import { TodayMarkets } from "@/components/today-markets";
import { getMarkets } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Onze markten",
  description: "Bekijk op welke markten in Noord-Holland Jan Swier deze week staat, met actuele tijden, adressen en route-links.",
  alternates: { canonical: "/markten" },
};

export default function MarketsPage() {
  const markets = getMarkets();

  return (
    <>
      <section className="page-hero compact-hero">
        <GrapeMotif className="page-grape-motif" />
        <div>
          <p className="eyebrow">{markets.length} locaties in Noord-Holland</p>
          <h1>Onze markten</h1>
          <p>Kom langs voor verse producten, persoonlijk advies en een wekelijks wisselend assortiment.</p>
        </div>
      </section>

      <section className="section today-callout">
        <p className="eyebrow">Vandaag</p>
        <h2>U vindt ons hier</h2>
        <TodayMarkets markets={markets} />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Het hele weekschema</p>
          <h2>Wanneer staan we bij u in de buurt?</h2>
          <p>Openingstijden kunnen rond feestdagen of door bijzondere omstandigheden afwijken.</p>
        </div>
        <div className="market-grid">
          {markets.map((market) => <MarketCard key={market.slug} market={market} />)}
        </div>
      </section>
    </>
  );
}
