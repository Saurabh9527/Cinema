
import React from 'react'
import { options } from '../util/constant';
import { useDispatch } from 'react-redux';
import { openai } from '../util/openApi';
import { addMovieNames, addSearchMovies } from '../features/search/searchSlice';

const useSearchBar = (searchValue , setSearchvalue) => {
    const disaptach = useDispatch();

    const searchMovieInTMDB = async (movieName) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options);

        const res = await data.json();
        // console.log(res);
        return res.results;
    }

    const handleSearch = async () => {
        // console.log(searchValue);
        const query = "Act as a movie recommendation system and suggest some movies for the query" + searchValue + "only give me 5 movies names seperated by comma like the example given ahead Example result : Gadar , Sholay , Don";

        const result = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });

        //   console.log(result);
        //   console.log(result?.choices[0]?.message?.content);
        const gptMovies = result?.choices[0]?.message?.content.split(",");
        //   console.log(gptMovies);
        disaptach(addMovieNames(gptMovies))
        const promiseArray = gptMovies.map((movie) => (searchMovieInTMDB(movie)));
        const movieDetails = await Promise.all(promiseArray);
        // console.log(movieDetails);
        disaptach(addSearchMovies(movieDetails));
        setSearchvalue("")

    }
    return handleSearch 
}

export default useSearchBar
