"use client"
import Link from 'next/link';
import { useGetAllCourseQuery } from '../redux/course/courseApi';
import Image from 'next/image';
import { BookOpen, ChevronRight } from 'lucide-react';
import SingleCourse from '../Courses/Course';
import { Skeleton } from 'antd';

// 6811bdddad86b22adeb3cf54

const CourseSection = () => {
    const {data ,isLoading} = useGetAllCourseQuery()

    const forLoading =  ["one","two","three"]
    
    
      return (
        <section className="py-8 my-10 mt-16 ">
          <div className="2xl:max-w-[1500px] lg:w-[80%] mx-auto px-6 text-">
            <h2 className="text-3xl md:text-5xl font-serif mx-auto text-center font-bold text-gray-800 mb-4">Explore Our<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Courses</span></h2>
            <p className="text-gray-600 text-sm md:text-base text-center font-serif mb-16 mx-auto md:w-[60%] ">Choose from a variety of high-quality courses to enhance your skills.Choose from a variety of high-quality courses to enhance your skills.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {isLoading && forLoading?.map((course,idx) =>  <Skeleton key={idx} active />
              )}
              {data?.slice(0,3)?.map((course) =>  <SingleCourse key={course?._id} course={course} ></SingleCourse>
              )}
            </div>
            <div className="flex justify-center mt-14">
                <Link href='/courses' className="bg-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-700 text-red-50 px-5 py-3 text font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
                  View All Course <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
          </div>
        </section>
      )
};

export default CourseSection;