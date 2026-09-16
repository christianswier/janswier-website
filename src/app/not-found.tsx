import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="eyebrow">404</p>
      <h1>Deze pagina bestaat niet</h1>
      <p>Ga terug naar de homepage of bekijk waar we deze week op de markt staan.</p>
      <div className="button-row"><Link href="/" className="button">Naar home</Link><Link href="/markten" className="button secondary">Onze markten</Link></div>
    </section>
  );
}
