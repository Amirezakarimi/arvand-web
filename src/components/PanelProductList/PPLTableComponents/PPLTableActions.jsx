import React from "react";

export default function PPLTableActions({ EditMode, setEditMode }) {
  return (
    <div className="PPLTableActions">
      <button className="table-btn">
        <i class="fa-regular fa-eye"></i>
      </button>
      {EditMode ? (
        <button className="table-btn" onClick={() => setEditMode(false)}>
          <i class="fa-regular fa-floppy-disk"></i>
        </button>
      ) : (
        <button className="table-btn" onClick={() => setEditMode(true)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
      )}
      <button className="table-btn">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}
