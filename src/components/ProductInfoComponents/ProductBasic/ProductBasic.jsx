import React from "react";

export default function ProductBasic(props) {
  const {product}=props
  return (
    <div className="ProductBasic">
      <p className="title">{product.title}</p>
      <div className="basic-wrapper">
        <div className="image-wrapper">
          <img src={product.img} alt={product.img} />
        </div>
        <div className="info-wrapper">
          <ul>
            <li>
              <span>Supply Ability:</span>
              <p>{product.abillity}</p>
            </li>
            <li>
              <span>Origin:</span>
              <p>{product.origin}</p>
            </li>
            <li>
              <span>Location:</span>
              <p>{product.Location}</p>
            </li>
          </ul>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
