const API_KEY = import .meta.env.VITE_API_KEY;
const request = {
  fetchpopular: `/discover/movie?api_key=${API_KEY}&include_adult=false&sort_by=popularity.desc`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&include_adult=false&inclide_video=fase&sort_by=popularitydesc&withgener=28`,
  fetchAnimation:`/discover/movie?api_key=${API_KEY}&include_adult=false&inclide_video=fase&sort_by=popularitydesc&withgener=16`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrading: `/trading/all/week?api_key=${API_KEY}&language=en_us`, 
  fetchToprated: `/discover/movie?api_key=${API_KEY}`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

};

export default request;


/*const API_KEY = process.env.REACT_APP_API_KEY;

const request = {
  fetchPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&sort_by=popularity.desc`,
};

export default request;*/







/* URL='https://api.themoviedb.org/3/genre/movie/list?language=en 
API_KEY= 8de46dc1fd1cecdbe69a20bf353e5b1e' */




/*'https//api.themoviedb.org/3discovery/tv?api_key=9a23e9a8212b4d3000a10c25901b4430&with_networks=213'*/
