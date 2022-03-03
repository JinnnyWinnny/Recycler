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
              text="Poster"
              label="slide"
              path="https://docs.google.com/presentation/d/1oKlQFsl0GYgUkFhDTZDktlImOnRjPDBqhOtVet2tOuY/edit?usp=sharing"
            />
            <CardItem
              src="images/presentation.PNG"
              text="Final Rresentation Slides"
              label="slide"
              path="https://docs.google.com/presentation/d/1FD9vm2g0ozdwQPquaFUaz787kgxOEuA8f43Ged4e36c/edit?usp=sharing"
            />
            <CardItem
              src="images/presentation.PNG"
              text="Video Demo (placeholder)"
              label="video"
              path="https://docs.google.com/presentation/d/1FD9vm2g0ozdwQPquaFUaz787kgxOEuA8f43Ged4e36c/edit?usp=sharing"
            />
          </ul>
        </div>
      </div>

      {/* <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="placeholder"
              label="Adventure"
              path="/aboutus"
            />
            <CardItem
              src="images/img-2.jpg"
              text="placeholder"
              label="Luxury"
              path="/aboutus"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="placeholder"
              label="Mystery"
              path="/aboutus"
            />
            <CardItem
              src="images/img-4.jpg"
              text="placeholder"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="placeholder"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Cards;
