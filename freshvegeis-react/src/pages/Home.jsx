// src/pages/Home.jsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const styles = {
    page: {
      fontFamily: "Montserrat, sans-serif",
    },
  };

  return (
    <div style={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Vegetables & Fruits</h1>
          <p>
            Fresh, healthy, and organic vegetables directly from farms to your
            home.
          </p>

          <Link to="/product">
            <button className="hero-btn">Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="products">
        <h2>Our Popular Products</h2>

        <div className="product-grid">
          <div className="card">
            <img src="./assets/gallery/g-1.jpg" alt="Apple" />
            <h3>Apples</h3>
            <p>Fresh & Juicy</p>
          </div>

          <div className="card">
            <img src="./assets/gallery/g-2.jpg" alt="Banana" />
            <h3>Bananas</h3>
            <p>Sweet & Nutritious</p>
          </div>

          <div className="card">
            <img src="./assets/gallery/g-5.jpg" alt="Tomato" />
            <h3>Tomatoes</h3>
            <p>Perfectly Ripe</p>
          </div>
        </div>

        <Link to="/product">
          <button className="view-btn">View All Products</button>
        </Link>
      </section>

      {/* About */}
      <section className="about">
        <img src="./assets/testimonial/testimonial-1.png" alt="Farm" />

        <div className="about-text">
          <h2>About Our Farm</h2>

          <p>
            We believe in healthy, chemical-free farming. Our mission is to
            bring you organic vegetables and fruits directly from local farms,
            ensuring freshness, nutrition, and sustainability.
          </p>

          <Link to="/about">
            <button className="about-btn">Read More</button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial">
            <img src="./assets/images/user.jpg" alt="Customer" />

            <p>"Best organic products I’ve ever tried! Fresh and healthy."</p>

            <strong>- Sarah J.</strong>
          </div>

          <div className="testimonial">
            <img src="./assets/images/user.jpg" alt="Customer" />

            <p>"Amazing service and super fresh fruits. Highly recommend."</p>

            <strong>- Mike D.</strong>
          </div>

          <div className="testimonial">
            <img src="./assets/images/user.jpg" alt="Customer" />

            <p>
              "I love the taste and quality, feels like eating straight from the
              farm."
            </p>

            <strong>- Priya K.</strong>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
