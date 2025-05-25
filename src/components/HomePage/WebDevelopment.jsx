"use client"
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SingleCourse from '../Courses/Course';
import { useGetCourseCategoryQuery } from '../redux/course/courseApi';

const WebDevelopment = () => {
    const {data} = useGetCourseCategoryQuery('Marketing')
    console.log(data)

    return (
        <section className="py-12 bg-gray-200">
            <div className="2xl:max-w-[1500px] lg:w-[90%] mx-auto px-6 text-">
            <h2 className="text-5xl mx-auto text-center font-bold text-gray-800 mb-4">Explore Marketing Courses</h2>
            <p className="text-gray-600 text-center mb-10 mx-auto ">Choose from a variety of high-quality courses to enhance your skills.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {data?.slice(0,3)?.map((course) =>  <SingleCourse key={course?._id} course={course} ></SingleCourse>
                )}
            </div>
            <div className="flex justify-center mt-8">
                <Link href='/courses' size="lg" className="gap-3 text-gray-900 font-semibold flex  items-center rounded bg-black/5 broder border-b-blue-300 px-5 py-2.5">
                    View All Course <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
            </div>
        </section>
    );
};

export default WebDevelopment;