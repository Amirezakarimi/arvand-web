import React, { useState } from "react";
import { PPLTableActions } from "../../../components";
export default function PPLTableBody() {
  const [EditMode, setEditMode] = useState(false);
  return (
    <tbody>
      <tr>
        <td>
          <input type="checkbox" name="" id="" />
        </td>
        <td>
          <img src="/logoRaw.png" alt="img" />
        </td>
        <td>Product name</td>
        <td>
          <button className="table-btn">
            <i class="fa-regular fa-file-image"></i>
          </button>
        </td>
        <td>Amir</td>
        <td>17-Jan-25</td>
        <td>Public</td>
        <td>
          {!EditMode?<span className="num-center">5</span>:
          <input className="num-input" type="number" />}
        </td>
        <td>
        {!EditMode?<span className="num-center">100,000</span>:
          <input className="num-input" type="number" />}
        </td>
        <td>
          <PPLTableActions setEditMode={setEditMode} EditMode={EditMode} />
        </td>
      </tr>
    </tbody>
  );
}
