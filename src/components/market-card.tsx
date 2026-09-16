import type { Market } from "@/lib/markets";
import { ClockIcon, MapPinIcon } from "./icons";

export function MarketCard({ market, compact = false }: { market: Market; compact?: boolean }) {
  return (
    <article className={compact ? "market-card compact" : "market-card"}>
      <div className="market-day">{market.day}</div>
      <h3>{market.name}</h3>
      <div className="market-detail">
        <ClockIcon />
        <span>{market.opensAt} – {market.closesAt}</span>
      </div>
      <div className="market-detail">
        <MapPinIcon />
        <span>{market.address}, {market.city}</span>
      </div>
      {!compact && <p>{market.description}</p>}
      {market.notice && <p className="market-notice">{market.notice}</p>}
      <a href={market.mapsUrl} target="_blank" rel="noreferrer" className="text-link">
        Route plannen <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
