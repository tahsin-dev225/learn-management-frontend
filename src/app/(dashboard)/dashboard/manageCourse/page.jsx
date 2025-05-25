"use client";
import { useState } from "react";
import { Pencil, Trash2, PlusCircle, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import StudentRoute from "@/components/routes/StudentRoute";
import { useDeleteCourseMutation, useDeleteLessonMutation, useGetCourseLessonsQuery, useGetCreatorCourseQuery } from "@/components/redux/course/courseApi";
import Link from "next/link";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const page = () => {
    const [openCourseId, setOpenCourseId]  = useState(null);
    const [currentCourse,setCurrentCourse] = useState('')

    const currentUser = useSelector(state => state?.userReducer?.userInfo);
    const {data : creatorCourses} = useGetCreatorCourseQuery(currentUser?._id)
    const [deleteCourse] = useDeleteCourseMutation()
    const {data : lessons,isLoading : lessonLoading} = useGetCourseLessonsQuery(currentCourse)
    const [deleteLesson] = useDeleteLessonMutation()

    const handleDeleteCourse =  (deleteId)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    const resp = await deleteCourse(deleteId)
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                }
        });
    }
    const handleDeleteLesson =  (deleteId)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    const resp = await deleteLesson(deleteId)
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                }
        });
    }

console.log(creatorCourses)
    const toggleCourse = (id) => {
        setOpenCourseId(openCourseId === id ? null : id);
    };

    const dummyCourses = [
        {
            id: "course1",
            title: "JavaScript for Beginners",
            lessons: [
            { id: "l1", title: "Intro to JS" },
            { id: "l2", title: "Variables and Data Types" },
            ],
        },
        {
            id: "course2",
            title: "React Masterclass",
            lessons: [
            { id: "l3", title: "React Basics" },
            { id: "l4", title: "Hooks in Depth" },
            ],
        },
    ];

    return (
        <StudentRoute role={'teacher'}>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-sky-800 mb-8 text-center">📚 Manage Courses</h1>

                {
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
                        <div className="flex h-full justify-between items-center gap-2">
                            <button onClick={()=> handleDeleteCourse(course?._id)}
                                className="text-red-600 hover:text-white hover:bg-red-600 transition-all px-3 py-1 rounded-md border border-red-600"
                                title="Delete Course"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                            <Link href={`/dashboard/manageCourse/${course?._id}`}
                                className="text-green-600 flex items-center gap-2 hover:text-white hover:bg-green-600 transition-all px-3 py-1 rounded-md border border-green-600"
                                title="Add Lesson"
                            >
                                <PlusCircle className="w-5 h-5" /> <span className="hidden lg:block">Add Lesson</span>
                            </Link>
                            <div className="h-[50px] divide-accent w-0.5 mx-3.5 bg-gray-300"></div>
                            <button onClick={() => toggleCourse(course?._id)}
                                className="text-gray-600 hover:text-sky-600 h-full cursor-pointer transition ">
                                {openCourseId === course?._id ? 
                                <ChevronUp onClick={()=> setCurrentCourse(course?._id)} className="w-5 h-full" />
                                : 
                                <ChevronDown onClick={()=> setCurrentCourse(course?._id)} className="w-5 h-full" />
                                }
                            </button>
                        </div>
                    </div>

                    {openCourseId === course._id && (
                        <div className="px-6 pb-4 space-y-4">
                            <h1 className="text-lg font-semibold ml-10 mt-4">Lessons...</h1>
                            {lessonLoading && <div className="flex justify-center w-full">Loading....</div> }
                        {lessons?.map((lesson, idxl) => (
                            <div
                            key={lesson?._id}
                            className="flex justify-between w-[80%] items-center mx-auto bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
                            >
                            <div className="flex items-center gap-3">
                                <span className="font-medium text-gray-700">{idxl + 1}.</span>
                                <span className="text-gray-800">{lesson?.title}</span>
                            </div>

                            <div className="flex gap-2">
                                <Link href={`/dashboard/manageCourse/updateLesson/${lesson?._id}`} className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md text-sm hover:bg-blue-600 hover:text-white transition">
                                    <Pencil className="w-4 h-4" /> Update
                                </Link>
                                <button onClick={()=> handleDeleteLesson(lesson?._id)} className="text-red-500 hover:text-white hover:bg-red-500 transition px-2 py-1 rounded-md border border-red-400">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </StudentRoute>
    );
};

export default page;