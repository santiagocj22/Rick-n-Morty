import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
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
        className="home-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="home-button"
        onClick={() => {
          apiCall(input);
        }}
      >
        Search
      </button>

      <table className="table table-striped table-hover table-bordered">
        <thead className="table-active">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Firs see in</th>
            <th>Status</th>
          </tr>
        </thead>

        {data.map((character, index) => {
          return (
            <tbody key={"char_" + index}>
              <tr>
                <Link to={`/${character.id}`}>  
                  <td>{character.id}</td>
                </Link>
                  <td>{character.name}</td>
                  <td>{character.location.name}</td>
                  <td>{character.status}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Home;
