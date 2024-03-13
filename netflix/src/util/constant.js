
const logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const BACK_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"

const API_END_POINT = "http://localhost:8080/api/v1/user";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY,
    }
  };

  const MOVIE_POSTER_PATH ="https://image.tmdb.org/t/p/original";

  const supportLanguage = [
                            {identifier : "en" , name : "English"},
                            {identifier : "hin" , name : "Hindi"},
                            {identifier : "mar" , name : "Marathi"},

                          ];

  const openAPiKey = import.meta.env.VITE_OPENAI_KEY;

export {logo , BACK_IMG , API_END_POINT , options , MOVIE_POSTER_PATH , openAPiKey , supportLanguage}