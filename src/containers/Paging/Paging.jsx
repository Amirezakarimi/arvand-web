import "./Paging.css";

import React, { useState } from "react";

const Paging = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  Page,
  setPage,
  handleItemsPerPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={Page === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="Paging">
      {renderPageNumbers()}
      <div className="items-per-page">
        <label htmlFor="itemsPerPage">تعداد در هر صفحه: </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </div>
    </div>
  );
};

export default Paging;
