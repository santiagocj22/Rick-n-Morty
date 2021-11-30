import React, { useState, useEffect } from "react";
import "./Home.css";
import Table from "./Table";
import Pagination from "./Pagination";

const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const apiCall = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  };
  const indexOfLastpage = pages * itemsPerPage;
  const indexOfFirstPage = indexOfLastpage - itemsPerPage;
  const currentPage = data.slice(indexOfFirstPage, indexOfLastpage);

  const goToPage = (pageNumber) => setPages(pageNumber);

  return (
    <div className="container">
      <input
        placeholder="Character Name"
        className="home-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        disabled={!input}
        className="home-button"
        onClick={() => {
          apiCall(input);
        }}
      >
        Search
      </button>
      <Table data={currentPage} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        goToPage={goToPage}
      />
    </div>
  );
};
export default Home;
