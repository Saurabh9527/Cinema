import React from 'react'
import { logo, options } from '../util/constant'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API_END_POINT } from '../util/constant'
import toast from 'react-hot-toast';
import { toggleSearchButton } from '../features/search/searchSlice.js'
import { supportLanguage } from '../util/constant'
import { addLanguage } from '../features/language/languageSlice.js'
import LogoMovie from '../util/MovieLogo.jpg'

const Header = () => {

  const user = useSelector((store)=>store.user.userDetails)
  const search = useSelector((store)=>store?.search?.toggleSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);

      if(res.data.success){
        toast.success(res.data.message)
        dispatch(removeUser());
        navigate("/")
      }   
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = () => {
    dispatch(toggleSearchButton())
  }

  const handleSelectOptions = (e) =>{
    dispatch(addLanguage(e.target.value))
  }

  return (
    <div className='pt-2 md:pt-0 flex justify-between z-10 items-center bg-gradient-to-b from-blue-950 w-full absolute'>
      <img className='w-32 md:w-48 md:ml-5 md:mt-2' src={LogoMovie} alt="" />
      <div className='flex mr-2'>
        { user && (
        <>
        {  <h1 className='hidden md:block text-sm font-bold py-2 text-white md:text-xl '>{user.fullName}</h1>}
        
        {  <button className='m-1 p-2 bg-red-700 md:px-4 md:py-2 md:mr-2 md:ml-2 rounded-lg text-white hover:bg-red-800' onClick={handleLogout}>Logout</button> }
        {  <button className='m-1 p-2 bg-red-700 md:px-4 md:py-2 rounded-lg text-white' onClick={handleSearch}>{search ?"Home" :"Search Movie"}</button>}
        {search && <select onChange={handleSelectOptions} className=' bg-gray-500 text-white m-1 rounded-lg p-1'>
          {supportLanguage.map((lan)=>(<option className='text-sm md:font-semibold' key={lan.identifier} value={lan.identifier}>{lan.name}</option>))}
          </select>}
        </>
        )}
      </div>
    </div>
  )
}

export default Header
