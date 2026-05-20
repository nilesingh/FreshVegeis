import userImg from "../assets/images/user.jpg";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      text: "Best organic products I’ve ever tried! Fresh and healthy.",
    },

    {
      name: "Mike D.",
      text: "Amazing service and super fresh fruits. Highly recommend.",
    },

    {
      name: "Priya K.",
      text: "I love the taste and quality, feels like eating straight from the farm.",
    },
  ];

  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center",
      background: "#f8f8f8",
    },

    title: {
      fontSize: "32px",
      marginBottom: "40px",
      color: "#137906",
    },

    grid: {
      display: "grid",

      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",

      gap: "25px",
    },

    card: {
      background: "white",

      padding: "25px",

      borderRadius: "12px",

      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },

    img: {
      width: "80px",

      height: "80px",

      borderRadius: "50%",

      objectFit: "cover",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Customers Say</h2>

      <div style={styles.grid}>
        {testimonials.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={userImg} alt="" style={styles.img} />

            <p>"{item.text}"</p>

            <strong>- {item.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
