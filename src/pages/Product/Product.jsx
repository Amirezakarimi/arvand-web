import React from "react";
import { useParams } from "react-router";
import { NavList } from "../../components";
import { ProductInfo } from "../../containers";
export default function Product() {
  let { mainCat, subCat, productName } = useParams();
  const NavLists = [
    { title: "Home", link: "/" },
    { title: mainCat, link: `/products/${mainCat}` },
    { title: subCat, link: `/products/${mainCat}/${subCat}` },
    { title: productName, link: "#" },
  ];
  return (
    <>
      <NavList list={NavLists} />
      <ProductInfo productName={productName} />
    </>
  );
}
