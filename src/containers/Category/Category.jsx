import React, { useState, useEffect } from "react";
import { CategoryLists, CategoryTabs } from "../../components";
import "./Category.css";
import PostReq from "../../hooks/PostReq";
export default function Category() {
  const [SelectedTab, setSelectedTab] = useState("1");
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
    <div className="Category">
      <div className="Category-container">
        <div className="Category-title">
          <div className="line"></div>
          <div className="title">
            <p>مشاهده</p>
            <p>دسته بندی ها</p>
          </div>
          <div className="line"></div>
        </div>

        <CategoryTabs
          setSelectedTab={setSelectedTab}
          SelectedTab={SelectedTab}
          TabList={Data}
        />

        <CategoryLists SelectedTab={SelectedTab} Data={Data} />
      </div>
    </div>
  );
}
