
import React, { useState } from 'react'
import { BACK_IMG, options } from '../util/constant'
import { openai } from '../util/openApi';
import {useDispatch, useSelector} from 'react-redux'
import { addMovieNames, addSearchMovies } from '../features/search/searchSlice';
import useSearchBar from '../Hooks/useSearchBar';
import { languagePrefernce } from '../util/languages.js';

const SearchBar = () => {
  
  const lang = useSelector((store) => store?.language?.changeLanguage);
  const[searchValue , setSearchvalue] = useState("");
  const handleSearch = useSearchBar(searchValue , setSearchvalue)

  return (
    <>
        <div className='absolute'>
            <img className='h-screen bg-cover md:h-[100%] w-[100%]' src={BACK_IMG} alt="BACK-IMG" />
        </div>
        <div className='pt-[25%] md:pt-[10%] flex justify-center relative'>
            <form className='m-3 md:m-0 bg-black grid grid-cols-12 md:w-1/2' onSubmit={(e)=>e.preventDefault()}>
                <input  type="text" value={searchValue} placeholder={languagePrefernce[lang].searchPlaceholder} className='p-3 m-4 col-span-9 text-sm w-[250px] md:w-11/12 rounded-lg' onChange={(e)=> setSearchvalue(e.target.value)}/>
                <button className='px-2  bg-red-700 py-2 md:px-4 m-4 col-span-3 rounded-2xl' onClick={handleSearch}>{languagePrefernce[lang].search}</button>
            </form>
        </div>
    </>
  )
}

export default SearchBar
