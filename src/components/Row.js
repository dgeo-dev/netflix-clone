import React from "react";
import { useState, useEffect } from "react";
import "./Row.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Row({ title, fetchUrl, isPoster }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //console.log(movies)
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/video/${movie.id}`}>
              {isPoster ? (
                <img
                  className="row__image"
                  src={
                    movie.poster_path
                      ? `${baseUrl}${movie.poster_path}`
                      : `https://via.placeholder.com/300x434/000000xFFFFFF?text=${movie.name}`
                  }
                  alt={movie.name}
                />
              ) : (
                <img
                  className="row__image"
                  src={
                    movie.backdrop_path
                      ? `${baseUrl}${movie.backdrop_path}`
                      : `https://via.placeholder.com/124x170/000000xFFFFFF?text=${movie.name}`
                  }
                  alt={movie.name}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
