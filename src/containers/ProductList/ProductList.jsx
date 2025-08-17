import React, { useState } from "react";
import "./ProductList.css";
import { Paging, ProductFilters, ProductListCard } from "../../containers";
import Al from "../../assets/products/al-honey.jpg";

export default function ProductList(props) {
  const { PageName } = props;
  const productLists = [
    {
      title: "3003 Aluminum honeycomb core for honeycomb panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag1", "tag2"],
    },
    {
      title:
        "Advanced Construction Materials/ ACP ACM ACB PVDF/PE Coated Alucobond Price/Exterior Wall Aluminum Composite Panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag3", "tag4"],
    },
    {
      title:
        "Eco-Friend Insulation Imitation Stone Exterior Decorative Aluminum Honeycomb Core Sandwich Panel",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag5", "tag6"],
    },
    {
      title: "3003 Aluminum honeycomb core for honeycomb panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag1", "tag2"],
    },
    {
      title:
        "Advanced Construction Materials/ ACP ACM ACB PVDF/PE Coated Alucobond Price/Exterior Wall Aluminum Composite Panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag1", "tag4"],
    },
    {
      title:
        "Eco-Friend Insulation Imitation Stone Exterior Decorative Aluminum Honeycomb Core Sandwich Panel",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag1", "tag6"],
    },
    {
      title: "3003 Aluminum honeycomb core for honeycomb panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag1", "tag2"],
    },
    {
      title:
        "Advanced Construction Materials/ ACP ACM ACB PVDF/PE Coated Alucobond Price/Exterior Wall Aluminum Composite Panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag3", "tag4"],
    },
    {
      title:
        "Eco-Friend Insulation Imitation Stone Exterior Decorative Aluminum Honeycomb Core Sandwich Panel",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag5", "tag6"],
    },
    {
      title: "3003 Aluminum honeycomb core for honeycomb panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag1", "tag2"],
    },
    {
      title:
        "Advanced Construction Materials/ ACP ACM ACB PVDF/PE Coated Alucobond Price/Exterior Wall Aluminum Composite Panels",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag3", "tag4"],
    },
    {
      title:
        "Eco-Friend Insulation Imitation Stone Exterior Decorative Aluminum Honeycomb Core Sandwich Panel",
      description:
        " Product Description The aluminium honeycomb core is composed and stacked by multi layer aluminium foil. It has even and smooth sur ",
      abillity: "10000 Piece/Pieces per Month",
      origin: "China",
      Location: "Jiangsu, China (Mainland)",
      img: Al,
      company: "Wuxi Shenxi Honeycomb Machinery Manufactory",
      type: "Manufacturer",
      key: "Honeycomb machinery, honeycomb core machine, honeycomb paperboard, honeycomb panel machine, honeycomb expander",
      tags: ["tag5", "tag6"],
    },
  ];

  const TagList = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"];
  const [selectedTags, setSelectedTags] = useState([]);
  const [Page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // State for items per page

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
    setPage(1);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setPage(1);
  };

  const filteredProducts = productLists.filter((product) =>
    selectedTags.length === 0
      ? true
      : selectedTags.every((tag) => product.tags.includes(tag))
  );

  const paginatedProducts = filteredProducts.slice(
    (Page - 1) * itemsPerPage,
    Page * itemsPerPage
  );

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="ProductList">
      <div className="ProductList-container">
        <div className="product-list-wrapper">
          <div className="title">
            <div className="text">
              <p>Showing List of</p>
              <span>{PageName}</span>
              <p>below</p>
            </div>
            <div className="num">
              <span>{productLists.length}+</span>
              <p>Products</p>
            </div>
            <div className="red-line"></div>
          </div>
          <div className="tags-lists">
            {TagList.map((tag, t) => (
              <p
                key={t}
                className={selectedTags.includes(tag) ? "activeTag" : ""}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </p>
            ))}
          </div>
          
          <div className="product-card-wrapper">
            {paginatedProducts.map((product, p) => (
              <ProductListCard key={p} data={product} />
            ))}
          </div>
          <Paging
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
            Page={Page}
            setPage={setPage}
            handleItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
        <div className="product-filter-wrapper">
          <ProductFilters />
        </div>
      </div>
    </div>
  );
}
