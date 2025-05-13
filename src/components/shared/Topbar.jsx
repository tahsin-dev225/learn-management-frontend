"use client"
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import useFirebase from "../Firebase/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logUser } from "../redux/user/userSlice";
import Link from "next/link";


const Topbar = () => {
    const {user} = useFirebase()
    const dispatch = useDispatch();
    const isStudent = useSelector(state => state?.userReducer?.userInfo)

    useEffect(() => {
    if(user){
        dispatch(logUser(user))
    }
    }, [user]);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#124249] text-white max-h-[200px] px-6 md:px-20 py-3">
            <div className="flex items-center gap-6">
                <div className="rounded-full border-slate-400 size-12 lg:size-16 flex justify-center items-center p- border-[1px] ">
                    {
                        isStudent?.image ?<Image src="/img/coursPerson.png" alt="Profile" width={50} height={30} className="object-cover" />
                          :
                        <Image src="/img/userDef.png"
                        alt="Profile" width={50} height={30} className="size-12 lg:h-full  lg:w-full rounded-full"
                        />}
                </div>
                <div>
                    <h2 className="text-xl font-semibold">{isStudent?.name}</h2>
                    <p className="text-sm text-gray-300">{isStudent?.email}</p>
                    <div className="items-center gap-4 mt-2 hidden text-lg">
                        <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
                        <FaYoutube className="hover:text-red-500 cursor-pointer" />
                        <FaFacebook className="hover:text-blue-400 cursor-pointer" />
                    </div>
                </div>
            </div>
            {/* {
                isStudent?.role === "student" && 
                <div className={``}>
                    <h1 className="text-lg font-medium text-indigo-300 "></h1>
                </div>
            } */}
            <div className="hidden lg:flex mt-6 md:mt-0">
                {
                   isStudent?.role === "teacher" ? <button className="bg-blue-500 hover:bg-blue-600 text-white px-3.5 md:px-6 py-1.5 md:py-2 rounded-lg md:font-normal shadow">
                    ADD A COURSE
                </button> : <Link className="bg-blue-500 hover:bg-blue-600 text-white px-3.5 md:px-6 py-1.5 md:py-2 rounded-lg md:font-normal shadow" href={'/courses'}>Enrolle course</Link>
                }
            </div>
        </div>
    );
};

export default Topbar;