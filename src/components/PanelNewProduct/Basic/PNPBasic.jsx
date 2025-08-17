import React from "react";
import "./PNPBasic.css";
export default function PNPBasic() {
  return (
    <div className="PNPBasic">
      <div className="PNPBasic-container">
        <div className="PNP-title">Basic Information</div>
        <div className="wrapper">
          <label>
            Product Name <span className="red-star">*</span>
          </label>
          <input type="text" />
        </div>
        <div className="wrapper">
          <label>
            Product Keyword <span className="red-star">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Keyword separated by comma - e.g. car, bike"
          />
        </div>
        <div className="wrapper">
          <label>Product Groupe</label>
          <select name="" id="">
            <option value="">--please select--</option>
            <option value="">Groupe 1</option>
            <option value="">Groupe 2</option>
          </select>
        </div>
        <div className="wrapper">
          <label htmlFor="">
            Product Photo <span className="red-star">*</span>
          </label>
          <div className="image-import">
            <div className="images">
              <div className="span"></div>
            </div>
            <div className="btns">
              <button className="add-btn">Browse</button>
              <button className="remove-btn">Remove</button>
            </div>
            <div className="desc">
              <p>
                The maximum size for a single image is 3MB. The following
                formats are supported: jpeg, jpg, png. Use as many pictures from
                as many angles as necessary to properly display your product.
              </p>
              <p>
                We suggest your images be less than 1000px*1000px with a clear
                subject to improve buyer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
