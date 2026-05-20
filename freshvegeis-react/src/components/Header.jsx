import React from "react";

import logo from "../assets/images/logo.png";

function Header() {
  const styles = {
    header: {
      width: "100%",
      backgroundColor: "#03262c",
      padding: "20px 0",
    },

    headerImg: {
      display: "flex",

      justifyContent: "space-between",

      alignItems: "center",

      padding: "0 80px",

      flexWrap: "wrap",
    },

    logo: {
      width: "80px",

      height: "60px",

      objectFit: "contain",
    },

    menuBtn: {
      display: "none",

      color: "white",

      fontSize: "28px",

      cursor: "pointer",
    },

    middle: {
      display: "flex",

      gap: "35px",
    },

    link: {
      textDecoration: "none",

      color: "white",

      fontSize: "16px",

      fontWeight: "600",
    },

    right: {
      textDecoration: "none",

      color: "white",

      display: "flex",

      flexDirection: "column",

      alignItems: "flex-end",
    },

    phone: {
      margin: "0",

      color: "#65c92c",
    },
  };

  return (
    <div style={styles.header}>
      <div style={styles.headerImg}>
        {/* LOGO */}

        <div>
          <img src={logo} alt="Fresh Veg Logo" style={styles.logo} />
        </div>

        {/* MENU ICON */}

        <div style={styles.menuBtn}>☰</div>

        {/* NAVIGATION */}

        <nav style={styles.middle}>
          <a href="/" style={styles.link}>
            Home
          </a>

          <a href="/about" style={styles.link}>
            About
          </a>

          <a href="/product" style={styles.link}>
            Product
          </a>

          <a href="/gallery" style={styles.link}>
            Gallery
          </a>
        </nav>

        {/* CALL SECTION */}

        <div>
          <a href="tel:+919876543213" style={styles.right}>
            Call Us!
            <p style={styles.phone}>+91 9876543213</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
