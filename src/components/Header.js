import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background: yellowgreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderDiv className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
    </HeaderDiv>
  );
}
