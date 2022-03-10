import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>RE-RECYCLER</h1>
      <h2 className="dep-container">
        {" "}
        Department of Environment, Health and Safety
      </h2>
      <div className="detail-container">
        By putting non-recycled materials into the recycle bin, entire
        recyclables end up in landfills. <br />
        We created the machine <b>"Re-Recycler"</b> that{" "}
        <u>filers trashes automatically</u> for you.
        <br />
      </div>
      <div className="hero-btns">
        <Link to="/progress">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            EXPLORE PROJECT
          </Button>
        </Link>
        <a href="https://drive.google.com/file/d/1vMk5w3I8OSNKYPxmU-8SyktwbAC_AjER/view?usp=sharing">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WATCH DEMO <i className="far fa-play-circle" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
