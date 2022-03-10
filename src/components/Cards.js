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
              src="images/finalModel.jpg"
              text="Testing plastic bottle"
              label="test"
              path=""
            />
            <CardItem
              src="images/finalModel2.jpg"
              text="Final model"
              label="test"
              path=""
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/finalCover.PNG"
              text="Wooden Case"
              label="case"
              path=""
            />
            <CardItem
              src="images/soldering.jpg"
              text="PCB Soldering"
              label="Soldering"
              path=""
            />
            <CardItem
              src="images/components.jpg"
              text="Connecting all the components"
              label="test"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/cover.PNG"
              text="Filtering Cover"
              label="Laser Cutting"
              path=""
            />
            <CardItem
              src="images/raspcam.jpg"
              text="Camera attached to Raspberry Pi"
              label="Raspberry Pi"
              path=""
            />
            <CardItem
              src="images/motorconnector.PNG"
              text="Motor connector"
              label="3D Printing"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
