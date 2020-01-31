import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  const [theCharacter, setTheCharacter] = useState([]);
  setTheCharacter(props.searchResult);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        console.log(res.data.results);
        const nameMatch = setTheCharacter(res.data.results.filter());
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      {theCharacter.map((all) => (
        <CharacterCard all={all} />
      ))}
    </section>
  );
}
