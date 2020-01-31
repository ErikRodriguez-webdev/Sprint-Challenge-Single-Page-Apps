import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <div key={props.all.id}>
        <h2>{props.all.name}</h2>
        <p>
          Status: {props.all.status}
          <br />
          Species: {props.all.species}
          <br />
          Gender: {props.all.gender}
        </p>
      </div>
    </div>
  );
}
