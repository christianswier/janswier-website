# Jan Swier website

Nieuwe statische website voor [janswier.nl](https://janswier.nl), gebouwd met Next.js, React en TypeScript.

## Lokaal starten

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Markten onderhouden

Iedere markt staat in een eigen Markdown-bestand in `content/markets`. De velden bovenaan bepalen de dag, tijden, locatie en zichtbaarheid. De tekst onder de tweede `---` is de korte beschrijving.

- Markt wijzigen: pas het bijbehorende bestand aan.
- Markt toevoegen: kopieer een bestand en gebruik een unieke `slug`.
- Markt tijdelijk verbergen: zet `active: false`.
- Markt verwijderen: verwijder het bestand. Verbergen heeft de voorkeur.

`npm run build` valideert alle marktgegevens. Een foutieve tijd, URL of dubbele slug stopt de publicatie.

## Pages CMS

De `.pages.yml` in de projectroot configureert een visuele editor voor de marktbestanden. Nadat de repository op GitHub staat, kan deze via [Pages CMS](https://pagescms.org) worden geopend.

## Productiebuild

```bash
npm run check
```

Next.js schrijft de statische website naar `out/`. Deze map kan naar Argeweb worden geüpload. Automatische FTP/FTPS-publicatie wordt toegevoegd zodra de exacte Argeweb-verbindingsgegevens bekend zijn.

## Contactformulier

Het formulier verwacht een externe endpoint via:

```text
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://...
```

Zonder endpoint blijft de verzendknop uitgeschakeld en zijn e-mail en telefoon gewoon beschikbaar. Kies en documenteer de formulierdienst voordat de site live gaat.

## Belangrijke conceptteksten

De privacypagina en duurzaamheidsclaims moeten vóór publicatie inhoudelijk worden gecontroleerd. Ze zijn bewust terughoudend geformuleerd zolang exacte gegevens en de formulierdienst ontbreken.
