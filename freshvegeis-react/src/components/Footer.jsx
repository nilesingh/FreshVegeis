import React from "react";

import gitImg from "../assets/social/GIT.png";
import indeedImg from "../assets/social/indeed.png";
import twitImg from "../assets/social/twit.png";
import fbImg from "../assets/social/fb.png";
import instaImg from "../assets/social/insta.png";

function Footer() {
  const styles = {
    footer: {
      background: "#03262c",
      color: "white",
      padding: "50px",
    },

    panel: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "30px",
    },

    column: {
      flex: "1",
      minWidth: "220px",
    },

    list: {
      listStyle: "none",
      padding: "0",
    },

    link: {
      color: "white",
      textDecoration: "none",
    },

    input: {
      width: "100%",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      marginBottom: "15px",
    },

    button: {
      background: "#65c92c",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
    },

    social: {
      display: "flex",
      gap: "10px",
      marginTop: "15px",
    },

    image: {
      width: "35px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.panel}>
        <div style={styles.column}>
          <h2>Fresh Veg's</h2>

          <ul style={styles.list}>
            <p>Fresh vegetables are packed with essential nutrients,</p>

            <p>vibrant flavors, and numerous health benefits.</p>

            <br />

            <li>Thane district of Maharashtra, India.</li>

            <li>+91 9876543213</li>

            <li>info@example.com</li>
          </ul>
        </div>

        <div style={styles.column}>
          <h2>Customer Support</h2>

          <ul style={styles.list}>
            <li>
              <a href="/about" style={styles.link}>
                About Us
              </a>
            </li>

            <li>
              <a href="/privacy" style={styles.link}>
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms" style={styles.link}>
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="/return" style={styles.link}>
                Product Return
              </a>
            </li>

            <li>
              <a href="/wholesale" style={styles.link}>
                Wholesale Policy
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h2>Quick Links</h2>

          <ul style={styles.list}>
            <li>
              <a href="/" style={styles.link}>
                Home
              </a>
            </li>

            <li>
              <a href="/about" style={styles.link}>
                About Us
              </a>
            </li>

            <li>
              <a href="/product" style={styles.link}>
                Products
              </a>
            </li>

            <li>
              <a href="/gallery" style={styles.link}>
                Gallery
              </a>
            </li>

            <li>
              <a href="/contact" style={styles.link}>
                Contact
              </a>
            </li>

            <li>
              <a href="/accessories" style={styles.link}>
                Accessories
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h2>Newsletter</h2>

          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />

          <button style={styles.button}>SUBSCRIBE</button>

          <h4>Stay Connected</h4>

          <div style={styles.social}>
            <a href="#">
              <img src={gitImg} alt="" style={styles.image} />
            </a>

            <a href="#">
              <img src={indeedImg} alt="" style={styles.image} />
            </a>

            <a href="#">
              <img src={twitImg} alt="" style={styles.image} />
            </a>

            <a href="#">
              <img src={fbImg} alt="" style={styles.image} />
            </a>

            <a href="#">
              <img src={instaImg} alt="" style={styles.image} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
