import React from "react";
import "./TwinSlide.css";
import IdSlide from "./IdSlide";
import Slide11 from "../../assets/adv/leftBanner.jpg";
import Slide12 from "../../assets/adv/midBanner.jpg";
import Slide21 from "../../assets/adv/rightBanner.jpg";
export default function TwinSlide() {
  const PicList1=[Slide11,Slide12]
  const PicList2=[Slide21,Slide12]
  return (
    <div className="TwinSlide">
      <div className="container">
        <IdSlide Pic={PicList1}/>
        <IdSlide Pic={PicList2}/>
      </div>
    </div>
  );
}
