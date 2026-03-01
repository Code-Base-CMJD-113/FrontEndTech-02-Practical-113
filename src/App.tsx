import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Intro } from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import Airports from "./components/airport/Airport";

function App() {
  return (
    <>
      <Nav/>
      <Airports/>
    </>
  );
}
export default App;
