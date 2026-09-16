import type { Market } from "./markets";

export function getMarketsForDay(markets: Market[], dayNumber: number): Market[] {
  return markets.filter((market) => market.active && market.dayNumber === dayNumber);
}

export function getNextMarketDay(markets: Market[], dayNumber: number): Market[] {
  for (let offset = 1; offset <= 7; offset += 1) {
    const candidate = (dayNumber + offset) % 7;
    const matches = getMarketsForDay(markets, candidate);
    if (matches.length > 0) return matches;
  }
  return [];
}
