import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../heading/Header';
import Footer from '../footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post('/api/v1/auth/login',{email,password});
      if(res.data.success){
        toast.success(res.data.message);
        toast.success("Login Successful");
        console.log(res.data.message)
        navigate("/");
      

      }else{

        toast.success(res.data.message)
      }
    }catch(error){
      console.log(error)
      toast.error("Something went wrong ");

    }
   }
  return (
    <>
   
<Header/>
<div class="flex flex-wrap min-h-screen w-full content-center justify-center py-10">

  <div class="flex shadow-md">
   
    <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white"  style={{width: '24rem', height: '32rem'}}>
      <div class="w-72">
      
        <h1 class="text-xl font-semibold">Welcome back</h1>
        <small class="text-gray-400">Welcome back! Please enter your details</small>

      
        <form class="mt-4" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="mb-2 block text-xs font-semibold">Email</label>
            <input type="email" id="useremailname" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div class="mb-3">
            <label class="mb-2 block text-xs font-semibold">Password</label>
            <input type="password" required value={password}  onChange={(e) => setPassword(e.target.value)}  name="userpassword" placeholder="********" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div class="mb-3 flex flex-wrap content-center">
           
            <a href="#" class="text-xs font-semibold text-purple-700">Forgot password?</a>
          </div>

          <div class="mb-3">
            <button type='submit' class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md" >Sign in</button>
            <button class="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img class="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
              Sign in with Google
            </button>
          </div>
        </form>
    
        <div class="text-center">
          <span class="text-xs text-gray-400 font-semibold">Don't have account?</span>
          <a href="#" class="text-xs font-semibold text-purple-700">Sign up</a>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap content-center justify-center rounded-r-md " style={{width: '24rem',height:'32rem'}}>
      <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://qph.cf2.quoracdn.net/main-qimg-c6892ed8f6e8bbba1ec6ad4f41319b26"/>
    </div>
    <Toaster />
  </div>
</div>   
<Footer/>
  
 </>
  )
}

export default LoginForm
