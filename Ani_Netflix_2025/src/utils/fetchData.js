import request from "./requsts";

const fetchdata =[

{
fetchURL: request.fetchAction,
title: "Action Movies",
isSmall: true
},
{
fetchURL: request.fetchAnimation,
title: "Animation Movies"
},

{
fetchURL: request.fetchNetflixOriginal,
title: "NetflixOriginal Movies"
},

{
fetchURL: request.fetchToprated,
title: "Toprated Movies"
},

{
fetchURL: request.fetchComedyMovie,
title: "Comedy Movies"
},

{
fetchURL: request.fetchDocumentary,
title: "Documentary Movies"
},

{
 fetchURL: request.fetchHorrorMovie,
 title: "Horror Movies"
},

{
    fetchURL: request.fetchRomanceMovie,
    title: "Romance Movies"
}

]
export default fetchdata