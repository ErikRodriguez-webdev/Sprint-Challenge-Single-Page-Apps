import React, { useState } from "react";

export default function SearchForm() {
  const [searchResult, setSearchResult] = useState("");

  const changeHandler = (event) => {
    setSearchResults(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="search-form">
      <form onSubmit={}>
        <label />
        <input
          id="search"
          name="search"
          onChange={changeHandler}
          value="searchResult"
          placeholder="Example: Rick Sanchez"
        />
      </form>
    </section>
  );
}
