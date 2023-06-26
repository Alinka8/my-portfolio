import "./heroImg.style.css";
import React from "react";
import IntroImg from "../../assets/bobo.png";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI! I AM ANISA</p>
        <h1>Frontend Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
