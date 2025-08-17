import React from "react";
import { useParams } from "react-router";
import { AllCategory } from "../../containers";
import { NavList, Banner } from "../../components";
import BgBanner from "../../assets/Banners/mainCat-banner.jpg";
export default function MainCategory() {
  let { mainCat } = useParams();
  const BannerInfo = {
    Image: BgBanner,
    title: mainCat,
    text: "",
    catalog: "دانلود کاتالوگ",
  };
  const NavLists = [
    {
      title: "Home",
      link: "/",
    },
    { title: mainCat, link: `/products/${mainCat}` },
  ];
  return (
    <>
      <NavList list={NavLists} />
      <Banner
        Image={BannerInfo.Image}
        title={BannerInfo.title}
        text={BannerInfo.text}
        catalog={BannerInfo.catalog}
      />
      <AllCategory />
    </>
  );
}
