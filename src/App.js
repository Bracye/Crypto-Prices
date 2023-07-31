import React from "react";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Currencies/" element={<Currencies />} />
        <Route path="/Price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
