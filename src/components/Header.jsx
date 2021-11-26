import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const apiCall = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  };

  return (
    <div className="container">
      <input
        placeholder="Character Name"
        className="header-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="header-button"
        onClick={() => {
          apiCall(input);
        }}
      >
        Search
      </button>
      <div className="cards">
        {data.map((character, index) => {
          return (
            <div key={"char-" + index} className="card">
              <img
                className="card-img"
                src={character.image}
                alt={character.name}
              />
              <h2>{character.name}</h2>
              <span>first see in: {character.location.name}</span>
              <span>Status: {character.status}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
