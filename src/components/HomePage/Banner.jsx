"use client"
import { BookOpen, ChevronRight, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdNetworkWifi } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { FcBullish } from "react-icons/fc";
import { ImBubbles2 } from "react-icons/im";
import CountUp from 'react-countup';
import { useGetAllCourseQuery, useGetAllStudentQuery } from '../redux/course/courseApi';

const Banner = () => {
    const {data : allStudnet} = useGetAllStudentQuery()
    const {data : allCourse} = useGetAllCourseQuery()

const stats = [
    {
      icon: Users,
      value: 5,
      label: "Students",
    },
    {
      icon: BookOpen,
      value: 6,
      label: "Teachers",
    },
    {
      icon: BookOpen,
      value: 6,
      label: "Courses",
    },
    {
      icon: Star,
      value: 4.1,
      label: "ratings",
    },
  ]
    return (
      // <section className="w-full max-w-[1600px] mx-auto min-h-[95vh]  py-10 md:py-24 lg:py-32 ">
      //   <div className=" xl:w-[90%] mx-auto px-4 md:px-6">
      //     <div className="flex flex-col lg:flex-row gap-2 justify-between lg:gap-12  ">
      //       <div className="flex flex-col mx-auto lg:mx-0  justify-center  space-y-4">
      //         <div className="space-y-2">
      //           <h1 className="text-2xl font-bold  tracking-tighter sm:text-5xl xl:text-6xl/none">
      //             Learn Without Limits
      //           </h1>
      //           <p className="max-w-[600px] text-[13px] text-[#1a2349] text-muted-foreground md:text-xl">
      //             Start, switch, or advance your career with thousands of courses from expert teachers.
      //           </p>
      //         </div>
      //         <div className="flex flex-col gap-2 min-[400px]:flex-row">
      //           <Link href='/courses'  className="gap-3 text-white flex text-[15px] px-3 py-1 w-max items-center rounded bg-black/90 lg:px-5 lg:py-2.5">
      //             Explore Courses <ChevronRight className="h-4 w-4" />
      //           </Link>
      //         </div>
      //         <div className="flex items-center gap-4 text-sm">
      //           <div className="flex items-center gap-1">
      //             <Users className="h-4 w-4" />
      //             <span>10K+ Students</span>
      //           </div>
      //           <div className="flex items-center gap-1">
      //             <BookOpen className="h-4 w-4" />
      //             <span>500+ Courses</span>
      //           </div>
      //           <div className="flex items-center gap-1">
      //             <Star className="h-4 w-4 text-yellow-500" />
      //             <span>4.8/5 Rating</span>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="mx-auto lg:ml-auto flex items-center justify-center">
      //         <Image
      //           src="/img/vecbn.png"
      //           alt="Students learning online"
      //           width={500}
      //           height={500}
      //           className="rounded-lg object-cover"
      //           priority
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </section>

      <section className="w-full overflow-hidden overflow- relative flex bg-cover bg-center bg-[url('/img/newbnr.jpg')]  justify-center md:min-h-screen  mx-auto lg:min-h-[95vh] ">
          <div className="flex max-w-[1600px] flex-col-reverse z-40 py-3 lg:py-6 px-5 lg:px-0 lg:w-[87%] mx-auto md:flex-row items-center gap-4 lg:gap-12">
           

            <div className="flex flex-col justify-center  w-full">
              <div className="">
                <h1 className="text-5xl lg:text-7xl font-poppins font-bold mb-3 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learn</span> Without Limits
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 mb-5 leading-relaxed max-w-xl">
                  Start, switch, or advance your career with thousands of courses from expert teachers.
                </p>

                <button className="bg-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-700 text-red-200 px-5 py-3 text font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
                >
                  Explore Courses
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-indigo-600 hover:-translate-y-2 transition-transform duration-300 text-white p-6 rounded-xl shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <stat.icon className=" text-indigo-200" />
                        <div>
                          <div className="text-2xl font-bold"><CountUp end={stat.value} duration={3} />+</div>
                          <div className="text-indigo-200 text-sm font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full relative z-30">
              <Image src="/img/bnrn.png" alt="Students learning online" height={700} width={500} className="rounded-lg z-40 object-cover" />
              
            </div>
          </div>
          <div className="size-[250px] overflow-hidden absolute top-[11%] right-[14%] -z-[0] rounded-full bg-gradient-to-b border-sky-800 from-sky-300/20 to-indigo-400/80"></div>
          <div className="size-[50px] overflow-hidden absolute top-[20%] left-[52%] -z-[0] rounded-full bg-gradient-to-b border-sky-800 from-sky-300/20 to-indigo-400/80"></div>
          <div className="size-[30px] overflow-hidden absolute top-[46%] left-[47%] -z-[0] rounded-full bg-gradient-to-b border-sky-800 from-sky-300/20 to-indigo-400/80"></div>
          <div className="size-[50px] overflow-hidden absolute top-[84%] right-[34%] -z-[0] rounded-full bg-gradient-to-b border-sky-800 from-sky-300/20 to-indigo-400/80"></div>

          <div className="size-[550px] overflow-hidden absolute bottom-[3%] -right-[2%] -z-[0] rounded-full blur-[290px] bg-gradient-to-b  from-sky-300/20 to-indigo-400/80"></div>
      </section>
    );
};

export default Banner;