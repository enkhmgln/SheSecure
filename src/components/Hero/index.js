import React from "react";
import { Link } from "react-router-dom";
import "./HeroStyle.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="home/img" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
