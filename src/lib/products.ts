export type Product = {
  name: string;
  category: "Fruit" | "Groente" | "Aardappelen" | "Specialiteiten";
  season: string;
  description: string;
};

export const products: Product[] = [
  {
    name: "Hollandse aardbeien",
    category: "Fruit",
    season: "Voorjaar en zomer",
    description: "Heerlijk uit eigen land, met volop keuze gedurende een groot deel van het jaar.",
  },
  {
    name: "Navelsinaasappels",
    category: "Fruit",
    season: "Het hele jaar",
    description: "Afhankelijk van het seizoen uit Spanje, Portugal, Zuid-Afrika of Chili.",
  },
  {
    name: "Mandarijnen",
    category: "Fruit",
    season: "Het hele jaar",
    description: "Zachtzoet, sappig en zorgvuldig geselecteerd uit de beste herkomstgebieden van het moment.",
  },
  {
    name: "Slobberperen",
    category: "Specialiteiten",
    season: "September tot februari",
    description: "De enige echte Slobberperen: mooi rijp, zoet en bijzonder sappig.",
  },
  {
    name: "Delcorf-appels",
    category: "Fruit",
    season: "Augustus en september",
    description: "Een vroege Hollandse appel met een heerlijke geur en fris-zure smaak.",
  },
  {
    name: "Gieser Wildeman-stoofperen",
    category: "Fruit",
    season: "Oktober tot april",
    description: "Uit West-Friesland, mooi rood stovende en vol van smaak.",
  },
  {
    name: "Verse knoflook",
    category: "Groente",
    season: "Seizoensgebonden",
    description: "Rechtstreeks uit Slootdorp: niet gedroogd en vol van smaak.",
  },
  {
    name: "Witlof",
    category: "Groente",
    season: "Het hele jaar",
    description: "Rechtstreeks uit Zwaagdijk, kraakvers en verkrijgbaar in verschillende sorteringen.",
  },
  {
    name: "Bloemkool",
    category: "Groente",
    season: "Het hele jaar",
    description: "In het seizoen uit Andijk en omgeving; in de winter rechtstreeks uit Spanje.",
  },
  {
    name: "Gember",
    category: "Groente",
    season: "Het hele jaar",
    description: "Pittig-zoet van smaak en geschikt voor thee, warme gerechten en verse sappen.",
  },
  {
    name: "Kastanjechampignons",
    category: "Groente",
    season: "Het hele jaar",
    description: "Uit Slootdorp, stevig van structuur en bijzonder smaakvol.",
  },
  {
    name: "Trostomaten",
    category: "Groente",
    season: "Seizoensgebonden",
    description: "Rechtstreeks uit de kas in Wervershoof, met een volle tomatensmaak.",
  },
  {
    name: "Rode paprika’s",
    category: "Groente",
    season: "Seizoensgebonden",
    description: "Stevig en knapperig, afkomstig van telers uit onze regio wanneer het seizoen dat toelaat.",
  },
  {
    name: "Zeeuwse Doré",
    category: "Aardappelen",
    season: "Juni tot november",
    description: "Lekker kruimige aardappelen van de nieuwe oogst, rechtstreeks van Tholen.",
  },
  {
    name: "Opperdoezer Ronde",
    category: "Aardappelen",
    season: "Vanaf juni",
    description: "De bekende regionale aardappel met zijn kenmerkende vorm en pittige smaak.",
  },
];

export const productCategories = ["Fruit", "Groente", "Aardappelen", "Specialiteiten"] as const;
