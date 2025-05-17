"use client"
import useFirebase from '@/components/Firebase/useFirebase';
import { isLoggedUser, logUser, removeLoggedError } from '@/components/redux/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const page = () => {
    const router = useRouter();
    const [disable, setdisable] = useState(false)
    const [newUser , setNewUser] = useState({email : '', password : ''})
    const isLogged = useSelector(state => state.userReducer?.isLoggedUser)
    const loggedError = useSelector(state => state.userReducer?.isLoggedUserError)
    const errorMessage = useSelector(state => state.userReducer?.loggedUserErrorMessage)
    const {signIn} = useFirebase();
    const dispatch = useDispatch();

    const normalButton = "w-full cursor-pointer py-2 rounded-full text-white mt-10  bg-gradient-to-r from-blue-500 to-pink-400 hover:opacity-90 transition"
    const disableButton = 'w-full py-2 rounded-full text-white mt-10  bg-gray-400 hover:opacity-90 transition'

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

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#22033b] to-[#540255] px-4">
      <div className="bg-white/10 text-white backdrop-blur-3xl rounded-2xl shadow-lg overflow-hidden flex w-full lg:max-w-[75%]">
        
        <div className="w-full md:w-1/2 p-3 py-10 lg:p-10 lg:py-14">
          <h2 className="text-2xl lg:text-4xl font-bold  my-2">Welcome to Learnetic .</h2>
          <p className="text-sm  mb-6">Please login to get the service .</p>

          <form onSubmit={handleLogin} className="">
            <div>
              <input type="email" name='email' placeholder="Enter email..." required className="w-full my-4 px-4 py-1.5 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <div>
              <input type="password" name='password' required placeholder="Enter password" className="w-full my-4 px-4 py-1.5 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <input type="submit" value="Login"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
            
            <div className="mx-auto text-center my-6">Don't have account <Link href="/signup" className='text-blue-400 font-semibold'>Sign-up </Link>?</div>
          </form>

        </div>

        <div className="hidden bg-[#fffffffe] md:block w-1/2">
          <img
            src="/img/loginbg.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    );
};

export default page;