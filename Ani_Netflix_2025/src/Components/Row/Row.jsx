
import React,{ useEffect, useState } from 'react'
import instance from '../../utils/axios'
import request from '../../utils/requsts'
import movieTrailer from "movie-trailer";
import './Row.css'
import YouTube from "react-youtube";
    
function Row({ title, fetchURL, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    instance.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  const BaseURL = "https://image.tmdb.org/t/p/original";

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie.name || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="single-row-container">
      <div className="banner-title">
        <h1>{title}</h1>
      </div>
      <div className={`movies-Row ${isSmall ? "isSmall" : "isLarge"}`}>
        {movies?.map((singleMovie) => {
          return (
            <div key={singleMovie.id}>
              <img
                src={`${BaseURL}${singleMovie.backdrop_path}`}
                alt="Movie"
                onClick={() => handleClick(singleMovie)}
              />
            </div>
          );
        })}
      </div>
      <div className="trailer-container">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      {console.log(trailerUrl)}
    </div>
  );
}

export default Row;
