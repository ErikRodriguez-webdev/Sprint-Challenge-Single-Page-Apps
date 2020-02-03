import React from "react";

export default function CharacterCard(props) {
  console.log("CharacterCard", props);

  return (
    <div>
      {props.theCharacter.map((all) => (
        <div id={all.id}>
          <h2>{all.name}</h2>
        </div>
      ))}
    </div>
  );
}
