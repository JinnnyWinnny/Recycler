import React from "react";
import "../pages/ProgressItems.css";

function ProgressItems(props) {
  return (
    <>
      <li className="progress__item">
        <a className="progress__item__link" href={props.path}>
          <figure
            className="progress__item__pic-wrap"
            data-category={props.label}
          >
            <img className="progress__item__img" alt="item" src={props.src} />
          </figure>
          <div className="progress__item__info">
            <h5 className="progress__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default ProgressItems;
