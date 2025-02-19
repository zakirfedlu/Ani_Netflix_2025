import { useEffect, useState } from "react";
import "./Banner.css";
import request from "./../../utils/requsts";
import instance from "../../utils/axios";

function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    instance
      .get(request.fetchpopular)
      .then((res) =>
        setmovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        )
      );
  }, []);

  const baseURL = "https://images.tmdb.org/t/p/original/";

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: `url(${baseURL}${movie?.backdrop_path})` }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </>
  );
}

export default Banner;
