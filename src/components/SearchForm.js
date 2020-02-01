import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    props.setSearchWord(setSearchTerm);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          name="search"
          type="text"
          onChange={changeHandler}
          value={searchTerm}
          placeholder="Example: Rick Sanchez"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
