import React from "react";
import "./Banner.css";
export default function Banner(props) {
  const { Image, title, text, catalog } = props;
  return (
    <div className="Banner">
      <div
        className="Banner-container"
        style={{
          backgroundImage: `url("${Image}")`,
          height: "310px",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
        {catalog && <button className="cat-btn">{catalog}</button>}
      </div>
    </div>
  );
}
