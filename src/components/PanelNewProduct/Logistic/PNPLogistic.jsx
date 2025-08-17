import React from "react";

export default function PNPLogistic() {
  return (
    <div className="PNPBasic PNPLogistic">
      <div className="PNPLogistic-container">
        <div className="PNP-title">Logistics Information</div>
        <div className="wrapper">
          <label htmlFor="">Supply Type</label>
          <div className="checkbox-wrapper">
            <input type="checkbox" name="" id="OEM" />
            <label htmlFor="OEM">OEM Service</label>
            <input type="checkbox" name="" id="Stock" />
            <label htmlFor="Stock">In Stock</label>
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="">Processing Time</label>
          <input type="text" name="" id="" />
        </div>
        <div className="wrapper">
          <label htmlFor="">Port</label>
          <input type="text" name="" id="" />
        </div>
        <div className="wrapper">
          <label htmlFor="">Overseas Office</label>
          <div className="checkbox-wrapper">
            <input type="radio" name="yn" id="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="yn" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>
    </div>
  );
}
