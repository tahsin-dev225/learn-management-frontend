"use client"
import useFirebase from '@/components/Firebase/useFirebase';
import { logUser, removeLoggedError } from '@/components/redux/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const page = () => {
    const router = useRouter();
    const [disable, setdisable] = useState(false)
    const [newUser , setNewUser] = useState({email : '', password : ''})
    const isLogged = useSelector(state => state.userReducer?.isLogged)
    const loggedError = useSelector(state => state.userReducer?.isloggedError)
    const errorMessage = useSelector(state => state.userReducer?.errorMesage)
    const {signIn} = useFirebase();
    const dispatch = useDispatch();

    const normalButton = 'w-full text-white my-6 bg-gradient-to-tr from-purple-950  to-indigo-950 cursor-pointer  rounded-full py-2 shadow-xl'
    const disableButton = 'w-full text-white my-6 bg-slate-400 cursor-pointer border rounded-full py-2 shadow-xl'

    const handleLogin = (e)=>{
            setdisable(true)
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            dispatch(logUser(email))
            setNewUser({email,password})
        }
        useEffect(()=>{
            if(isLogged){
                dispatch(removeLoggedError)
                signIn(newUser.email,newUser.password)
                .then(res =>{
                    setdisable(false)
                    router.push('/')
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
        <div className="w-full relative bg-[#241a1a] text-[#e1ded3] h-screen mx-auto flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-medium  mx-auto text-center">Login page.</h1>
                <div className="w-[60%] mx-auto">
                    <div className="p-4 w-full px-8">
                        <form onSubmit={handleLogin} className="w-[99%] md:w-[70%] lg:w-[75%] mx-auto ">
                            
                            <div className="my-4">
                                <p className="my-1 text-[15px] mx-2 text-slate-600"> Email </p>
                                <input type="text" name="email" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your email...' required />
                            </div>
                            <div className="my-4">
                                <p className="my-1 text-[15px] mx-2 text-slate-600"> Password </p>
                                <input type="password" name="password" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your email...' required />
                            </div>
                            <input type="submit" value="Login"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
                        </form>
                        <div className="mx-auto text-center">Don't have account <Link href="/signup" className='text-blue-400 font-semibold'>Sign-up </Link>?</div>
                    </div>
                </div>
            <div className="opacity-75 absolute size-36 bg-blue-900 rounded-4xl blur-3xl top-[50%] drop-shadow-lg z-0 left-9"></div>
            <div className="opacity-35 absolute size-60 bg-blue-900 rounded-4xl blur-3xl top-[20%] drop-shadow-lg z-0 left-[70%]"></div>
            <div className="opacity-45 absolute size-36 bg-blue-900 rounded-4xl blur-3xl top-[80%] drop-shadow-lg z-0 right-9"></div>
        </div>
    );
};

export default page;