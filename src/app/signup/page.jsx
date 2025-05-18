"use client"
import useFirebase from '@/components/Firebase/useFirebase';
import { addUser } from '@/components/redux/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const page = () => {
    const router = useRouter();
    const [disable, setdisable] = useState(false)
    const {createUser} = useFirebase();
    const dispatch = useDispatch();

    const normalButton = "w-full cursor-pointer py-2 rounded-full text-white mt-5  bg-gradient-to-r from-blue-500 to-pink-400 hover:opacity-90 transition"
    const disableButton = 'w-full py-2 rounded-full text-white mt-5  bg-gray-400 hover:opacity-90 transition'

    const handleSignup = (e)=>{
            setdisable(true)
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            const name = e.target.name.value;
            const role = e.target.role.value;
            const newUser = {
               email, name,role
             }
            createUser(email,password)
            .then(res =>{
                setdisable(false)
                dispatch(addUser(newUser))
                router.push('/dashboard')
            }).catch(error =>{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "You don't have account sign up first.",
                    showConfirmButton: false,
                    timer: 1500
                    });
                console.log('error from login', error)
                setdisable(false)
            })
        }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#22033b] to-[#540255] px-4">
            <div className="bg-white/10 text-white backdrop-blur-3xl rounded-2xl shadow-lg overflow-hidden flex w-full lg:max-w-[75%]">
                
                <div className="w-full md:w-1/2 p-3 py-10 lg:p-7 lg:py-10">
                    <h2 className="text-2xl lg:text-4xl font-bold  my-2">Welcome to Learnetic .</h2>
                    <p className="text-sm  mb-3">Please login to get the service .</p>

                    <form onSubmit={handleSignup} className="w-[99%] overflow-hidden md:w-[90%] lg:w-[90%] mx-auto ">
                        <div className="my-4">
                            <input type="text" name="name" className='w-full my-2 px-4 py-1.5 border border-gray-600 rounded-full focus:outline-none ' placeholder='Enter your name...' required />
                        </div>
                        <div className="my-4">
                            <input type="text" name="email" className='w-full my-2 px-4 py-1.5 border border-gray-600 rounded-full focus:outline-none ' placeholder='Enter your email...' required/>
                        </div>
                        <div className="my-4">
                            <input type="password" name="password" className='w-full my-2 px-4 py-1.5 border border-gray-600 rounded-full focus:outline-none ' placeholder='Enter your password...' required/>
                        </div>
                        <div className="my-2">
                            <select name="role" defaultValue="student" className='w-[140px] text-[13px] border border-slate-600 rounded-lg pr-5 px-4 py-2 outline-none shadow-xl'  >
                                <option className='text-gray-900' value="student">Student</option>
                                <option className='text-gray-900' value="teacher">Teacher</option>
                            </select>
                        </div>
                        <input type="submit" value="Sign-up"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
                    </form>
                    <div className="mx-auto my-3.5 text-center">Already have account <Link href="/login" className='text-blue-400 font-semibold'>Login </Link>?</div>

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