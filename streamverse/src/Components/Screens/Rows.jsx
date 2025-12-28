import React, { useState, useEffect } from "react";
import "./Rows.css";
import axios from "../../Components/fetch/axios";

function Row({ title, fetchUrl, isLargeContainer }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseUrl}${
              isLargeContainer ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeContainer && "row_posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
