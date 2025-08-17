import React from "react";
import "./CategoryTabs.css";
import Auto from "../../assets/CatTabs/Auto.webp";
import Home from "../../assets/CatTabs/Home.webp";
import Light from "../../assets/CatTabs/Light.webp";
import Machinery from "../../assets/CatTabs/Machinery.webp";
import env from "../../env";
export default function CategoryTabs(props) {
  const { SelectedTab, setSelectedTab, TabList } = props;

  return (
    <div className="CategoryTabs">
      <div className="CategoryTabs-container">
        {TabList &&
          TabList.map((Tab, i) => (
            <div
              key={i}
              onClick={() => setSelectedTab(Tab.catCode)}
              className={`tab-item ${
                Tab.catCode === SelectedTab ? "active-tab" : ""
              }`}
            >
              <img
                src={Tab.iconUrl ? env.siteApiUrl + Tab.iconUrl : Light}
                alt={Tab.title}
              />
              <p>{Tab.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
