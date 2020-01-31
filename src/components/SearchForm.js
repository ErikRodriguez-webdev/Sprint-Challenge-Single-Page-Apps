import React, { useState } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
  const [searchResult, setSearchResult] = useState("");

  const changeHandler = (event) => {
    setSearchResult(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          name="search"
          onChange={changeHandler}
          value={searchResult}
          placeholder="Example: Rick Sanchez"
        />
      </form>
      <CharacterList searchResult={searchResult} />
    </section>
  );
}
