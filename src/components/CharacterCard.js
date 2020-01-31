import React from "react";

export default function CharacterCard(props) {
  console.log("CharacterCard", props.theCharacter);

  return (
    <div>
      {/* {props.theCharacter.map((all) => (
        <div id={all.id}>
          <h2>{all.name}</h2>
          <p>{all.species}</p>
        </div>
      ))} */}
    </div>
  );
}
