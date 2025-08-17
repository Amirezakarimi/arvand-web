import React, { useState } from "react";
import {
  PNPTrade,
  PNPBasic,
  PNPCategory,
  PNPDetails,
  PNPLogistic,
  PNPProductDetail,
  NewProductBtns,
} from "../../components";
import "./PNPLists.css";
export default function PNPLists() {
  const [NewProduct, setNewProduct] = useState();
  return (
    <div className="PNPLists">
      <div className="PNPLists-container">
        <div className="search-wrapper">
          <p className="title">Search Product</p>
          <div className="wrapper">
            <input
              type="text"
              placeholder="Enter industry Keywords:e.g. laptop"
            />
            <button onClick={() => setNewProduct(false)}>Search</button>
            <button onClick={() => setNewProduct(true)}>Add New Product</button>
          </div>
        </div>
        {NewProduct && (
          <>
            <h2 className="newProduct-title">New Product</h2>
            <div className="box-shadow">
              <PNPCategory />
              <PNPBasic />
              <PNPDetails />
              <PNPTrade />
              <PNPLogistic />
              <PNPProductDetail />
              <NewProductBtns />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
