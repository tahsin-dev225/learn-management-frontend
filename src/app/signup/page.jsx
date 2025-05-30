"use client"
import useFirebase from '@/components/Firebase/useFirebase';
import { addUser } from '@/components/redux/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { GiTeacher } from "react-icons/gi";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";


const page = () => {
    const router = useRouter();
    const [disable, setdisable] = useState(false)
    const [isRole, setIsRole] = useState('student')
    const {createUser} = useFirebase();
    const dispatch = useDispatch();
    

    const normalButton = "w-full cursor-pointer py-2 rounded-xl text-white mt-10  bg-gradient-to-r from-blue-500 to-indigo-700 hover:opacity-90 transition"
    const disableButton = 'w-full py-2 rounded-xl text-white mt-5  bg-gray-400 hover:opacity-90 transition'

    const handleSignup = (e)=>{
            setdisable(true)
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            const name = e.target.name.value;
            const role = isRole;
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

    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className=" w-full hidden lg:flex z-20 justify-center relative ">
            <div className="lg:w-[65%] md:w-[55%] w-[92%] h-full">
                <h1 className="lg:text-5xl text-2xl font-semibold text-white ">Welcome .</h1>
                <p className="text-xl my-5 text-white">To learnetic best online course platform.</p>
                <p className="text-gray-300 p-1 rounded bg-gradient-to-l ">Login to continue the growing of your skill,experience , value, and make your mind stronger .Here we have the countries best and famous teachers and we have a great name .</p>
            </div>
        </div>
        <div className="w-full z-30 text-sky-100 lg:text-gray-800 p-3 py-10 lg:p-10 lg:py-14">
            <form onSubmit={handleSignup} className="md:w-[70%] w-[95%] mx-auto">
                <h1 className="text-3xl text-sky-200 lg:text-blue-600 font-sans font-bold mt-6">Sign-Up.</h1>
                <p className="mt-2 mb-6 text-blue-200 lg:text-gray-600">Sign-Up and grow the progress .</p>

                <input type="text" name="name" className="w-full my-4 px-4 py-1.5 border border-sky-200 lg:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder='Enter your name...' required />
            
                <input type="text" name="email" className="w-full my-4 px-4 py-1.5 border border-sky-200 lg:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder='Enter your email...' required/>
            
            
                <input type="password" name="password" className="w-full my-4 px-4 py-1.5 border border-sky-200 lg:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder='Enter your password...' required/>
                
                <div className="flex justify-center gap-5 md:gap-8">
                    <div onClick={()=>setIsRole('student')} className={`flex px-7 py-2 cursor-pointer rounded-lg border items-center gap-2.5 justify-center border-b-indigo-300 ${isRole === 'student' ? "bg-sky-500/90 text-white" : ""} `}>
                        <FaPersonWalkingArrowRight className='text-xl' /> Student
                    </div>
                    <div onClick={()=> setIsRole('teacher')} className={`flex px-7 py-2 cursor-pointer rounded-lg border items-center gap-2.5 justify-center border-b-indigo-300 ${isRole === 'teacher' ? "bg-sky-500/90 text-white" : ""} `}>
                        <GiTeacher className='text-xl'/> Teacher
                    </div>
                </div>
                <input type="submit" value="Sign-up"  disabled={disable} className={`${disable ? disableButton : normalButton}  `}  />
            </form>
        </div>
        <div className="md:size-[890px] size-[690px]  overflow-hidden absolute -top-[12%] -left-[39%] sm:-left-[22%] md:-top-[32%] md:-left-[14%]  rounded-full bg-gradient-to-br border-sky-800 from-[#3b86ea] to-[#120379]"></div>
        <div className="md:size-[320px] size-[240px] hidden sm:block overflow-hidden absolute bottom-[5%] right-[5%] md:bottom-[15%] md:left-[33%] blur-[1px] rounded-full bg-gradient-to-br border-sky-800 from-[#08107e] to-[#4574e0ec]"></div>
        <div className="md:size-[290px] size-[220px]  overflow-hidden absolute -bottom-[7%] -left-[9%] md:-left-[4%]  rounded-full bg-gradient-to-br border-sky-800 from-[#3b86ea] to-[#120379]"></div>
    </div>

    );
};

export default page;