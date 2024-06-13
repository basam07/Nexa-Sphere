import React, { useState } from "react";
import "./Home.css"; // Import your CSS file for styling
import "../Web/Slider.css"; // Import the Slider CSS file
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="app">
      {/* <header className="header">
        <h1 className="title">Nexa Sphere</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#learn-more" >Privacy Policy</a>
            </li>
            <li className="nav-item">
              <a href="#support">Support</a>
            </li>
            <li className="nav-item">
              <a href="#login">Login</a>
            </li>
            <li className="nav-item">
              <a href="#signup" onClick={handleSignUp}>Sign Up</a>
            </li>
          </ul>
        </nav>
      </header> */}
        <Navbar/>

      <section id="image-generation" className="image-generation-section">
        <div className="slider">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          {images.map((image, index) => (
            <div
              key={index}
              className={index === currentIndex ? "slide active" : "slide"}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>

      <section id="learn-more" className="learn-more-section">
        <button className="learn-more-btn">Learn More</button>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
