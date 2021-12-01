import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Pagination.css'

const Pagination = ({
  itemsPerPage,
  totalItems,
  goToPage,
  onNext,
  onPrevious,
  prev,
  next,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const previousPage = () => {
    onPrevious();
  };

  const nextPage = () => {
    onNext();
  };
  return (
    <nav>
      <ul className="pagination">
        {prev ? (
          <li>
            <button className="button" onClick={previousPage}>Previous</button>
          </li>
        ) : null}
        {pageNumbers.map((number) => (
          <li key={number}className='list'>
            <button className="button" onClick={() => goToPage(number)}>{number}</button>
          </li>
        ))}
        {next ? (
          <li>
            <button className="button" onClick={nextPage}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
export default Pagination;
