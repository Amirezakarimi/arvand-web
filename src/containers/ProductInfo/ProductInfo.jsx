import React from "react";
import {
  ProductSupplier,
  ProductDetails,
  ProductBasic,
} from "../../components";
import Pimag from "../../assets/products/al-honey.jpg";
import "./ProductInfo.css";
import { ProductFilters } from "../../containers";

export default function ProductInfo(props) {
  const { productName } = props;
  const product = {
    title: "3003 Aluminum honeycomb core for honeycomb panels",
    abillity: "10000 Piece/Pieces per Month",
    origin: "China",
    Location: "Jiangsu, China (Mainland)",
    img: Pimag,
    supplier: [
      { title: "Company Name", text: "Hebei Hengying Wire Cloth Co., Ltd." },
      { title: "Membership", text: "" },
      { title: "Business Type", text: " Manufacturer, Trading Company" },
      { title: "Location", text: "Hebei, China (Mainland)" },
      { title: "Employees Total", text: "101-200" },
      { title: "Annual Revenue", text: "Above US$100 Million" },
    ],

    description: [
      "Stainless Steel nless Steel Screen",
      "-Direct Factory located in Anping County",
      "Biggest Warehouse and Stock in China",
      "stainless steel Hebei Hengying .,Ltd.",
      "Material: US302, 304, 6, 304L, 6L,etc",
    ],
  };

  return (
    <div className="ProductInfo">
      <div className="ProductInfo-container">
        <div className="product-wrapper">
          <ProductBasic product={product} />
          <ProductSupplier supplier={product.supplier} />
          <ProductDetails detail={product.description} />
        </div>
        <div className="filter-wrapper">
          <ProductFilters />
        </div>
      </div>
    </div>
  );
}
