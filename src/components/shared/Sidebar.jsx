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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const isOpenStyle = "px-2 rounded bg-indigo-800 my-2 py-1 pr-2 flex gap-2 items-center transition-all delay-200 font-medium hover:text-[17px]  font-mono"
  const noOpen = "my-2  font-semibold text-2xl font-mono"

  const pathName = usePathname();
  const {user} = useFirebase()
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

  return (
    <div className={`min-h-screen overflow-y-hidden bg-indigo-950  text-white ${isOpen ? "max-w-[300px] min-w-56 " : "w-min px-1.5"} transition-all duration-700 px-2 py5 flex flex-col`}>
      <button
        className="mb-2 mt-2 justify-end p-1 text-xl focus:outline-none hidden md:flex"
        onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
      </button>
      {
        isOpen 
      }
      <Link href="/dashboard" className={ isOpen ? isOpenStyle : noOpen}><LuLayoutDashboard/><span className={isOpen ? '': 'hidden'}>Dashboard</span> </Link>

      {isStudent?.role === 'teacher' && <Link href="/dashboard/addCourse" className={isOpen ? isOpenStyle : noOpen }><MdAddToPhotos/><span className={isOpen ? '': 'hidden'}>Add Course</span> </Link>}
      {isStudent?.role === 'student' && <Link href="/dashboard/enroledCourse" className={isOpen ? isOpenStyle : noOpen }><FaBoxOpen/><span className={isOpen ? '': 'hidden'}>Enrolled Course</span> </Link>}

      <div className="divider-vertical w-[97%] h-[1px] bg-gray-400 my-6"></div>

      <Link href="/" className={ isOpen ?isOpenStyle : noOpen }><FaHome/><span className={isOpen ? '': 'hidden'}>Home</span> </Link>
    </div>
  );
}