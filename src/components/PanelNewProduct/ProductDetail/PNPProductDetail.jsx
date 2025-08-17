import React from "react";

export default function PNPProductDetail() {
  return (
    <div className="PNPBasic PNPProductDetail">
      <div className="PNPProductDetail-container">
        <div className="PNP-title">Product Detail Information</div>
        <div className="wrapper">
          <label htmlFor=""></label>
          <textarea name="" id="" cols="100" rows="15"></textarea>
        </div>
        <div className="wrapper">
          <label htmlFor=""></label>
          <div className="checkbox-wrapper">
            <input type="checkbox" name="" id="display" />
            <label htmlFor="display"> Display this product on showcase </label>
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor=""></label>
          <div className="checkbox-wrapper">
            <input type="checkbox" name="" id="submit" />
            <label htmlFor="submit">
              By clicking submit, you acknowledge that your information does not
              violate any
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
