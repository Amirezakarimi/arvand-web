import React from "react";

export default function PNPDetails() {
  return (
    <div className="PNPBasic PNPDetails">
      <div className="PNPDetails-container">
        <div className="PNP-title">Product Details</div>
        <div className="wrapper">
          <label htmlFor="">Model Number</label>
          <input type="text" name="" id="" />
        </div>
        <div className="wrapper">
          <label htmlFor="">Brand Name</label>
          <input type="text" name="" id="" />
        </div>
        <div className="wrapper">
          <label htmlFor="">Product Material</label>
          <input type="text" name="" id="" />
        </div>
        <div className="wrapper">
          <label htmlFor="">Product Brochure</label>
          <div className="media">
            <input type="file" name="" id="" />
            <span>
              The following formats are supported: jpeg, jpg, png, pdf. docs.
            </span>
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="">Place of Origin</label>
          <select name="" id="">
            <option value="">Iran</option>
            <option value="">China</option>
          </select>
        </div>
      </div>
    </div>
  );
}
