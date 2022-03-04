import React from "react";
import "../pages/ProgressItems.css";

function ProgressItems(props) {
  return (
    <>
      <div className="box">
        <img src={props.src} alt="ras" width="35%"></img>
        <div className="text-box">
          <div className="title">{props.title}</div>
          <div className="content">{props.content}</div>
        </div>
      </div>
    </>
  );
}

export default ProgressItems;
