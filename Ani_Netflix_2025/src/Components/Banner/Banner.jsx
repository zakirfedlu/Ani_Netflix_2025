
import { useEffect,useState } from "react";
import "./Banner.css";
import request from "../../utils/requsts";
import instance from "../../utils/axios";

function Banner() {
  const [movie,setmovie] = useState([]);
  useEffect (() => {
    instance.get(request.fetchpopular)
.then((res)=>setmovie(res.data.results[Math.floor(Math.random()*res.data.result.length)])
) ;


  },[]);

  const baseURL = 
 "https://images.tmdb.org/t/p/original/";   /*8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"*/    
  

https: return (
  <>
    <div className="banner" style={{ backgroundImage: `url(${baseURL})` }}>
      <div className="banner__contents">
        <h1 className="banner__title">Free Guy (2021)</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Free Guy (2021) A bank teller discovers he's an NPC in a video game
          and decides to become the hero of his own story, fighting to save his
          virtual world.
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  </>
);
}

export default Banner;
