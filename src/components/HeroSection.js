import React from "react";
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
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          EXPLORE PROJECT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH DEMO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
