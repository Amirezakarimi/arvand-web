import React from "react";

export default function PNPTrade() {
  return (
    <div className="PNPBasic PNPTrade">
      <div className="PNPTrade-container">
        <div className="PNP-title">Trade Information</div>
        <div className="wrapper">
          <label htmlFor="">Set price</label>
          <div className="checkbox-wrapper">
            <input type="checkbox" id="FOB" />
            <label htmlFor="FOB">FOB Price</label>
            <input type="checkbox" id="quantity" />
            <label htmlFor="quantity">Set price based on quantity</label>
            <input type="checkbox" id="CIF" />
            <label htmlFor="CIF">CIF</label>
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="">FOB Price</label>
          <div className="price-wrapper">
            <select name="" id="">
              <option value="">Rial</option>
              <option value="">USD</option>
            </select>
            <input type="number" name="" id="" placeholder="Min" />
            <span>--</span>
            <input type="number" name="" id="" placeholder="Max" />
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="">Min.Order Quantity</label>
          <input type="number" name="" id="" />
        </div>
        <div className="wrapper">
          <label htmlFor="">Method</label>
          <div className="checkbox-wrapper">
            <input type="checkbox" name="" id="D/A" />
            <label htmlFor="D/A">D/A</label>
            <input type="checkbox" name="" id="D/A" />
            <label htmlFor="D/A">D/A</label>
            <input type="checkbox" name="" id="D/A" />
            <label htmlFor="D/A">D/A</label>
            <input type="checkbox" name="" id="D/A" />
            <label htmlFor="D/A">D/A</label>
            <input type="checkbox" name="" id="D/A" />
            <label htmlFor="D/A">D/A</label>
            <input type="checkbox" name="" id="D/A" />
            <label htmlFor="D/A">D/A</label>
          </div>
        </div>
      </div>
    </div>
  );
}
