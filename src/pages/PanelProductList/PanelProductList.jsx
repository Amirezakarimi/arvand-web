import React from "react";
import { PanelHeader, PPLFilters } from "../../components";
import { PPLTable } from "../../containers";
export default function PanelProductList() {
  return (
    <div className="PanelProductList">
      <PanelHeader title={"Manage Products"} />
      <div className="PanelProductList-container">
        <PPLFilters />
        <PPLTable />
      </div>
    </div>
  );
}
