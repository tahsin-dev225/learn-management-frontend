"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMdLogOut, IoMdPersonAdd } from "react-icons/io";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { FaCircle, FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../Firebase/useFirebase';
import { logUser } from '../redux/user/userSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useFirebase()
    const {logOut} = useFirebase()
    const dispatch = useDispatch();
    
    const isStudent = useSelector(state => state?.userReducer?.userInfo)

    useEffect(()=>{
        dispatch(logUser(user))
    },[user])

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="navbar lg:px-6  sticky  bg-sky-100/60 top-0 z-50 w-full shadow ">

            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm text-gray-200 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        navItems?.map((item,idx) =><Link key={idx} className="my-2" href={item.path}>{item?.title}</Link>)
                    }
                    {user && <Link className="mx-" href="/dashboard">Dashboard</Link>}
                </ul>
                </div>
                <Link href='/' className="mx-3">
                    <Image className="rounded" src='/img/logo.png' width={160} height={40} alt="logo" />
                </Link>
            </div>
            <div className="navbar-start justify-center hidden lg:flex">
                {
                    navItems?.map((item,idx) =><Link key={idx} className="mx-3" href={item.path}>{item?.title}</Link>)
                }
                {user && <Link className="mx-3" href="/dashboard">Dashboard</Link>}
                
            </div>
            <div className="navbar-end">
                {
                     user ?  
                     <FaRegUser className="text-3xl cursor-pointer  p-1 border mx-3 my-2 border-stone-500 rounded-full " onClick={toggleDrawer}/>
                     :
                     <Link href='/login' className="btn btn-primary mx-6 text-white btn-sm"><IoMdPersonAdd />login</Link>
                }
                {
                user &&
                <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
                >
                    <div className="flex justify-between flex-col h-full items-center">
                        <div className="w-full justify-start my-2.5 mx-1">
                            <button onClick={toggleDrawer} className="text-3xl font-bold cursor-pointer text-red-400 p-1.5">x </button>
                            <div className="">
                                <Image className="my-6 mx-auto rounded-full" src={`/img/userDef.png`} width={80} height={80} alt="user" />
                                <p className="text-center text-slate-800">Name : {isStudent?.name}</p>
                            </div>
                        </div>
                        
                        <button onClick={()=> logOut()} className="btn w-[85%] mx-auto btn-primary my-8 text-white btn-sm"><IoMdLogOut />Log out</button>
                    </div>
                </Drawer>
                }
            </div>
            
        </div>
    );
};

const navItems = [
    {
        title : "Home",
        path : "/",
    },
    {
        title : "Courses",
        path : "/courses",
    },
]

export default Navbar;