import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 75%;
  margin: 1% 10%;
`;

const CardH1 = styled.h1`
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <div>
      <CardDiv id={props.theCharacter.id}>
        <CardH1>{props.theCharacter.name}</CardH1>
      </CardDiv>
    </div>
  );
}
