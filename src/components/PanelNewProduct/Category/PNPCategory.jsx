import React, { useState } from "react";
import "./PNPCategory.css";
export default function PNPCategory() {
  const CatList = [
    {
      Parent: "Advertising",
      Child: [
        "1Air Intakes",
        "1ATV",
        "1ATV Parts",
        "1Auto Chassis Parts",
        "1Auto Clutch",
      ],
    },
    {
      Parent: "Apparel",
      Child: [
        "2Air Intakes",
        "2ATV",
        "2ATV Parts",
        "2Auto Chassis Parts",
        "2Auto Clutch",
      ],
    },
    {
      Parent: "Automobiles  ",
      Child: [
        "3Air Intakes",
        "3ATV",
        "3ATV Parts",
        "3Auto Chassis Parts",
        "3Auto Clutch",
      ],
    },
    {
      Parent: "Business Services",
      Child: [
        "4Air Intakes",
        "4ATV",
        "4ATV Parts",
        "4Auto Chassis Parts",
        "4Auto Clutch",
      ],
    },
    {
      Parent: "Fish & Aquarium",
      Child: [
        "5Air Intakes",
        "5ATV",
        "5ATV Parts",
        "5Auto Chassis Parts",
        "5Auto Clutch",
      ],
    },
    {
      Parent: "Minerals & Metallurgy",
      Child: [
        "6Air Intakes",
        "6ATV",
        "6ATV Parts",
        "6Auto Chassis Parts",
        "6Auto Clutch",
        "6Air Intakes",
        "6ATV",
        "6ATV Parts",
        "6Auto Chassis Parts",
        "6Auto Clutch",
        "6Air Intakes",
        "6ATV",
        "6ATV Parts",
        "6Auto Chassis Parts",
        "6Auto Clutch",
      ],
    },
  ];
  const [ChildList, setChildList] = useState("");
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="PNPCategory">
      <div className="PNPCategory-container">
        <div className="title">
          Select category from the list below:
          <span className="red-star">*</span>
        </div>
        <div className="category-wrapper">
          <div className="category-list">
            {CatList.map((parent, p) => (
              <p
                key={p}
                onClick={() => {
                  setChildList(parent.Child);
                  setSelectedParent(p);
                  setSelectedChild(null);
                }}
                className={selectedParent === p ? "selected" : ""}
              >
                {parent.Parent}
              </p>
            ))}
          </div>
          {ChildList && (
            <div className="category-list">
              {ChildList.map((child, c) => (
                <p
                  key={c}
                  onClick={() => setSelectedChild(c)}
                  className={selectedChild === c ? "selected" : ""}
                >
                  {child}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
