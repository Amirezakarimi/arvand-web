import React from "react";

export default function ProductDetails(props) {
  const { detail } = props;
  return (
    <div className="ProductDetails">
      {detail.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}
