import React from "react";
import Photo from "../src/assets/photo.png"

const BirthdayWish = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Happy Birthday, Big Brother!</h1>
      <p style={styles.message}>
        On your special day, I just want to say thank you for always being my
        guide and support. You are my role model, and I hope this year brings
        you everything you deserve. Have a fantastic birthday!
      </p>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src={Photo} // Replace with an actual image link
          alt="Happy Birthday"
        />
      </div>
      <p style={styles.closing}>
        Wishing you lots of love, joy, and laughter! 🎉🎂
      </p>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: "#2e3b4e",
  },
  header: {
    fontSize: "36px",
    color: "#ff6347",
  },
  message: {
    fontSize: "18px",
    margin: "20px 0",
  },
  imageContainer: {
    margin: "20px 0",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
  },
  closing: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#32cd32",
  },
};
export default BirthdayWish