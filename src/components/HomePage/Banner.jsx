"use client"
import { BookOpen, ChevronRight, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
  
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

      <section className="w-full flex justify-center md:min-h-screen max-w-[1600px] mx-auto lg:min-h-[95vh] ">
          <div className="flex flex-col-reverse py-3 lg:py-6 px-1.5 lg:w-[90%] mx-auto md:flex-row items-center gap-4 lg:gap-12">
            {/* Text Content */}
            <div className="flex flex-col text-center lg:text-left justify-center space-y-6 max-w-2xl">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
                  Learn Without Limits
                </h1>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-[#1a2349] text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                  Start, switch, or advance your career with thousands of courses from expert teachers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/courses"
                  className="flex items-center mx-auto lg:mx-0 gap-2 w-max text-white text-[15px] px-4 py-2 lg:px-5 lg:py-2.5 rounded bg-black/90"
                >
                  Explore Courses <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-4 text-sm flex-wrap">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>10K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>500+ Courses</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[500px] xl:max-w-[550px] mx-auto flex justify-center items-center">
              <div className="w-full aspect-square md:aspect-[5/4] relative">
                <Image
                  src="/img/vecbn.png"
                  alt="Students learning online"
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
      </section>
    );
};

export default Banner;