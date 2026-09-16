import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Jan Swier",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/images/pieter-frank-swier.jpg", width: 625, height: 416 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <a href="#inhoud" className="skip-link">Ga naar de inhoud</a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
