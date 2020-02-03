import React from "react";

export default function SearchForm(props) {
  const changeHandler = (event) => {
    props.setSearchWord(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.setSearchWord(event.target.value);
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
          value={props.searchWord}
          placeholder="Example: Rick Sanchez"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
