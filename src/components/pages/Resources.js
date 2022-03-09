import React from "react";
import "./Resources.css";
import Slides from "../Slides";

function Resources() {
  return (
    <>
      <Slides />
      <div className="container">
        <div className="resource_title">
          <h1>+</h1>
        </div>
        <div className="context">
          <ol>
            <li className="links">
              <a href="https://stocktonrecycles.com/residents/cart-contamination-and-overfill/">
                An insight on contaminated recycling{" "}
              </a>
            </li>
            <li className="links">
              <a href="https://news.climate.columbia.edu/2020/03/13/fix-recycling-america/">
                Article on how recycling is a problem in the US
              </a>
            </li>
            <li className="links">
              <a href="https://machinelearningmastery.com/object-recognition-with-deep-learning/">
                Understanding more about object detection
              </a>
            </li>
            <li className="links">
              <a href="https://www.electronicshub.org/raspberry-pi-stepper-motor-control/">
                Connecting a stepper motor to the Raspberry Pi
              </a>
            </li>
            <li className="links">
              <a href="https://www.the-diy-life.com/connect-and-program-an-oled-stats-display-for-your-raspberry-pi/">
                Connect and Program An OLED
              </a>
            </li>
            <li className="links">
              <a href="https://www.lobe.ai/">Tool for training model</a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
export default Resources;
