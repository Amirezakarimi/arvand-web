import React from "react";
import "./PanelHeader.css";
export default function PanelHeader(props) {
  const {title}=props
  return (
    <div className="PanelHeader">
      <div className="PanelHeader-container">
        <p className="title">{title}</p>
        <div className="wrapper">
          <div className="icon">
            <i class="fa-regular fa-star"></i>
            <p>Upgrade</p>
          </div>
          <div className="icon">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div className="icon">
            <i class="fa-regular fa-circle-user"></i>
            <i class="fa-solid fa-sort-down"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-book"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
