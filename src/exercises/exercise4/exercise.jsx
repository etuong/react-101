import React, { useEffect, useState } from "react";

import "./exercise.scss";

const Exercise = () => {
  const apikey = import.meta.env.VITE_TMDB_API_KEY;

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apikey}&page=1`;
    fetchMovies(apiUrl);
  }, []);

  const fetchMovies = async (url) => {
    setMovies([]);

    const response = await fetch(url);
    const data = await response.json();

    const movieList = data.results.map((movie) => ({
      title: movie.title,
      posterPath: movie.poster_path,
    }));

    setMovies(movieList);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchTerm}`;
      fetchMovies(searchUrl);
      setSearchTerm("");
    }
  };

  return (
    <React.Fragment>
      <header>
        <h1>Movies</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search"
            className="search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
      </header>
      <main>
        {movies.map((movie, index) =>
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.posterPath}`}
              alt=""
            />
            <h2>{movie.title}</h2>
          </div>
        )}
      </main>
    </React.Fragment>
  );
};

export default Exercise;
