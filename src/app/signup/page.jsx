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

    const normalButton = 'w-full text-white my-6 bg-gradient-to-tr from-purple-950  to-indigo-950 cursor-pointer  rounded-full py-2 shadow-xl'
    const disableButton = 'w-full text-white my-6 bg-slate-400 cursor-pointer border rounded-full py-2 shadow-xl'

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
                router.push('/')
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
        <div className="w-full overflow-hidden bg-[#241a1a] text-[#e1ded3] relative h-screen mx-auto flex flex-col justify-center ">
                <h1 className="lg:text-3xl text-xl font-bold lg:font-medium  mx-auto text-center">Sing-up as Student/Teacher.</h1>
                <div className="w-full overflow-hidden lg:w-[60%] mx-auto z-10">
                    <div className="p-4 w-full px-2 md:px-8">
                        <form onSubmit={handleSignup} className="w-[99%] overflow-hidden md:w-[70%] lg:w-[75%] mx-auto ">
                            <div className="my-4">
                                <p className="my-1 text-[15px] mx-2 text-slate-600"> Name </p>
                                <input type="text" name="name" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your name...' />
                            </div>
                            <div className="my-4">
                                <p className="my-1 text-[15px] mx-2 text-slate-600"> Email </p>
                                <input type="text" name="email" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your email...' />
                            </div>
                            <div className="my-4">
                                <p className="my-1 text-[15px] mx-2 text-slate-600"> Password </p>
                                <input type="password" name="password" className='w-full text-[13px] border border-slate-600 rounded-lg px-4 py-2 outline-none shadow-xl' placeholder='Enter your email...' />
                            </div>
                            <div className="my-4">
                                <p className="my-1 text-[15px] mx-2 text-slate-600"> Role </p>
                                <select name="role" className='w-[140px] text-[13px] border border-slate-600 rounded-lg pr-5 px-4 py-2 outline-none shadow-xl'  >
                                    <option className='text-gray-900' selected value="student">Student</option>
                                    <option className='text-gray-900' value="teacher">Teacher</option>
                                </select>
                            </div>
                            <input type="submit" value="Login"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
                        </form>
                        <div className="mx-auto my-3.5 text-center">Don't have account <Link href="/login" className='text-blue-400 font-semibold'>Login </Link>?</div>
                    </div>
                </div>
                <div className="opacity-75 absolute size-16 lg:size-36 bg-blue-900 rounded-4xl blur-3xl lg:top-[50%] drop-shadow-lg -z-0 left-[20%] lg:left-[9%]"></div>
                <div className="opacity-35 absolute size-24 lg:size-60 bg-blue-900 rounded-4xl blur-3xl lg:top-[20%] drop-shadow-lg -z-0 left-[20%] lg:left-[70%]"></div>
                <div className="opacity-45 absolute size-16 lg:size-36 bg-blue-900 rounded-4xl blur-3xl lg:top-[80%] drop-shadow-lg -z-0 right-[20%] lg:right-[9%]"></div>
        </div>
    );
};

export default page;