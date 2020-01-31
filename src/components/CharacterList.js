import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [theCharacter, setTheCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        console.log(res);
        setTheCharacter(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      {theCharacter.map((item) => (
        <CharacterCard item={item} />
      ))}
    </section>
  );
}
