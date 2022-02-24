import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Schematics / Drawings/ Photos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cover.PNG"
              text="Filtering Cover"
              label="Laser Cutting"
              path="/"
            />
            <CardItem
              src="images/raspcam.jpg"
              text="Camera attached to Raspberry Pi"
              label="Raspberry Pi"
              path="/"
            />
            <CardItem
              src="images/motorconnector.PNG"
              text="Motor connector"
              label="3D Printing"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/laser.jpg"
              text="Cover with team name"
              label="Laser Cutting"
              path="/"
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
