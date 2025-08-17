import React, { useState, useEffect } from "react";
import "./CatCol.css";
import Light from "../../assets/CatTabs/Light.webp";
import env from "../../env";
import PostReq from "../../hooks/PostReq";
export default function CatCol() {
  const [Data, setData] = useState();
  const FetchCategory = async () => {
    const result = await PostReq({
      method: "GET",
      url: "/panel/product/list-category-site",
      body: {},
    });
    setData("");
    setTimeout(() => setData(result.filter), 200);
  };
  useEffect(() => {
    FetchCategory();
  }, []);
  return (
    <div className="CatCol">
      <div className="CatCol-container">
        <p className="title">دسته بندی ها</p>
        <ul className="cat-list">
          {Data &&
            Data.map((li, i) => (
              <li key={i}>
                <a href="#">
                  <p>{li.title}</p>
                  <i className="fas fa-angle-left"></i>
                </a>
                <div className="list-menu">
                  <div className="list-container">
                    {li.child.map((list, c) => (
                      <a href="#" key={c} className="sub">
                        <img
                          src={
                            list.iconUrl
                              ? env.siteApiUrl + list.iconUrl
                              : Light
                          }
                          alt={list.title}
                        />
                        {list.title}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <p className="more-btn">مشاهده همه دسته ها</p>
      </div>
    </div>
  );
}
