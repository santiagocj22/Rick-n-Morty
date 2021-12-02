import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";

const Pagination = ({
  itemsPerPage,
  totalItems,
  goToPage,
  onNext,
  onPrevious,
  prev,
  next,
  currentPage,
}) => {
  const [pageNumberLimit, setpageNumberLimit] = useState(7);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

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

  const pageToGo = (id) => {
    goToPage(id);
  };


    return (
      <nav>
        <ul className="pagination">
          {prev ? (
            <li>
              <button className="button" onClick={previousPage}>
                Previous
              </button>
            </li>
          ) : null}
          {pageNumbers.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <li key={number} className={currentPage === number ? 'active': null}>
                  <button className="button" onClick={() => pageToGo(number)}>
                    {number}
                  </button>
                </li>
              );
            } else{
              return null;
            }
          })}
          {next ? (
            <li>
              <button className="button" onClick={nextPage}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
};
export default Pagination;
