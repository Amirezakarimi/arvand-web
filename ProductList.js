import React, { useState } from "react";
import "./ProductList.css";
import { Paging, ProductFilters, ProductListCard } from "../../containers";
import Al from "../../assets/products/al-honey.jpg";

export default function ProductList(props) {
  const { PageName } = props;
  const productLists = [
    {
      id: 1,
      name: "Product 1",
      image: Al,
      price: "$10",
      tags: ["tag1", "tag2"],
    },
    {
      id: 2,
      name: "Product 2",
      image: Al,
      price: "$20",
      tags: ["tag2", "tag3"],
    },
    {
      id: 3,
      name: "Product 3",
      image: Al,
      price: "$30",
      tags: ["tag3", "tag4"],
    },
    {
      id: 4,
      name: "Product 4",
      image: Al,
      price: "$40",
      tags: ["tag4", "tag5"],
    },
    {
      id: 5,
      name: "Product 5",
      image: Al,
      price: "$50",
      tags: ["tag5", "tag6"],
    },
    {
      id: 6,
      name: "Product 6",
      image: Al,
      price: "$60",
      tags: ["tag1", "tag6"],
    },
    {
      id: 7,
      name: "Product 7",
      image: Al,
      price: "$70",
      tags: ["tag1", "tag3"],
    },
    {
      id: 8,
      name: "Product 8",
      image: Al,
      price: "$80",
      tags: ["tag2", "tag4"],
    },
  ];
  const TagList = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"];
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [Page, setPage] = useState(1);

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const filteredProducts = productLists.slice((Page - 1) * 4, Page * 4);

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
            {filteredProducts.map((product, p) => (
              <ProductListCard key={p} data={product} />
            ))}
          </div>
          <Paging
            totalItems={productLists.length}
            itemsPerPage={4}
            onPageChange={onPageChange}
          />
        </div>
        <div className="product-filter-wrapper">
          <ProductFilters />
        </div>
      </div>
    </div>
  );
}
