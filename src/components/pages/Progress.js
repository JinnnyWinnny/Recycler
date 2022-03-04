import React from "react";
import "../../App.css";
import "../pages/ProgressItems.css";
import ProgressItems from "../pages/ProgressItems";

export default function Progress() {
  return (
    <>
      <div className="progress">
        <h1>Schematics / Drawings/ Photos</h1>
        <div className="progress__container">
          <div className="progress__wrapper">
            <ul className="progress__items">
              {" "}
              <ProgressItems
                src="images/raspcam.jpg"
                text="Camera attached to Raspberry Pi"
                label="Raspberry Pi"
                path=""
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
