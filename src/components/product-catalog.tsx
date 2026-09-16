"use client";

import { useState } from "react";
import { productCategories, products } from "@/lib/products";

export function ProductCatalog() {
  const [category, setCategory] = useState<string>("Alles");
  const shown = category === "Alles" ? products : products.filter((product) => product.category === category);

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter producten op categorie">
        {["Alles", ...productCategories].map((option) => (
          <button key={option} type="button" className={category === option ? "filter-button active" : "filter-button"} onClick={() => setCategory(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {shown.map((product) => (
          <article className="product-card" key={product.name}>
            <div className={`product-accent category-${product.category.toLowerCase()}`} />
            <p className="product-category">{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-season"><strong>Seizoen:</strong> {product.season}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
