"use client"
import { useGetLessonQuery, useUpdateLessonMutation } from '@/components/redux/course/courseApi';
import StudentRoute from '@/components/routes/StudentRoute';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const page = () => {
    const {id} = useParams()
    const [updateLesson] = useUpdateLessonMutation()
    const router = useRouter()
    const {data} = useGetLessonQuery(id)
    console.log(data)

    const handleUpdateLesson = async(e)=>{
        e.preventDefault()

        try {
            const newLesson ={
                id : id,
                video : e.target.video.value,
                title : e.target.title.value
            }
            const resp = await updateLesson(newLesson)
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Course created successfully `,
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/dashboard/manageCourse')
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <StudentRoute role={"teacher"}>
            <section className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
                    <h1 className="text-3xl font-bold mb-8 text-gray-700 text-center">Create a New Course</h1>
                    <form onSubmit={handleUpdateLesson} className="space-y-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-gray-700 font-semibold mb-2">Video Link</label>
                                <input type="text"  placeholder="Enter video link..." name="video" required
                                className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                            </div>
                            <div className="w-full">
                                <label className="block text-gray-700 font-semibold mb-2">Lesson title</label>
                                <input type="text"  placeholder="Enter lesson title..." name="title" required
                                className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                            </div>
                        </div>
                        <div className="text-center my-10">
                            <input type="submit" value="Update Lesson"
                            className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white w-[80%] font-semibold px-8 py-3 rounded-lg shadow-lg transition"
                            />
                        </div>
                    </form>
                </div>
            </section>
        </StudentRoute>
    );
};

export default page;