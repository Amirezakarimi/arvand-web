import React from "react";
import Light from "../../assets/CatTabs/Light.webp";
import "./CategoryLists.css";
import env from "../../env";
export default function CategoryLists(props) {
  const { SelectedTab, Data } = props;
  const CatList = Data && Data.find((item) => item.catCode === SelectedTab);
  return (
    <div className="CategoryLists">
      <div className="CategoryLists-container">
        <div className="list-wrapper">
          <ul>
            {CatList &&
              CatList.child.map((list, i) => (
                <li key={i}>
                  <img
                    src={list.iconUrl ? env.siteApiUrl + list.iconUrl : Light}
                    alt={list.title}
                  />
                  {list.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
