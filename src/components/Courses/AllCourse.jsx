"use client"

import Link from "next/link";
import { useGetAllCourseQuery } from "../redux/course/courseApi";
import { FaBoxOpen } from "react-icons/fa6";
import SingleCourse from "./Course";
import { Skeleton } from "antd";
import { Diamond } from "lucide-react";


const AllCourse = () => {
    const {data, isLoading} = useGetAllCourseQuery()

    if(isLoading){
      return <div className="h-[89vh] w-[80%] mx-auto flex justify-center items-start mt-14">
        <Skeleton active />
      </div>
    }

    

    return (
        <section className="py-10 lg:my-4 pb-16 bg-gray-100">
          <div className="max-w-[1500px] mx-auto px-6 lg:w-[80%]">
            <h2 className="text-3xl font-bold justify-center text-center mx-auto bg-gradient-to-r from-sky-500 via-sky-900 to-pink-600 text-transparent bg-clip-text flex gap-5 items-center  mb-2">
               {/* <Diamond className="text-fuchsia-500 text-4xl " />  */}
               <span className="lg:text-[52px]"> Explore Our Courses</span>
            </h2>
            <p className="text-gray-600 text-center mx-auto lg:w-1/2 w-3/4 mb-12">Choose from a variety of high-quality courses to enhance your skills. who are inspired and determined for career success</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.map((course) => (
                <SingleCourse key={course?._id} course={course}></SingleCourse>
              ))}
            </div>
          </div>
        </section>
    );
};

export default AllCourse;