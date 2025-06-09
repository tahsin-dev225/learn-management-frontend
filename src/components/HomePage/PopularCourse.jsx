"use client"
import Link from 'next/link';
import { useGetAllCourseQuery, useGetPopularEnrolledQuery } from '../redux/course/courseApi';
import Image from 'next/image';
import { BookOpen, ChevronRight } from 'lucide-react';
import SingleCourse from '../Courses/Course';
import { Skeleton } from 'antd';

const PopularCourse = () => {
    const {data : topEnrolled,isLoading} = useGetPopularEnrolledQuery()
    const forLoading =  ["one","two","three"]
    console.log(topEnrolled)

    return (
        <section className="py-8 my-6 ">
            <div className="2xl:max-w-[1500px] lg:w-[80%] mx-auto px-6 text-">
            <h2 className="md:text-5xl text-3xl font-poppins mx-auto text-center font-bold text-gray-800 mb-4">Most Popular<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Courses</span></h2>
            <p className="text-gray-600 text-[15px] text-center font-lato mb-16 mx-auto md:w-[60%] ">Choose from a variety of high-quality courses to enhance your skills.Choose from a variety of high-quality courses to enhance your skills.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {isLoading && forLoading?.map((course,idx) =>  <Skeleton key={idx} className='h-64' active />
                )}
                {topEnrolled?.map((course,idx) =>  <SingleCourse key={idx} course={course} ></SingleCourse>
                )}
            </div>
            <div className="flex justify-center mt-14">
                <Link href='/courses' className="bg-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-700 text-red-50 px-5 py-3 text font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
                    View All Course <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
            </div>
        </section>
    );
};

export default PopularCourse;