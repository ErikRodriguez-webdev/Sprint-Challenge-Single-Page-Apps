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
        console.log(res);
        const allNames = res.data.results.map(
          theCharacter.toLowerCase().filter()
        );
        setTheCharacter(allNames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [theCharacter]);

  return (
    <section className="character-list">
      <SearchForm setTheCharacter={setTheCharacter} />
      <CharacterCard theCharacter={theCharacter} />
    </section>
  );
}
