import React from "react";
import BgBanner from "../../assets/Banners/mainCat-banner.jpg";
import { useParams } from "react-router";
import { NavList, Banner } from "../../components";
import { ProductList } from "../../containers";
export default function SubCategory() {
  let { mainCat, subCat } = useParams();
  const NavLists = [
    { title: "Home", link: "/" },
    { title: mainCat, link: `/products/${mainCat}` },
    { title: subCat, link: `/products/${mainCat}/${subCat}` },
  ];
  const BannerInfo = {
    Image: BgBanner,
    title: subCat,
    text: "",
    catalog: "دانلود کاتالوگ",
  };

  return (
    <div>
      <NavList list={NavLists} />
      <Banner
        Image={BannerInfo.Image}
        title={BannerInfo.title}
        text={BannerInfo.text}
        catalog={BannerInfo.catalog}
      />
      <ProductList PageName={subCat} />
    </div>
  );
}
