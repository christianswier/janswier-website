import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">Jan Swier</p>
          <p>Verse groente, fruit en aardappelen op de markt.</p>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div>
          <p className="footer-heading">Bezoek ons</p>
          <p>{site.address}</p>
          <Link href="/markten">Bekijk onze markten</Link>
        </div>
        <div>
          <p className="footer-heading">Meer</p>
          <a href={site.facebookUrl} target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href={site.voorfruitUrl} target="_blank" rel="noreferrer">Voorfruit ↗</a>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Jan Swier AGF</div>
    </footer>
  );
}
