"use client";

import { useSyncExternalStore } from "react";
import type { Market } from "@/lib/markets";
import { getMarketsForDay, getNextMarketDay } from "@/lib/market-schedule";
import { MarketCard } from "./market-card";

function getAmsterdamDayNumber() {
  const shortDay = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "Europe/Amsterdam",
  }).format(new Date());

  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(shortDay);
}

const subscribe = () => () => undefined;

export function TodayMarkets({ markets }: { markets: Market[] }) {
  const dayNumber = useSyncExternalStore<number | null>(subscribe, getAmsterdamDayNumber, () => null);

  if (dayNumber === null) {
    return <p className="muted">De markten van vandaag worden geladen…</p>;
  }

  const today = getMarketsForDay(markets, dayNumber);
  const shown = today.length > 0 ? today : getNextMarketDay(markets, dayNumber);

  return (
    <div>
      {today.length === 0 && (
        <p className="today-empty">Vandaag staan wij niet op de markt. Dit zijn onze eerstvolgende markten:</p>
      )}
      <div className="market-grid today-grid">
        {shown.map((market) => <MarketCard key={market.slug} market={market} compact />)}
      </div>
    </div>
  );
}
