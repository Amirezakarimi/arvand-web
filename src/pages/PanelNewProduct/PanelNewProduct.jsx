import React from "react";
import { PNPLists } from "../../containers";
import { PanelHeader } from "../../components";
export default function PanelNewProduct() {
  return (
    <div className="PanelNewProduct">
      <PanelHeader title={"Display a New Product"} />
      <PNPLists />
    </div>
  );
}
