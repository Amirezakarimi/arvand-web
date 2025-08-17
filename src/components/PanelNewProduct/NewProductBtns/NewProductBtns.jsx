import React from "react";
import "./NewProductBtns.css";
export default function NewProductBtns() {
  return (
    <div className="NewProductBtns">
      <div className="wrapper">
        <button>Post Product</button>
      </div>
      <div className="wrapper">
        <button>Save & Continue</button>
        <button>Save & Replicate</button>
      </div>
    </div>
  );
}
