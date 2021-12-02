import React, { useState, useEffect } from "react";
import "./Home.css";
import Table from "./Table";
import Pagination from "./Pagination";



const initialUrl = "https://rickandmortyapi.com/api/character/";
const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(21);
  const [itemsPerPage] = useState(20);
  const [info, setInfo] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setInfo(data.info);
      });
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const apiCall = () => {
    fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${input}`)
  };
  const indexOfLastpage = pages * itemsPerPage;
  const indexOfFirstPage = indexOfLastpage - itemsPerPage;
  const currentPage = data.slice(indexOfFirstPage, indexOfLastpage);

  const goToPage = (id) => {
    setPages(id)
    fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${pages}&name=${input}`)
  }
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

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
        totalItems={info.count}
        // totalItems={data.length}
        goToPage={goToPage}
        prev={info.prev}
        next={info.next}
        onNext={onNext}
        onPrevious={onPrevious}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Home;
