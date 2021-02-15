import React from "react";

import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.css";

const MovieList = ({ movies, searchTitle, searchRating }) => {
  const handleMovie = (name) => {
    alert("this movie has a name", name);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>MovieList</h2>
      <div className="moviesList">
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchTitle.toLowerCase()) &&
              el.rating >= searchRating
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} handleMovie={handleMovie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
