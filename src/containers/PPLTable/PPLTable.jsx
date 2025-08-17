import React from "react";
import { PPLTableHead, PPLTableBody } from "../../components";
import "./PPLTable.css";
export default function PPLTable() {
  return (
    <div className="PPLTable">
      <table>
        <PPLTableHead />
        <PPLTableBody />
      </table>
    </div>
  );
}
