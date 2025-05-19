"use client"
import StuCourseCard from "@/components/Dashboard/StuCourseCard";
import StudentDashCard from "@/components/Dashboard/StudentDashCard";
import TeacherBarChart from "@/components/Dashboard/TeacherBarChart";
import TeacherCourseCard from "@/components/Dashboard/TeacherCourseCard";
import TeacherDashCard from "@/components/Dashboard/TeacherDashCard";
import useFirebase from "@/components/Firebase/useFirebase";
import { useGetEnrolledCourseQuery } from "@/components/redux/course/courseApi";
import { logUser } from "@/components/redux/user/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const {user} = useFirebase()
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.userReducer?.userInfo)
    const {data :courses, isLoading} = useGetEnrolledCourseQuery(user)
    console.log(courses)

    useEffect(()=>{
        if(user){
            dispatch(logUser(user))
        }
    },[user])

    if(isLoading){
        return <div className="flex justify-center items-center w-full min-h-screen">Loading....</div>
    }

    if(currentUser?.role === 'student'){
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <StudentDashCard title="Enrolled Courses" value={courses?.length} />
                    <StudentDashCard title="Completed Courses" value="2" />
                    <StudentDashCard title="Assignments Due" value="3" />
                    <StudentDashCard title="Certificates" value="2" />
                    </div>

                    <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">My Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <StuCourseCard title="JavaScript for Beginners" progress={75} />
                        <StuCourseCard title="React Crash Course" progress={40} />
                        <StuCourseCard title="MongoDB Essentials" progress={20} />
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
        );
    }

    if(currentUser?.role === 'teacher'){
        return (
            <div className="min-h-screen p-4 bg-gray-100 ">
                <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <TeacherDashCard title="Total Courses" value="3" />
                    <TeacherDashCard title="Total Enrolled Students" value="145" />
                    <TeacherDashCard title="Pending Assignments" value="8" />
                    <TeacherDashCard title="Total Earnings" value="$1,250" />
                </div>

                <div className="mb-6">
                    <TeacherBarChart/>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">My Courses</h2>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Upcoming Live Classes</h2>
                    <ul className="space-y-2">
                    <li className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center">
                        <span className="font-medium">React: Custom Hooks</span>
                        <span className="text-sm text-gray-500">16 May, 7:00 PM</span>
                        </div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center">
                        <span className="font-medium">MongoDB Aggregation</span>
                        <span className="text-sm text-gray-500">19 May, 5:30 PM</span>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
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