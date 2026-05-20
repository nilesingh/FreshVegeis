import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import product1 from "../assets/products/product-1.jpg";
import product2 from "../assets/products/product-2.jpg";
import product3 from "../assets/products/product-3.jpg";
import product4 from "../assets/products/product-4.jpg";
import freshFruits1 from "../assets/products/fresh-fruits1.jpg";
import freshFruits2 from "../assets/products/fresh-fruits2.jpg";
import ProductCard from "../components/ProductCard";

function Product() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const products = [
    {
      img: product1,
      title: "Fresh Tomatoes",
      desc: "Juicy organic tomatoes",
      price: "$2.99 / kg",
    },

    {
      img: product2,
      title: "Crispy Cucumbers",
      desc: "Perfect for salads",
      price: "$1.99 / kg",
    },

    {
      img: product3,
      title: "Red Apples",
      desc: "Sweet and crunchy",
      price: "$3.49 / kg",
    },

    {
      img: product4,
      title: "Organic Mangoes",
      desc: "Farm fresh sweetness",
      price: "$4.99 / kg",
    },

    {
      img: freshFruits1,
      title: "Fresh Grapes",
      desc: "Rich in antioxidants",
      price: "$3.89 / kg",
    },

    {
      img: freshFruits2,
      title: "Yellow Bananas",
      desc: "Energy boosting",
      price: "$1.49 / dozen",
    },

    {
      img: product1,
      title: "Organic Broccoli",
      desc: "Packed with vitamins",
      price: "$2.79 / kg",
    },

    {
      img: product2,
      title: "Fresh Carrots",
      desc: "Rich in beta carotene",
      price: "$2.19 / kg",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "Montserrat, sans-serif",
    },

    title: {
      textAlign: "center",
      padding: "40px",
    },

    grid: {
      display: "grid",

      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",

      gap: "25px",

      padding: "30px",
    },

    benefits: {
      background: "#03262c",

      color: "white",

      padding: "40px",

      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <Header />

      <div style={styles.title}>
        <h1>Our Fresh Fruit Collection</h1>

        <p>Cart : {cartCount}</p>
      </div>

      <section style={styles.grid}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            onAdd={addToCart}
          />
        ))}
      </section>

      <section style={styles.benefits}>
        <h2>Why Choose Us?</h2>

        <p>🌱 Organic</p>

        <p>🚚 Fast Delivery</p>

        <p>💰 Affordable</p>

        <p>🤝 Trusted Quality</p>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
