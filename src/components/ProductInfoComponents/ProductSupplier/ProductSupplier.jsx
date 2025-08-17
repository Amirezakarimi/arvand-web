import React from "react";

export default function ProductSupplier(props) {
  const { supplier } = props;
  return (
    <div className="ProductSupplier">
      <p className="title">Supplier Info.</p>
      <ul className="supplier-wrapper">
        {supplier.map((item, i) => (
          <li key={i}>
            <span>{item.title}:</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
