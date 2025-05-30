"use client"
import useFirebase from '@/components/Firebase/useFirebase';
import { isLoggedUser, logUser, removeLoggedError } from '@/components/redux/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { User, Lock } from "lucide-react"

const page = () => {
    const router = useRouter();
    const [disable, setdisable] = useState(false)
    const [newUser , setNewUser] = useState({email : '', password : ''})
    const isLogged = useSelector(state => state.userReducer?.isLoggedUser)
    const loggedError = useSelector(state => state.userReducer?.isLoggedUserError)
    const errorMessage = useSelector(state => state.userReducer?.loggedUserErrorMessage)
    const {signIn} = useFirebase();
    const dispatch = useDispatch();

    const normalButton = "w-full cursor-pointer py-2 rounded-xl text-white mt-10  bg-gradient-to-r from-blue-500 to-indigo-700 hover:opacity-90 transition"
    const disableButton = 'w-full py-2 rounded-xl text-white mt-10  bg-gray-400 hover:opacity-90 transition'

    const handleLogin = (e)=>{
        setdisable(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(isLoggedUser(email))
        setNewUser({email,password})
    }

    useEffect(()=>{
        if(isLogged){
            dispatch(removeLoggedError)
            signIn(newUser.email,newUser.password)
            .then(res =>{
                setdisable(false)
                router.push('/dashboard')
            })
            .catch(error =>{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "You don't have account sign up first.",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log('error from login', error)
                setdisable(false)
            }
            )
        }
        if(loggedError){
            setdisable(false)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${errorMessage.message} `,
                showConfirmButton: false,
                timer: 1500
            });
        }
        
    },[isLogged ,loggedError])

    return (
    //     <div className="w-full overflow-hidden relative bg-[#241a1a] text-[#e1ded3] min-h-screen mx-auto flex flex-col items-center justify-center ">
    //             <h1 className="lg:text-3xl text-xl font-bold lg:font-medium  mx-auto text-center">Login page.</h1>
    //             <div className="w-full overflow-hidden lg:w-[60%] mx-auto">
    //                 <div className="p-4 w-full px-2 lg:px-8">
    //                     <form onSubmit={handleLogin} className="w-[99%] overflow-hidden md:w-[70%] lg:w-[75%] mx-auto ">
                            
    //                         <div className="my-4">
    //                             <p className="my-1 text-[15px] mx-2 text-slate-600"> Email </p>
    //                             <input type="text" name="email" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your email...' required />
    //                         </div>
    //                         <div className="my-4">
    //                             <p className="my-1 text-[15px] mx-2 text-slate-600"> Password </p>
    //                             <input type="password" name="password" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your email...' required />
    //                         </div>
    //                         <input type="submit" value="Login"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
    //                     </form>
    //                     <div className="mx-auto text-center">Don't have account <Link href="/signup" className='text-blue-400 font-semibold'>Sign-up </Link>?</div>
    //                 </div>
    //             </div>
    //             <div className="opacity-75 absolute size-16 lg:size-36 bg-blue-900 rounded-4xl blur-3xl lg:top-[50%] drop-shadow-lg -z-0 left-[20%] lg:left-[9%]"></div>
    //             <div className="opacity-35 absolute size-24 lg:size-60 bg-blue-900 rounded-4xl blur-3xl lg:top-[20%] drop-shadow-lg -z-0 left-[20%] lg:left-[70%]"></div>
    //             <div className="opacity-45 absolute size-16 lg:size-36 bg-blue-900 rounded-4xl blur-3xl lg:top-[80%] drop-shadow-lg -z-0 right-[20%] lg:right-[9%]"></div>

    //             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">

   
    //     </div>

    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className=" w-full hidden lg:flex z-20 justify-center relative ">
        <div className="lg:w-[65%] md:w-[55%] w-[92%] h-full">
          <h1 className="lg:text-5xl text-2xl font-semibold text-white ">Welcome .</h1>
          <p className="text-xl my-5 text-white">To learnetic best online course platform.</p>
          <p className="text-gray-300 p-1 rounded bg-gradient-to-l ">Login to continue the growing of your skill,experience , value, and make your mind stronger .Here we have the countries best and famous teachers and we have a great name .</p>
        </div>
        
      </div>
      
        
      <div className="w-full z-30 text-sky-100 lg:text-gray-800 p-3 py-10 lg:p-10 lg:py-14">

        <form onSubmit={handleLogin} className="md:w-[70%] w-[95%] mx-auto">
          <h1 className="text-3xl text-sky-200 lg:text-blue-600 font-sans font-bold mt-6">Sign-In.</h1>
          <p className="mt-2 mb-6 text-blue-200 lg:text-gray-600">Sign-in and grow the progress .</p>
          <div>
            <input type="email" name='email' placeholder="Enter email..." required className="w-full my-4 px-4 py-1.5 border border-sky-200 lg:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div>
            <input type="password" name='password' required placeholder="Enter password" className="w-full my-4 px-4 py-1.5 border border-sky-200 lg:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <input type="submit" value="Login"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
          
          <div className="mx-auto text-center my-6">Don't have account <Link href="/signup" className='text-purple-400 lg:text-blue-400 font-bold'>Sign-up </Link>?</div>
        </form>
      </div>
      <div className="md:size-[890px] size-[690px]  overflow-hidden absolute -top-[12%] -left-[39%] sm:-left-[22%] md:-top-[32%] md:-left-[14%]  rounded-full bg-gradient-to-br border-sky-800 from-[#3b86ea] to-[#120379]"></div>
      <div className="md:size-[320px] size-[240px] hidden sm:block overflow-hidden absolute bottom-[5%] right-[5%] md:bottom-[15%] md:left-[33%] blur-[1px] rounded-full bg-gradient-to-br border-sky-800 from-[#08107e] to-[#4574e0ec]"></div>
      <div className="md:size-[290px] size-[220px]  overflow-hidden absolute -bottom-[7%] -left-[9%] md:-left-[4%]  rounded-full bg-gradient-to-br border-sky-800 from-[#3b86ea] to-[#120379]"></div>
    </div>

    );
};

export default page;