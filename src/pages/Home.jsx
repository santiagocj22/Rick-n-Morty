import React, { useState, useEffect } from "react";
import "./Home.css";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const initialUrl = "https://rickandmortyapi.com/api/character/";

const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
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
    fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${input}`);
  };
  const goToPage = (id) => {
    fetchCharacters(
      `https://rickandmortyapi.com/api/character/?page=${id}&name=${input}`
    );
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
      <Table data={data} />
      <Pagination info={info} goToPage={goToPage} />
    </div>
  );
};
export default Home;
