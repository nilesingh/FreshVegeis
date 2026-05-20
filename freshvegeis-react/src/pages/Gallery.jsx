import React from "react";
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
import banner from "../assets/banner-slide/Banner-1.jpg";

function Gallery() {
  const galleryItems = [
    {
      img: g1,
      title: "Strawberries Healthy – Nature’s Energy Booster",
    },
    {
      img: g2,
      title: "Mix of vegetables – Instant Energy & Potassium Rich",
    },
    {
      img: g6,
      title: "Oranges – Full of Vitamin C & Immunity Power",
    },
    {
      img: g4,
      title: "Lemon – Antioxidant Rich & Deliciously Sweet",
    },
    {
      img: g5,
      title: "Salad – Cold dish consisting of vegetables",
    },
    {
      img: g8,
      title: "Lemon Raw – The Superfood Packed with Vitamins",
    },
    {
      img: g7,
      title: "Raw Orange – Good for Eyes & Rich in Beta-Carotene",
    },
    {
      img: g3,
      title: "Cucumbers & Carrots – Cool, Refreshing & Hydrating",
    },
  ];

  return (
    <>
      <Header />

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family: "Montserrat", sans-serif;
          background-image:url("${banner}");
        }

        .gallery-header{
          text-align:center;
          padding:40px 20px;
          color:#000;
        }

        .gallery-header h1{
          font-size:2.5rem;
          margin-bottom:10px;
        }

        .gallery-header p{
          font-size:1.1rem;
        }

        .gallery{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
          padding:30px;
          max-width:1200px;
          margin:auto;
        }

        .gallery-item{
          position:relative;
          overflow:hidden;
          border-radius:12px;
          box-shadow:0 5px 15px rgba(0,0,0,0.1);
          transition:0.3s;
          cursor:pointer;
        }

        .gallery-item:hover{
          transform:scale(1.05);
        }

        .gallery-item img{
          width:100%;
          height:220px;
          object-fit:cover;
          display:block;
        }

        .caption{
          position:absolute;
          bottom:0;
          width:100%;
          padding:12px;
          background:rgba(0,0,0,0.6);
          color:white;
          text-align:center;
        }

        .gallery-item:hover .caption{
          background:rgba(0,0,0,0.8);
        }
      `}</style>

      <header className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Freshness, Health, and Nature’s Goodness Captured in Pictures</p>
      </header>

      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.img} alt="" />
            <div className="caption">{item.title}</div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
