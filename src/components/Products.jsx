import React from "react";
import "./products.scss";

const redactedProducts = [
  {
    name: "K1-[REDACTED]",
    desc: "// Description withheld — stay tuned",
  },
  {
    name: "K1-[REDACTED]",
    desc: "// Under active development by Kiyaan X",
  },
  {
    name: "K1-[REDACTED]",
    desc: "// Confidential module in private testing",
  },
];

const Products = () => {
  return (
    <section className="products-section" id="products"> {/* <-- Added ID */}
      <div className="products-header">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtext">
          Some revolutions begin in silence. Discover what’s brewing beneath the surface.
        </p>
      </div>

      <div className="products-grid">
        {redactedProducts.map((product, index) => (
          <div className="product-card redacted" key={index}>
            <div className="icon-wrapper">
              <div className="confidential-label">CONFIDENTIAL</div>
            </div>
            <h3 className="glitch-text">{product.name}</h3>
            <p className="redacted-desc">{product.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;