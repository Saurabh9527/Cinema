import React, { useState } from 'react'
import Header from './Header'
import { BACK_IMG } from '../util/constant'
import axios from 'axios';
import { API_END_POINT } from '../util/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/user/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user.userDetails);

  const handleClick = () => {
    setIsLogin(!isLogin)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);

    if (isLogin) {
      try {

        const res = await axios.post(`${API_END_POINT}/login`, { email, password },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          });

     
        if (res.data.success) {
          toast.success(res.data.message)
          navigate("/browse");     
        }
        dispatch(addUser(res.data.user))

      } catch (error) {

        toast.error(error.response.data.message)
      }finally{
          setLoading(false)
      }
    } else {
      try {

        setLoading(true);
        const res = await axios.post(`${API_END_POINT}/register`, { fullName, email, password },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          });
  

        if (res.data.success) {
          toast.success(res.data.message)
          navigate("/login");
        }

      } catch (error) {
 
        toast.error(error.response.data.message)
      }finally{
        setLoading(false)
      }
    }
    setEmail("")
    setFullName("")
    setPassword("")
  }
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img className='h-[100vh] md:h-[100vh] w-screen object-cover' src={BACK_IMG} alt="" />
      </div>
      <form onSubmit={handleSubmit} className='w-11/12 p-2 absolute my-20 md:my-14 bg-black mx-auto left-0 right-0 md:w-4/12 md:p-12 text-white bg-opacity-80 outline-none rounded-lg'>
        {isLogin ? <h1 className='  font-bold text-3xl mb-3 '>Sign In</h1> : <h1 className='font-bold text-3xl mb-3'>Sign Up</h1>}
        {!isLogin && <input className='mx-5 p-3 w-10/12 md:w-11/12 my-4 md:mx-0 rounded-lg bg-gray-800' placeholder='Enter Name' type="text"  value={fullName} onChange={(e) => setFullName(e.target.value)} />}
        <input className='mx-5 p-3 my-4 w-10/12 md:w-11/12  md:mx-0 rounded-lg bg-gray-800 border-1' placeholder='Enter Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className=" mx-5 p-3 my-4 w-10/12 md:w-11/12  md:mx-0 rounded-lg bg-gray-800" placeholder='Enter Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='bg-red-800 mx-5 p-3 my-4 w-10/12 md:w-11/12 md:mx-0 rounded-lg ' disabled={loading}>{loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}</button>

        {
          isLogin ?
            <p>New to Cinema <span className='cursor-pointer text-blue-700' onClick={handleClick}>Sign up</span></p>
            :
            <p>Already Have Account ? <span className='cursor-pointer text-blue-700' onClick={handleClick}>Sign in</span></p>
        }
      </form>
      </div>
  )
}

export default Login
