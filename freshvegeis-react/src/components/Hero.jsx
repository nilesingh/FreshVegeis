import React from "react";
import "./HeroSection.css";
import banner from "../assets/banner-slide/Banner-1.jpg";

function HeroSection() {
  return (
    <>
      {/* HERO */}
      <div
        className="page1"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>100% Organic</h1>

        <p>Fresh & Natural Farm Food</p>

        <p className="hero-text">
          Bringing you the purest organic produce straight from our farms.
        </p>

        <button>
          <a href="/product">ALL PRODUCTS</a>
        </button>
      </div>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>Subscribe for Fresh Updates</h2>

        <input type="email" placeholder="Enter your email" />

        <button>Subscribe</button>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Fresh Organic Farm. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default HeroSection;