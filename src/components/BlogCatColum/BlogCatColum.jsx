import React, { useState, useEffect } from "react";
import "./BlogCatColum.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import PostReq from "../../hooks/PostReq";
export default function BlogCatColum() {
  const [Data, setData] = useState();
  const FetchBlogCat = async () => {
    const result = await PostReq({
      method: "GET",
      url: "/setting/blog-category",
      body: {},
    });
    setData("");
    setTimeout(() => setData(result), 200);
  };
  useEffect(() => {
    FetchBlogCat();
  }, []);
  const FlagList = [
    {
      title: "China",
      icon: "fi fi-cn fis",
      link: "#",
    },
    {
      title: "Turkey",
      icon: "fi fi-tr fis",
      link: "#",
    },
    {
      title: "USA",
      icon: "fi fi-us fis",
      link: "#",
    },
    {
      title: "Japan",
      icon: "fi fi-jp fis",
      link: "#",
    },
    {
      title: "Malaysia",
      icon: "fi fi-my fis",
      link: "#",
    },
    {
      title: "Egypt",
      icon: "fi fi-eg fis",
      link: "#",
    },
    {
      title: "Germany",
      icon: "fi fi-de fis",
      link: "#",
    },
    {
      title: "India",
      icon: "fi fi-in fis",
      link: "#",
    },
  ];
  return (
    <div className="BlogCatColum">
      <div className="Blog-title">
        <p>دسته بندی بلاگ</p>
      </div>
      <div className="BlogCatColum-container">
        {Data &&
          Data.data.map((Blog, i) => (
            <a key={i} href={Blog.link} className="flag-box">
              <p>{Blog.title}</p>
            </a>
          ))}
      </div>
    </div>
  );
}
