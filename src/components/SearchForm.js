import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchResult, setSearchResult] = useState("");
  console.log(searchResult);
  const changeHandler = (event) => {
    setSearchResult(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchResult(event.target.value);
    props.setTheCharacter(searchResult);
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
    </section>
  );
}
