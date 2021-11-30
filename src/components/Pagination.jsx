import React from "react";

const Pagination = ({ itemsPerPage, totalItems, goToPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => goToPage(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
