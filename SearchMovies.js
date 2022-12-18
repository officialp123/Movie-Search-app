import React from "react";
import { useState } from "react";

function SearchMovies() {
  // Making a API call using Async await in order to make sure we are getting results from the API
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();
    setSearching(true);
    const url = `http://www.omdbapi.com/?&apikey=e1a73560&s=${query}&type="movie"`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMessage(null);
      setMovies(data.Search);
      setSearching(false);
    } catch (err) {
      setMessage("An unexpected error occured.");
      setSearching(false);
    }

    // Creating the Input field for movie search
  };
  return (
    <div>
      <div>
        <form onSubmit={searchMovies}>
          <input
            type="text"
            name="query"
            placeholder="Search movies by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="movies-container">
        {searching && !message ? (
          <span> loading... </span>
        ) : message ? (
          <div className="message"> {message} </div>
        ) : (
          movies.map((movie) => (
            <div>
              <div key={movie.imdbID}>
                <img
                  className="movie-img-con"
                  src={movie.Poster}
                  alt="movieimage"
                />
                <div>
                  <p className="movie-text">
                    Title: <span className="movie-title">{movie.Title}</span>
                  </p>
                  <p className="movie-text">
                    Year of Release: <span>{movie.Year}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchMovies;
