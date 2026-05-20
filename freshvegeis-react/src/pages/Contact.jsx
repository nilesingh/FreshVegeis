import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/banner-slide/Banner-1.jpg')",
        fontFamily: "Montserrat",
      }}
    >
      <Header />

      <section
        style={{
          padding: "60px 0",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
              gap: "20px",
            }}
          >
            {/* LEFT IMAGE */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn.easyfrontend.com/pictures/contact/contact_1.png"
                alt="contact"
                style={{
                  width: "100%",
                  borderRadius: "100px 0 100px 100px",
                }}
              />
            </div>

            {/* FORM */}

            <div
              style={{
                background: "#03262C",
                borderRadius: "0 30px 150px 50px",
                padding: "40px",
                color: "white",
              }}
            >
              <h2
                style={{
                  fontSize: "45px",
                }}
              >
                Contact Us
              </h2>

              <p>We list your menu online, help you process orders.</p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginTop: "20px",
                    borderRadius: "12px",
                    border: "none",
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginTop: "20px",
                    borderRadius: "12px",
                    border: "none",
                  }}
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginTop: "20px",
                    borderRadius: "12px",
                    border: "none",
                  }}
                />

                <button
                  type="submit"
                  style={{
                    background: "#137906",
                    color: "white",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "30px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
