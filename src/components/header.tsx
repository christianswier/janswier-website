"use client";

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/markten", label: "Onze markten" },
  { href: "/producten", label: "Onze producten" },
  { href: "/bedrijf", label: "Over ons" },
  { href: "/milieu", label: "Milieu" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Jan Swier, naar de homepage">
          <Image src={withBasePath("/brand/jan-swier.svg")} alt="Jan Swier" width={300} height={103} priority />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu {open ? "sluiten" : "openen"}</span>
          <span aria-hidden="true" className="menu-lines" />
        </button>

        <nav id="main-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Hoofdnavigatie">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
          <a href={site.voorfruitUrl} target="_blank" rel="noreferrer" className="external-link">
            Voorfruit <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
