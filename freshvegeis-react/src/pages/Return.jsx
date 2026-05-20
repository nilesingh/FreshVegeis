import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Return() {
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "40px auto",
      padding: "30px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      fontFamily: "Montserrat, sans-serif",
      color: "#333",
    },
    title: {
      fontSize: "2.2rem",
      color: "#2e7d32",
      marginBottom: "20px",
      textAlign: "center",
    },
    paragraph: {
      lineHeight: "1.8",
      marginBottom: "18px",
    },
    list: {
      marginLeft: "20px",
      marginBottom: "18px",
    },
  };

  return (
    <>
      <Header />

      <section style={styles.container}>
        <h1 style={styles.title}>Product Return Policy</h1>

        <p style={styles.paragraph}>
          We want every purchase to meet your expectations. If your product is
          damaged, spoiled, or not what you ordered, we offer a simple return
          and refund process.
        </p>

        <p style={styles.paragraph}>
          To qualify for a return, please contact us within 7 days of delivery
          with your order details and a photo of the damaged product.
        </p>

        <h2>How to return a product</h2>

        <ul style={styles.list}>
          <li>Contact support at info@example.com or call +1 613 123 0258.</li>
          <li>Provide your order number and reason for return.</li>
          <li>Keep the product in its original packaging if possible.</li>
          <li>We will review your request and issue a return authorization.</li>
        </ul>

        <h2>Refund & Replacement</h2>

        <p style={styles.paragraph}>
          Once the return is approved and the item is received, we will issue a
          refund or offer a replacement. Refunds typically appear within 5-7
          business days.
        </p>

        <h2>Exceptions</h2>

        <ul style={styles.list}>
          <li>Opened perishable items may only be returned if clearly damaged.</li>
          <li>Products must be returned within the allowed timeframe.</li>
          <li>Items not returned with proper documentation may not qualify.</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}

export default Return;
