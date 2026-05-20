import Header from "../components/Header";
import Footer from "../components/Footer";

import g1 from "../assets/gallery/g-1.jpg";
import g2 from "../assets/gallery/g-2.jpg";
import g3 from "../assets/gallery/g-3.jpg";
import g4 from "../assets/gallery/g-4.jpg";
import g5 from "../assets/gallery/g-5.jpg";
import g6 from "../assets/gallery/g-6.jpg";
import g7 from "../assets/gallery/g-7.jpg";
import g8 from "../assets/gallery/g-8.jpg";

function Gallery() {
  const galleryItems = [
    {
      image: g1,
      text: "Strawberries Healthy – Nature’s Energy Booster",
    },

    {
      image: g2,
      text: "Mix of vegetables – Instant Energy & Potassium Rich",
    },

    {
      image: g6,
      text: "Oranges – Full of Vitamin C & Immunity Power",
    },

    {
      image: g4,
      text: "Lemon – Antioxidant Rich & Deliciously Sweet",
    },

    {
      image: g5,
      text: "Salad – Cold dish consisting of vegetables",
    },

    {
      image: g8,
      text: "Lemon raw – The Superfood Packed with Vitamins",
    },

    {
      image: g7,
      text: "Raw orange – Good for Eyes",
    },

    {
      image: g3,
      text: "Cucumbers & Carrots – Hydrating",
    },
  ];

  const styles = {
    page: {
      fontFamily: "Montserrat",
      backgroundImage: `url(${g1})`,
      minHeight: "100vh",
    },

    title: {
      textAlign: "center",
      padding: "40px",
      color: "black",
    },

    grid: {
      display: "grid",

      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",

      gap: "20px",

      padding: "30px",
    },

    card: {
      position: "relative",

      overflow: "hidden",

      borderRadius: "12px",

      cursor: "pointer",
    },

    img: {
      width: "100%",

      height: "220px",

      objectFit: "cover",
    },

    caption: {
      position: "absolute",

      bottom: "0",

      width: "100%",

      background: "rgba(0,0,0,0.7)",

      color: "white",

      padding: "10px",

      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <Header />

      <div style={styles.title}>
        <h1>Our Gallery</h1>

        <p>Freshness, Health and Nature</p>
      </div>

      <div style={styles.grid}>
        {galleryItems.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt="" style={styles.img} />

            <div style={styles.caption}>{item.text}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
