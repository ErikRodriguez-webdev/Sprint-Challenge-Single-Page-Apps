import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [searchWord, setSearchWord] = useState();
  const [theCharacter, setTheCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        console.log("API Success", res);
        const nameMatch = res.data.results.filter((item) => {
          item.name.toLowerCase().includes(searchWord.toLowerCase());
          setTheCharacter(nameMatch);
        });
      })
      .catch((err) => {
        console.log("API Failed", err);
      });
  }, [searchWord]);

  return (
    <section className="character-list">
      <SearchForm setSearchWord={setSearchWord} />
      <CharacterCard theCharacter={theCharacter} />
    </section>
  );
}
