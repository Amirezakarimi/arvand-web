import React from "react";
import "./AboutUsPar.css";
export default function AboutUsPar(props) {
  const { AboutUsPar, AboutOur } = props;
  return (
    <div className="AboutUsPar">
      <div className="AboutUsPar-container">
        {AboutUsPar.map((item, i) => (
          <div key={i} className="wrapper">
            <div className="title">
              <p>{item.title}</p>
              <span className="red-line"></span>
            </div>
            <div className="text">
              {item.text.map((text, t) => (
                <p key={t}>{text}</p>
              ))}
            </div>
          </div>
        ))}
        <div className="container">
          {AboutOur.map((item, i) => (
            <div key={i} className="wrapper">
              <div className="title">
                <p>
                  Our <span>{item.title}</span>
                </p>
                <span className="red-line"></span>
              </div>
              <div className="text">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
