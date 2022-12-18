import React from "react";
import img from "./img/Rectangle 5.png";

function Hero() {
  return (
    <div className="img-container">
      <img className="hero-img" src={img} alt="video-studio-img" />
      <h2 className="text-center">
        Watch <br /> Something <br /> Incredible.
      </h2>
    </div>
  );
}

export default Hero;
