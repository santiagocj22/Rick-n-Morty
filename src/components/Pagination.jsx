import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";
const Pagination = ({ info, goToPage }) => {
  const [pageNumberLimit] = useState(7);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [pages, setPages] = useState(1);
  //   const [input, setInput] = useState("");

  const prev = info.prev;
  const next = info.next;
  const totalItems = info.count;

  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalItems / 20); i++) {
    pageNumbers.push(i + 1);
  }

  const onPrev = (id) => {
    setPages(pages - 1);
    goToPage(id);
    if ((pages - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const onNext = (id) => {
    setPages(pages + 1);
    goToPage(id);
    if (pages + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const pageToGo = (id) => {
    setPages(id);
    goToPage(id);
  };
  return (
    <nav>
      <ul className="pagination">
        {prev ? (
          <li>
            <button className="button" onClick={() => onPrev(pages - 1)}>
              Previous
            </button>
          </li>
        ) : null}
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li key={number}>
                <button
                  className={pages === number ? "active" : "button"}
                  onClick={() => pageToGo(number)}
                >
                  {number}
                </button>
              </li>
            );
          } else {
            return null;
          }
        })}
        {next ? (
          <li>
            <button className="button" onClick={() => onNext(pages + 1)}>
              Next
            </button>
          </li>
        ) : null}
        {/* <input
            value={input}
            placeholder="Go to page:"
            onChange={(e) => {
                setInput(e.target.value);
            }}
            />
            <button onClick={() => pageToGo(input)} /> */}
      </ul>
    </nav>
  );
};
export default Pagination;
