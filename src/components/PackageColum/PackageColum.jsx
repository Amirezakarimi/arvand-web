import React from "react";
import "./PackageColum.css";
import label from "../../assets/Packages/Package-pro.webp";
export default function PackageColum() {
  const PackageList = [
    {
      title: "ویژگی‌های ویژه",
      List: [
        "نشان عضویت ویژه تامین‌کننده معتبر",
        "نمایش پروفایل در B2B eWorldTrade",
        "خریداران متصل شده",
        "خریداران متصل شده",
        "هشدارهای خریدار",
        "گزارش عملکرد و خریدار",
        "بارگذاری گواهی شرکت / ویدیو / بروشور / تصاویر",
        "مدیر حساب کلیدی",
      ],
    },
    {
      title: "H2H (کمک انسانی)",
      List: [
        "نشان عضویت ویژه تامین‌کننده معتبر",
        "نمایش پروفایل در B2B eWorldTrade",
        "خریداران متصل شده",
        "خریداران متصل شده",
        "هشدارهای خریدار",
        "گزارش عملکرد و خریدار",
        "بارگذاری گواهی شرکت / ویدیو / بروشور / تصاویر",
        "مدیر حساب کلیدی",
      ],
    },
    {
      title: "خدمات دیجیتال",
      List: [
        "نشان عضویت ویژه تامین‌کننده معتبر",
        "نمایش پروفایل در B2B eWorldTrade",
        "خریداران متصل شده",
        "خریداران متصل شده",
        "هشدارهای خریدار",
        "گزارش عملکرد و خریدار",
        "بارگذاری گواهی شرکت / ویدیو / بروشور / تصاویر",
        "مدیر حساب کلیدی",
      ],
    },
  ];
  return (
    <div className="PackageColum">
      <div className="Blog-title">
        <p>پکیج ها</p>
      </div>
      <div className="PackageColum-container">
        <div className="Package-label">
          <img src={label} alt="label" />
        </div>
        <div className="Package-List">
          {PackageList.map((List, i) => (
            <>
              <p className="list-title">{List.title}</p>
              <ul>
                {List.List.map((item, p) => (
                  <li key={p}>{item}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
        <div className="btn-wrapper">
          <button>جزئیات بیشتر</button>
        </div>
      </div>
    </div>
  );
}
