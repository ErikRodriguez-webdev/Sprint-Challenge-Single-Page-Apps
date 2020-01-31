import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [theCharacter, setTheCharacter] = useState([]);
  console.log(theCharacter);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        console.log(res.data.results);
        setTheCharacter(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <SearchForm setTheCharacter={setTheCharacter} />
      <CharacterCard theCharacter={theCharacter} />
    </section>
  );
}
