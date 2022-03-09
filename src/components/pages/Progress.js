import React from "react";
import "../../App.css";
import "../pages/ProgressItems.css";
import ProgressItems from "../pages/ProgressItems";

export default function Progress() {
  return (
    <>
      <div className="progress">
        <h1>Timeline</h1>
        <div className="progress__container">
          <div className="progress__wrapper">
            <ul>
              <ProgressItems
                src="images/cover.PNG"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/raspcam.jpg"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/motorconnector.PNG"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/laser.jpg"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/soldering.jpg"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/firstTest.jpg"
                title="Camera attached to Raspberry Pi"
                content="Raspberry Pi"
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/finalModel.jpg"
                title="Testing plastic bottle"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/finalModel2.jpg"
                title="Final model"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/components.jpg"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/finalCover.PNG"
                title="Camera attached to Raspberry Pi"
                content="First time we test every connected components "
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
