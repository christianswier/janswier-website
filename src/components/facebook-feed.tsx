"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const feedUrl =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJanSwierAGF&tabs=timeline&width=500&height=580&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false";

export function FacebookFeed() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="facebook-panel">
      <div className="facebook-copy">
        <p className="eyebrow">Blijf op de hoogte</p>
        <h2>Volg Jan Swier op Facebook</h2>
        <p>Bekijk berichten van onze markten en volg ons rechtstreeks op Facebook.</p>
        <a className="button secondary" href={site.facebookUrl} target="_blank" rel="noreferrer">
          Naar Facebook <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="facebook-embed">
        {enabled ? (
          <iframe
            title="Berichten van Jan Swier op Facebook"
            src={feedUrl}
            width="500"
            height="580"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ) : (
          <div className="embed-consent">
            <p>Facebook plaatst mogelijk cookies en ontvangt gegevens wanneer de berichten worden geladen.</p>
            <button type="button" className="button" onClick={() => setEnabled(true)}>
              Facebookberichten tonen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
