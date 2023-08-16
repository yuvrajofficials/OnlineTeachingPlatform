import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../heading/Header';
import Footer from '../footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

const CreateAccount = () => {


  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [discription, setDiscription] = useState("")
  const [firstName, setFirstName] = useState("")
  const [MiddleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneno, setPhoneNo] = useState("")
  const [createpassword, setCreatePassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [pincode, setPostalcode] = useState("")
  const [country, setCountry] = useState("")
  const [Nickname, setNickName] = useState("")

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.post('/api/v1/auth/register',{email,confirmpassword});
    if(res.data.success){
      toast.success(res.data.message);
      toast.success("Login Successful");
      console.log(res.data.message)
      navigate("/");
    

    }else{

      toast.success(res.data.message)
    }
  }
  catch(error){
    console.log(error)
    toast.error("Something went wrong ");

  }
  }

  return (
    <>

      <div>

        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
        <section className=" py-1 ">
          <form  >
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-center">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      Create Account
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Nickname
                        </label>
                        <input type="text" value={Nickname} onChange={(e) => setNickName(e.target.value)} className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="xyz..." />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Email address
                        </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="xyz@example.com" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          First Name
                        </label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Middle Name
                        </label>
                        <input type="text" value={MiddleName} onChange={(e) => setMiddleName(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Father Name" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Last Name
                        </label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Surname" />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Phone No.
                        </label>
                        <input type="number" value={phoneno} onChange={(e) => setPhoneNo(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Phone No." />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Set Your Password
                  </h6>

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Create PassWord
                      </label>
                      <input type="password" value={createpassword} onChange={(e) => setCreatePassword(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Create Password" />
                    </div>
                  </div>


                  <div className="w-full flex justify-center lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Confirm PassWord

                      </label>
                      <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Confirm Password" />
                    </div>
                  </div>


                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Address
                        </label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          City
                        </label>
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="New York" />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Country
                        </label>

                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="United States" />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Postal Code
                        </label>
                        <input type="number" value={pincode} onChange={(e) => setPostalcode(e.target.value)} required className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Postal Code" />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    About Me
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Tell About YourSelf


                          <textarea type="text" value={discription}  onChange={(e) =>setDiscription(e.target.value)} className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows={4} placeholder={" I have compleated my B.Tech in xyz college in xyz Stream . I have scored ....... "} />
                        </div>
                      </div>
                    </div></div>
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">

                    <button type="submit" onClick={handleSubmitEvent}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
                  </div>
                </div>
              </div>
          </div >
          </form>
        </section>
        <footer className="relative  pt-8 pb-6 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
            </div>
          </div>
        </footer>
      </div>



    </>
  )
}

export default CreateAccount
