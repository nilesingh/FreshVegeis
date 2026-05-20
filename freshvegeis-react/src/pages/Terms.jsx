import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
      <Header />

      <div className="terms-container">
        <h2>1. Acceptance of Terms</h2>

        <p>
          By accessing or using our website, you agree to comply with these
          Terms of Use. If you do not agree, please do not use our services.
        </p>

        <h2>2. Use of Content</h2>

        <p>
          All images, text, and resources on this site are for informational
          and personal use only. You may not reproduce, distribute, or modify
          our content without prior written consent.
        </p>

        <h2>3. User Responsibilities</h2>

        <ul>
          <li>
            Provide accurate information when interacting with our site.
          </li>

          <li>
            Do not misuse the site for unlawful purposes.
          </li>

          <li>
            Respect intellectual property rights.
          </li>
        </ul>

        <h2>4. Purchases & Transactions</h2>

        <p>
          If you purchase any products or accessories from our website, you
          agree to provide valid payment details and accept our return and
          refund policies.
        </p>

        <h2>5. Privacy</h2>

        <p>
          Your privacy is important to us. Please review our{" "}
          <a href="/privacy">Privacy Policy</a> to understand how we handle
          your personal data.
        </p>

        <h2>6. Limitation of Liability</h2>

        <p>
          We are not responsible for any damages or losses resulting from the
          use or inability to use our website, products, or services.
        </p>

        <h2>7. Changes to Terms</h2>

        <p>
          We reserve the right to update these Terms of Use at any time.
          Continued use of the site after changes means you accept the updated
          terms.
        </p>

        <h2>8. Contact Us</h2>

        <p>
          If you have questions about these terms, contact us at:
          <br />
          <strong>info@example.com</strong>
          <br />
          <strong>+1 613 123 0258</strong>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Terms;