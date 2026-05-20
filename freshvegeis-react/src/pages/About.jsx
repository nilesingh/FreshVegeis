import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import farmImg from "../assets/testimonial/testimonial-1.png";

function About() {
  const styles = {
    about: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      padding: "60px 20px",
      flexWrap: "wrap",
      backgroundColor: "#f8f8f8",
    },

    image: {
      width: "350px",
      maxWidth: "100%",
      borderRadius: "12px",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    },

    text: {
      maxWidth: "550px",
    },

    title: {
      fontSize: "32px",
      color: "#2e7d32",
      marginBottom: "15px",
    },

    paragraph: {
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#555",
    },
  };

  return (
    <>
      <Header />

      <section style={styles.about}>
        <img src={farmImg} alt="Farm" style={styles.image} />

        <div style={styles.text}>
          <h2 style={styles.title}>About Our Farm</h2>

          <p style={styles.paragraph}>
            We believe in healthy, chemical-free farming. Our mission is to bring
            organic vegetables and fruits directly from local farms, ensuring
            freshness, nutrition, and sustainability.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
