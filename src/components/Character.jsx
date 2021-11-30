import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({ location: {} });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <div className="cards">
      <div className="card">
        <img className="card-img" src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <span>first seen in: {character.location.name}</span>
        <span>Status: {character.status}</span>
      </div>
    </div>
  );
};
export default Character;
