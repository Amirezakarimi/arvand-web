import React from "react";
import { CatCol, SlideCol, SetOrderCol } from "../../components";
import "./Hero.css"
import banner from "../../assets/adv/banner.jpg"
export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <img src={banner} alt="banner" />
        {/* <CatCol /> */}
        {/* <SlideCol /> */}
        {/* <SetOrderCol /> */}
      </div>
    </div>
  );
}
