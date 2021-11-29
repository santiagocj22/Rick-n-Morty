import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
  },[id]);
  return (
    <div className="cards">
        <div className="card">
          <img
            className="card-img"
            src={character.image}
            alt={character.name}
          />
          <h2>{character.name}</h2>
          <span>first see in: {character.location}</span>
          <span>Status: {character.status}</span>
        </div>
  </div>
  );
};
export default Character;

// useEffect(() => {
//     const infoAPI =  () => {
//       const response = fetch(
//         `https://rickandmortyapi.com/api/character/${id}`
//       );
//       const data = response.json();
//       setCharacter(data);
//     };
//     infoAPI();
//   }, [id]);
