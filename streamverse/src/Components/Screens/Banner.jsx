import React, { useEffect, useState } from "react";
import axios from "../fetch/axios";
import requests from "../fetch/request";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  // const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // function truncate(string, n) {
  //   return string?.length > n ? string.substr(0, n - 1) + "......" : string;
  // }

  const handleMovieClick = (movieid) => {
    navigate(`/movie/${movieid}`);
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="banner_buttons">
          {/* <imgage type="image/png" src="../Images/play-button-arrowhead.png" /> */}
          <button className="banner_button">
            <img
              src="https://img.icons8.com/?size=100&id=9978&format=png&color=000000"
              className="play_icon"
            />
            Play
          </button>
          <button
            className="banner_button"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src="https://img.icons8.com/?size=100&id=77&format=png&color=000000"
              className="info_button"
            />
            More Info
          </button>
        </div>
        {/* <h1 className="banner_description">{truncate(movie.overview, 250)}</h1> */}
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;
