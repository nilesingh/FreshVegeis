import React from "react";

function ProductCard({ img, title, desc, price, onAdd }) {
  const styles = {
    card: {
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      textAlign: "center",
      paddingBottom: "20px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      display: "block",
    },
    body: {
      padding: "16px",
    },
    title: {
      margin: "8px 0",
    },
    price: {
      margin: "10px 0",
      color: "#2e7d32",
      fontWeight: 700,
    },
    btn: {
      background: "#65c92c",
      border: "none",
      padding: "10px 20px",
      color: "white",
      borderRadius: "20px",
      cursor: "pointer",
      margin: "12px auto",
    },
  };

  return (
    <div style={styles.card}>
      <img src={img} alt={title} style={styles.img} />

      <div style={styles.body}>
        <h3 style={styles.title}>{title}</h3>

        <p>{desc}</p>

        <div style={styles.price}>{price}</div>

        <button style={styles.btn} onClick={onAdd}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
