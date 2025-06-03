"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome, FaRegUser } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAddToPhotos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useFirebase from "../Firebase/useFirebase";
import { logUser } from "../redux/user/userSlice";
import Image from "next/image";
import { GrVmMaintenance } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { IoMdLogOut, IoMdPersonAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const isOpenStyle = "px-3 rounded-lg bg-black/25 text-gray-100 curson-pointer my-3 py-1 pr-2 flex gap-2 items-center transition-all delay-200 font-medium hover:text-[17px]  font-mono"
  const noOpen = "my-1 px-2 font-semibold text-2xl font-mono"

  const pathName = usePathname();
  const {user,logOut} = useFirebase()
  const dispatch = useDispatch();
  const isStudent = useSelector(state => state?.userReducer?.userInfo)

  useEffect(() => {
    if(user){
      dispatch(logUser(user))
    }
    
    const handleResize = () => {
      if (window.innerWidth < 790) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [user]);

  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState)
  }

  return (
    <div className={`lg:min-h-screen z-30 fixed bottom-0 w-full overflow-y-hidden lg:sticky bg-[#1a1d4f]  text-white ${isOpen ? "lg:max-w-[250px] lg:min-w-60 " : "lg:w-min px-1.5"} transition-all duration-700 justify-between flex flex-col`}>
      {/* <button
        className="mb-2 mt-2 justify-end p-1 text-xl focus:outline-none hidden md:flex"
        onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
      </button> */}
      <div className="">
        <div className="px-3 hidden lg:block border-b border-b-fuchsia-400/30 bg-[#3740563b] backdrop-blur-2xl py-4">
          <Image src="/img/logo.png" height={50} width={150} alt="logo" />
        </div>
        {
          isOpen 
        }
        <div className="px-2.5 py-2.5 flex lg:flex-col flex-row justify-evenly">
          <Link href="/dashboard" className={ `${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard" ? "bg-sky-600" : ""}`}><LuLayoutDashboard/><span className={isOpen ? '': 'hidden'}>Dashboard</span> </Link>

          {isStudent?.role === 'teacher' && <Link href="/dashboard/addCourse" className={`${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard/addCourse" ? "bg-sky-600" : ""}` }><MdAddToPhotos/><span className={isOpen ? '': 'hidden'}>Add Course</span> </Link>}
          {isStudent?.role === 'teacher' && <Link href="/dashboard/manageCourse" className={`${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard/manageCourse" ? "bg-sky-600" : ""}` }><GrVmMaintenance/><span className={isOpen ? '': 'hidden'}>Manage Course</span> </Link>}

          {isStudent?.role === 'student' && <Link href="/dashboard/enroledCourse" className={`${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard/enroledCourse" ? "bg-sky-600" : ""}` }><FaBoxOpen/><span className={isOpen ? '': 'hidden'}>Enrolled Course</span> </Link>}

          <div className="divider-vertical hidden lg:block w-[97%] h-[1px] bg-gray-400 my-6"></div>

          <Link href="/" className={ isOpen ? isOpenStyle : noOpen }><FaHome/><span className={isOpen ? '': 'hidden'}>Home</span> </Link>
          {
            user ?  
            <div onClick={toggleDrawer} className={ isOpen ? isOpenStyle : noOpen }>
              <CgProfile/> <span className={isOpen ? 'cursor-pointer': 'hidden'}>profile</span>
            </div>
            :
            <Link href='/login' className={ isOpen ? isOpenStyle : noOpen }><IoMdPersonAdd />login</Link>
          }
        </div>
        
      </div>
        {
          user &&
          <Drawer
                open={isOpenDrawer}
                onClose={toggleDrawer}
                direction='right'
                className=' h-[45vh]! rounded bg-[#28205b]!'
                >
                    <div className="flex justify-between flex-col h-full items-center">
                        <div className="w-full justify-start my-2.5 mx-1">
                            <button onClick={toggleDrawer} className="text-3xl font-bold cursor-pointer text-red-200 p-1.5"> <RxCross2 /></button>
                            <div className="">
                                <Image className="my-6 mx-auto rounded-full" src={`/img/userDef.png`} width={80} height={80} alt="user" />
                                <p className="text-center text-slate-100">Name : {isStudent?.name}</p>
                            </div>
                        </div>
                        
                        <button onClick={()=> logOut()} className="btn w-[85%] mx-auto btn-primary my-7 text-white btn-sm"><IoMdLogOut />Log out</button>
                    </div>
                </Drawer>
          }
    </div>
  );
}