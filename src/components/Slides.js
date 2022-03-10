import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Resources</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/poster.PNG"
              text="Project Poster"
              label="slide"
              path="https://docs.google.com/presentation/d/1oKlQFsl0GYgUkFhDTZDktlImOnRjPDBqhOtVet2tOuY/edit?usp=sharing"
            />
            <CardItem
              src="images/presentation.PNG"
              text="Final Presentation Slides"
              label="slide"
              path="https://docs.google.com/presentation/d/10jpqM3j-W-gWmSYrnJA8jhWykLoClki836LT1Y3BlXg/edit?usp=sharing"
            />
            <CardItem
              src="images/video.PNG"
              text="Video Demo "
              label="video"
              path="https://drive.google.com/file/d/1vMk5w3I8OSNKYPxmU-8SyktwbAC_AjER/view?usp=sharing"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
