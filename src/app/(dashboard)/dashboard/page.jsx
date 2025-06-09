"use client"
import StuCourseCard from "@/components/Dashboard/StuCourseCard";
import StudentContent from "@/components/Dashboard/StudentContent";
import StudentDashCard from "@/components/Dashboard/StudentDashCard";
import TeacherBarChart from "@/components/Dashboard/TeacherBarChart";
import TeacherCourseCard from "@/components/Dashboard/TeacherCourseCard";
import TeacherDashCard from "@/components/Dashboard/TeacherDashCard";
import useFirebase from "@/components/Firebase/useFirebase";
import { useGetCreatorCourseQuery, useGetEnrolledCourseQuery, useGetLast3CourseProgressQuery, useGetProgressDataQuery, useGetStudentSpendQuery, useGetTopEnrolledQuery, useGetTotalEarningQuery } from "@/components/redux/course/courseApi";
import { logUser } from "@/components/redux/user/userSlice";
import StudentRoute from "@/components/routes/StudentRoute";
import { BadgeCheck, BookOpenCheck, DollarSign, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiStudentFill } from "react-icons/pi";

const page = () => {
    const {user} = useFirebase()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.userReducer?.userInfo)
    const {data :courses, isLoading} = useGetEnrolledCourseQuery(user)
    const {data : studentSpend} = useGetStudentSpendQuery(user)
    const {data : topThreeEnrolled ,isLoading : topLoading } = useGetTopEnrolledQuery(user)
    const {data : totalEarning ,isLoading : earningLoading } = useGetTotalEarningQuery(user)
    // const progressData = {userId : currentUser?._id, courseId : }
    // const {data} = useGetProgressDataQuery()
    const {data : lastThreeProgress} = useGetLast3CourseProgressQuery(user)
    
    const {data : creatorCourses} = useGetCreatorCourseQuery(currentUser?._id)
    console.log(creatorCourses)
    useEffect(()=>{
        if(user){
            dispatch(logUser(user))
        }
    },[user])

    if(isLoading){
        return <div className="flex justify-center items-center w-full min-h-screen">Loading....</div>
    }

    const stats = [
        {
            label: 'Enrolled Courses',
            value: courses?.length,
            icon: <BookOpenCheck className="w-6 h-6 text-indigo-500" />,
        },
        {
            label: 'Completed Courses',
            value: 0,
            icon: <GraduationCap className="w-6 h-6 text-green-500" />,
        },
        {
            label: 'Total Spend',
            value: studentSpend?.totalSpend,
            icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
        },
        {
            label: 'Certificates',
            value: 0,
            icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
        },
    ];

    if(currentUser?.role === 'student'){
        return (
            <StudentRoute role='student'>
                <div className="p-6">
                    <h1 className="text-2xl lg:text-5xl flex gap-4 justify-start items-center font-poppins font-bold mb-6"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student </span> Dashboard <PiStudentFill className="ml-2" /></h1>

                        <StudentContent stats={stats} />

                        <div className="my-8 mb-14">
                            <h2 className="text-xl font-bold mb-4">My Courses</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {
                                    lastThreeProgress?.map(((progressCourse,idx)=>
                                        <StuCourseCard key={idx} title={progressCourse?.courseName} id={progressCourse?.courseId} progress={progressCourse?.progressPercent} />
                                    ))    
                                }
                            </div>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Upcoming Live Classes</h2>
                        <ul className="space-y-2">
                            <li className="bg-white p-4 rounded-lg shadow">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">React Q&A Session</span>
                                <span className="text-sm text-gray-500">15 May, 8:00 PM</span>
                            </div>
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">MongoDB Live Practice</span>
                                <span className="text-sm text-gray-500">18 May, 6:00 PM</span>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </StudentRoute>
        );
    }

    if(currentUser?.role === 'teacher'){
        return (
            <StudentRoute role="teacher">
                <div className="min-h-screen p-4 bg-gray-100 ">
                    <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <TeacherDashCard title="Total Courses" value="3" />
                        <TeacherDashCard title="Total Enrolled Students" value={totalEarning?.totalEnrollments || 0} />
                        <TeacherDashCard title="Pending Assignments" value="8" />
                        <TeacherDashCard title="Total Earnings" value={totalEarning?.totalEarning || 0} />
                    </div>

                    <div className="mb-6">
                        <TeacherBarChart/>
                    </div>

                    <div className="mb-8 w-[98%] mx-auto">
                        
                        <div className="flex gap-5 flex-col lg:flex-row">
                            <div className="shadow px-3 py-3 w-full ">
                                <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
                                {
                                creatorCourses?.length ? 
                                    creatorCourses?.map((course, idxm) => (
                                    <div key={course?._id} className="bg-white shadow-md rounded-xl border border-gray-200 mb-6 transition-all duration-300 hover:shadow-lg" >
                                        <div className="flex flex-col md:flex-row justify-between items-center px-5 py-2.5 gap-4">
                                            
                                            <div className="flex items-center gap-3 w-full md:w-auto">
                                                <h2 className="p-2 ">{idxm + 1} . </h2>
                                                <Image
                                                src={course?.image}
                                                height={60}
                                                width={80}
                                                alt="course"
                                                className="rounded-md p-0.5 border border-gray-200 object-cover shadow"
                                                />
                                                <h2 className="text-xl font-medium text-gray-800">{course?.name}</h2>
                                            </div>
                                        </div>
                                    </div> 
                                    ))
                                    :
                                    <div className="flex justify-center items-center my-5"> You don't have any course. </div>
                                }
                            </div>
                            <div className="p-3 shadow w-full">
                                <h2 className="text-2xl font-semibold mb-4">Your top 3 enrollment courses .</h2>
                                {topLoading && <div className="flex w-full">Loading...</div> }
                                {
                                topThreeEnrolled?.length ? 
                                    topThreeEnrolled?.map((course, idxm) => (
                                    <div key={idxm} className="bg-white shadow-md rounded-xl border border-gray-200 mb-6 transition-all duration-300 hover:shadow-lg" >
                                        <div className="flex flex-col md:flex-row justify-between items-center px-5 py-2.5 gap-4">
                                            
                                            <div className="flex items-center gap-3 w-full md:w-auto">
                                                <h2 className="p-2 ">{idxm + 1} . </h2>
                                                {course?.image && <Image
                                                src={course?.image }
                                                height={60}
                                                width={80}
                                                alt="course"
                                                className="rounded-md p-0.5 border border-gray-200 object-cover shadow"
                                                />}
                                                <h2 className="text-xl font-medium text-gray-800">{course?.name}</h2>
                                            </div>
                                        </div>
                                    </div> 
                                    ))
                                    :
                                    <div className="flex justify-center items-center my-5"> You don't have any course. </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </StudentRoute>
        );
    }

    if(!currentUser){
        return (
            <div className="flex justify-center p-2 items-center w-full h-screen">
                Who are you?
            </div>
        );
    }
};

export default page;