import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Intro } from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import Airports from "./components/airport/Airport";
import { Flights } from "./components/flights/Flights";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/airports" element={<Airports />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </>
  );
}
export default App;
