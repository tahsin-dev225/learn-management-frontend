"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdLogOut, IoMdPersonAdd } from "react-icons/io";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { FaCircle, FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import useFirebase from '../Firebase/useFirebase';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useFirebase()
    console.log('usreseere',user)
    const {logOut} = useFirebase()


    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="navbar lg:px-6  sticky  bg-sky-100/20 top-0 z-50 w-full shadow ">

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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        navItems?.map((item,idx) =><Link key={idx} className="my-2" href={item.path}>{item?.title}</Link>)
                    }
                    <Link href="/dashboard">Dashboard</Link>
                </ul>
                </div>
                <Link href='/' className="mx-3">
                    <h1 className="text-2xl">Learn.</h1>
                    {/* <Image className="rounded" src='/img/up-logo.jpg' width={80} height={40} alt="logo" /> */}
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
                            <p onClick={toggleDrawer} className="text-3xl font-bold cursor-pointer text-red-400 p-1.5">x </p
                        ></div>
                        <div className="">
                            <Image className="my-6 rounded-full" src={`/img/userDef.png`} width={80} height={80} alt="user" />
                            <p className="text-center text-slate-800">Name : {user?.name}</p>
                        </div>
                        <button onClick={()=> logOut()} className="btn btn-primary my-8 text-white btn-sm"><IoMdLogOut />Log out</button>
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