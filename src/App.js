import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Route exact path="/">
        <Header />
        <WelcomePage />
      </Route>

      <Route path="/characters">
        <Header />
        <CharacterCard />
        <CharacterList />
      </Route>
    </main>
  );
}
