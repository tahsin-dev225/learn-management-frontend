"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAddToPhotos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useFirebase from "../Firebase/useFirebase";
import { logUser } from "../redux/user/userSlice";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const isOpenStyle = "px-3 rounded-lg bg-black/25 text-gray-100 my-3 py-1 pr-2 flex gap-2 items-center transition-all delay-200 font-medium hover:text-[17px]  font-mono"
  const noOpen = "my-1 px-2 font-semibold text-2xl font-mono"

  const pathName = usePathname();
  const {user} = useFirebase()
  const dispatch = useDispatch();
  const isStudent = useSelector(state => state?.userReducer?.userInfo)

  console.log(pathName)

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

  return (
    <div className={`lg:min-h-screen fixed bottom-0 w-full overflow-y-hidden lg:sticky bg-[#1a1d4f]  text-white ${isOpen ? "lg:max-w-[250px] lg:min-w-60 " : "lg:w-min px-1.5"} transition-all duration-700  flex flex-col`}>
      {/* <button
        className="mb-2 mt-2 justify-end p-1 text-xl focus:outline-none hidden md:flex"
        onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
      </button> */}
      <div className="px-3 hidden lg:block border-b border-b-fuchsia-400/30 bg-[#3740563b] backdrop-blur-2xl py-4">
        <Image src="/img/logo.png" height={50} width={150} alt="logo" />
      </div>
      {
        isOpen 
      }
      <div className="px-2.5 py-2.5 flex lg:flex-col flex-row justify-between">
        <Link href="/dashboard" className={ `${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard" ? "bg-sky-600" : ""}`}><LuLayoutDashboard/><span className={isOpen ? '': 'hidden'}>Dashboard</span> </Link>

        {isStudent?.role === 'teacher' && <Link href="/dashboard/addCourse" className={`${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard/addCourse" ? "bg-sky-600" : ""}` }><MdAddToPhotos/><span className={isOpen ? '': 'hidden'}>Add Course</span> </Link>}
        {isStudent?.role === 'student' && <Link href="/dashboard/enroledCourse" className={`${isOpen ? isOpenStyle : noOpen} ${pathName === "/dashboard/enroledCourse" ? "bg-sky-600" : ""}` }><FaBoxOpen/><span className={isOpen ? '': 'hidden'}>Enrolled Course</span> </Link>}

        <div className="divider-vertical hidden lg:block w-[97%] h-[1px] bg-gray-400 my-6"></div>

        <Link href="/" className={ isOpen ?isOpenStyle : noOpen }><FaHome/><span className={isOpen ? '': 'hidden'}>Home</span> </Link>
      </div>
    </div>
  );
}