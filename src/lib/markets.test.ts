import { describe, expect, it } from "vitest";
import type { Market } from "./markets";
import { getMarketsForDay, getNextMarketDay } from "./market-schedule";

const markets: Market[] = [
  {
    name: "Dinsdagmarkt",
    slug: "dinsdagmarkt",
    day: "dinsdag",
    dayNumber: 2,
    opensAt: "08:00",
    closesAt: "14:00",
    address: "Marktplein",
    city: "Teststad",
    mapsUrl: "https://example.com",
    active: true,
    featured: false,
    notice: "",
    description: "Testmarkt",
  },
  {
    name: "Zaterdagmarkt",
    slug: "zaterdagmarkt",
    day: "zaterdag",
    dayNumber: 6,
    opensAt: "08:00",
    closesAt: "16:00",
    address: "Kerkstraat",
    city: "Teststad",
    mapsUrl: "https://example.com",
    active: true,
    featured: false,
    notice: "",
    description: "Testmarkt",
  },
];

describe("market schedule", () => {
  it("returns markets for the requested day", () => {
    expect(getMarketsForDay(markets, 2)).toHaveLength(1);
    expect(getMarketsForDay(markets, 2)[0].name).toBe("Dinsdagmarkt");
  });

  it("wraps around to the next available market day", () => {
    expect(getNextMarketDay(markets, 6)[0].name).toBe("Dinsdagmarkt");
  });
});
