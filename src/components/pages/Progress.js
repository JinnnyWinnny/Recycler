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
                title="3D design of the cover with a tilting board"
                content="It is 3D design that we made for schematics. The cover is lasercutted and made of cardboard. We glued each side and screwed the tilting board which is a gray color on the cover.  "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/raspcam.jpg"
                title="Camera attached to Raspberry Pi"
                content="First time we connected camera to the Raspberry Pi. This will be used for capturing images of trashes so that we can apply the computer vision technique object detection to filter trashes. (Camera Day and Night Vision, IR-Cut Video Camera 1080p HD Webcam 5MP OV5647 Sensor for Raspberry Pi.) "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/motorconnector.PNG"
                title="Clamp"
                content="It is 3D design that we made for schematics. The clamp is 3d printed, and it is for supporting and controlling the rotating board."
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/laser.jpg"
                title="Front Cover"
                content="Engraving the front cover with laser cutting."
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/soldering.jpg"
                title="Soldering and PCB"
                content="  As part of our process to put our design together. The printed PCB was soldered together with proper resistors, an OLED display, LED’s, Switch buttons, and pin headers. This way we could use it as the shield to our raspberry pi and we can have a display of material detected to dispose of, a startup and some extra effects with lighting."
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/firstTest.jpg"
                title="Assembling Components"
                content="On the top of a camera stand (tripod) we attached a wooden slab to hold all of our components in place. This way we can position the camera and necessary connections in place with proper height (to trash bin height) without a person holding things midair, another step to making this prototype more portable."
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/finalModel.jpg"
                title="Testing plastic bottle"
                content="We found out that the color of the board distracted the detection. So, the white papers are added to make sure the camera can have a cleaner environment to detect the garbage. After we adjust the height and the angle of the mount for a clear detection, we decide to use a plastic bottle to test if the raspberry pi is able to identify the object. "
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/finalModel2.jpg"
                title="Final model"
                content="This is first time we connected everything components together and test on the components. We decide to do a command to make sure that the board and the server motor are working properly."
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/components.jpg"
                title="Components connected to Raspberry Pi"
                content="We use a piece of wood as our mount for the tripod. A hole is drilled for the tripod to screw in tightly so the board will not move loosely while mounting on the tripod. We measure the space that it takes for each component and design the placement for each of them to make sure to have a precipice weight balance of the board. Each component on the board is either screwed or taped in place to avoid falling from the tripod."
              />
            </ul>
            <ul>
              <ProgressItems
                src="images/finalCover.PNG"
                title="Wooden Case"
                content="The wooden case was designed with some additional pieces required to avoid gaps in the back side. Our constraint of physical wood pieces available led us to covering part of two trash bins but it is still big enough to dispose of trash with no problem. "
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
