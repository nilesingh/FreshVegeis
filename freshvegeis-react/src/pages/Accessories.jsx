import Header from "../components/Header";
import Footer from "../components/Footer";

import g1 from "../assets/gallery/g-1.jpg";
import g2 from "../assets/gallery/g-2.jpg";
import g3 from "../assets/gallery/g-3.jpg";
import g5 from "../assets/gallery/g-5.jpg";

function Accessories() {
  const accessories = [
    {
      image: g1,
      title: "Organic Basket",
      desc: "Fresh fruit basket collection",
      price: "$12.99",
    },

    {
      image: g2,
      title: "Wooden Crate",
      desc: "Eco friendly storage crate",
      price: "$18.99",
    },

    {
      image: g3,
      title: "Vegetable Bag",
      desc: "Reusable grocery bag",
      price: "$6.99",
    },

    {
      image: g5,
      title: "Kitchen Basket",
      desc: "Vegetable organizer basket",
      price: "$9.99",
    },
  ];

  const styles = {
    page: {
      background: "#f8f8f8",
      minHeight: "100vh",
      fontFamily: "Montserrat",
    },

    hero: {
      textAlign: "center",
      padding: "60px 20px",
    },

    title: {
      fontSize: "40px",
      color: "#137906",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
      padding: "40px",
    },

    card: {
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      textAlign: "center",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },

    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
    },

    price: {
      color: "#65c92c",
      fontWeight: "bold",
    },

    button: {
      padding: "10px 20px",
      marginBottom: "20px",
      background: "#65c92c",
      color: "white",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <Header />

      <div style={styles.hero}>
        <h1 style={styles.title}>Accessories Collection</h1>

        <p>Farm and kitchen essentials</p>
      </div>

      <div style={styles.grid}>
        {accessories.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt="" style={styles.image} />

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <p style={styles.price}>{item.price}</p>

            <button style={styles.button}>Buy Now</button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Accessories;
