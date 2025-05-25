"use client"
import useFirebase from "@/components/Firebase/useFirebase";
import { useGetCourseLessonsQuery, useGetEnrolledCourseQuery } from "@/components/redux/course/courseApi";
import StudentRoute from "@/components/routes/StudentRoute";
import { ArrowRight, BarChart, BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {  Progress } from "antd"

const page = () => {
    const {user} = useFirebase();
    const {data :courses, isLoading} = useGetEnrolledCourseQuery(user);
    // const {data : lessons} = useGetCourseLessonsQuery()


    if(isLoading){
        return <div className="flex justify-center items-center w-full min-h-screen">Loading....</div>
    }
    return (
        <StudentRoute role={"student"}>
            <div className="">
                <div className="min-h-screen bg-[#f6f6f6]">
                    <div className="container mx-auto py-10 px-4 md:px-6">
                        <header className="mb-10">
                        <h1 className="text-3xl font-bold tracking-tight mb-2">My Learning Journey</h1>
                        <p className="text-slate-500">Continue your education with these enrolled courses</p>
                        </header>

                        <div className="space-y-8 w-[95%] mx-auto">
                        { courses.length ?
                        courses?.map((course) => (
                            <div
                            key={course?._id}
                            className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                            <div className="md:flex">
                                {/* Course Image - Larger on mobile, side column on desktop */}
                                <div className="md:w-1/3 lg:w-5/12 relative">
                                    <div className="relative aspect-video md:aspect-auto md:h-full">
                                        <Image src={course?.courseId?.image} alt={course?.courseId?.name} fill sizes="350" className="object-" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 to-transparent md:bg-gradient-to-r" />
                                        <h1 className="absolute top-4 left-4 bg-indigo-700/60 px-3 py-0.5 rounded text-amber-200 hover:bg-sky-500/90">
                                            {course?.courseId?.category}
                                        </h1>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-6 md:w-2/3 lg:w-3/4 md:flex md:flex-col">
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-bold text-slate-800">{course?.courseId?.name}</h2>
                                    </div>

                                    <p className="text-slate-600 mb-4 line-clamp-2">{course?.courseId?.description}</p>

                                    {/* Progress section */}
                                    <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-slate-700">Your progress</span>
                                        <span className="text-sm font-medium text-slate-700">{course?.courseId?.progress}%</span>
                                    </div>
                                    <Progress value={course?.courseId?.progress} className="h-2" />
                                    </div>

                                    {/* Course stats */}
                                    <div className="flex flex-wrap gap-4 text-sm text-sky-500">
                                        <div className="flex items-center">
                                            <BarChart className="h-4 w-4 mr-1" />
                                            <span>
                                            {course?.courseId?.progress < 30 ? "Beginner" : course?.courseId?.progress < 70 ? "Intermediate" : "Advanced"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action button */}
                                <div className="mt-6 flex justify-end">
                                    <Link href={`/dashboard/enroledCourse/${course?.courseId?._id}`} className="flex gap-1.5 items-center text-white justify-center py-1.5 px-4 rounded-2xl bg-sky-600">
                                        {course?.courseId?.progress > 0 ? "Continue Learning" : "Start Course"}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))
                        :
                        <div className="h-full w-full flex justify-center items-center">You don't have any enrolled courses .<Link href='/courses' className="font-semibold text-sky-500"> Enrole Course?</Link></div>
                    }
                        </div>
                    </div>
                    </div>
            </div>
        </StudentRoute>
    );
};

export default page;