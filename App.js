import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import Hero from "./Hero";
import SearchMovies from "./SearchMovies";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchMovies />
    </div>
  );
}

export default App;
