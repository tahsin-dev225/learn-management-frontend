"use client"
import useFirebase from '@/components/Firebase/useFirebase';
import { useEnrolledCourseMutation, useGetCourseQuery, useGetSingleEnrolledQuery } from '@/components/redux/course/courseApi';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { Badge, Diamond } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaBox } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const page = () => {
    const {id} = useParams()
    const {data : course ,isLoading, error} = useGetCourseQuery(id)
    const [enroledCourse] = useEnrolledCourseMutation()
    const { user } = useFirebase();
    const router = useRouter()
    const currentUser = useSelector(state => state?.userReducer?.userInfo)
    
    const isExistCourse = {userId : currentUser?.email, courseId : id}
    const {data : isEnrolled} = useGetSingleEnrolledQuery(isExistCourse)
    console.log(currentUser)
    console.log(isEnrolled)
    
    const addEnrolled =async (id,coursePrice) =>{
        if(!currentUser){
           return router.push('/login')
        }
        if(isEnrolled[0]?._id){
            return Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Course already enrolled `,
                showConfirmButton: false,
                timer: 1500
            });
        }
        
        const enrolledInfo = {
            courseId : id,
            email : user,
            price : coursePrice
        }
        try {
            const resp = await enroledCourse(enrolledInfo);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Course created successfully `,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            console.log('error from enrolled  course details page', err)
        }
    }

    if(isLoading){
        return <div className="flex justify-center items-center w-full min-h-screen">Loading....</div>
    }
    if(error){
        return <div className="flex justify-center items-center w-full min-h-screen">Something went wrong <Link href={'/'} className='text-sky-500'>Go Home...</Link></div>
    }
    
    return (
        <div className="w-full mx-auto min-h-screen">
            <Navbar/>

            {/* <div className="p-4 xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto">
                <h2 className="text-4xl font-bold my-6">Course Details.</h2>
                <p className="text-gray-300 mb-8 flex gap-4 items-center"><FaBox/> Choose from a variety of high-quality courses to enhance your skills.</p>
                <div className=" flex justify-center gap-3 md:gap-7 border-[1px] border-[#400f0f] rounded-2xl p-3">
                    <div className="w-[80%] p-2.5 mt-5">
                        {
                        currentClass ? 
                        "" : 
                        <div className="">
                            <Image src={course?.image} className=" h-64 mx-auto object-cover rounded-md" alt={course?.name} width={400} height={400} />
                        </div>
                        }
                    </div>
                    <div className="w-full p-5">
                        <h1 className="text-3xl font-bold">Name : {course?.name}</h1>
                        <p className="text-gray-700 mt-2">Description : {course?.description}</p>
                        <p className="mt-4 text-xl text-blue-600 font-semibold">Price : {course?.price} tk.</p>
                        <p className="mt-4 text-xl text-amber-100 font-semibold">Category : {course?.category} </p>
                        <p className="mt-4 text-xl text-amber-100 font-semibold">Total Class  : {course?.lessonIds.length} </p>
                        <div className="my-6 flex justify-center w-full">
                            <button onClick={()=>addEnrolled(course?._id,course?.price)} className="bg-blue-500 text-center w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bg-gradient-to-r from-purple-950 to-indigo-800 pb-8 min-h-[92vh] text-white">
                <div className="lg:w-[88%] mx-auto px-4 lg:px-0 pt-3.5 lg:pt-4">
                    <h2 className="text-4xl font-bold my-4">Course Details.</h2>
                    <p className="text-gray-300 mb-8 flex gap-4 items-center">
                        <Diamond className='text-blue-500' /> 
                        Choose from a variety of high-quality courses to enhance your skills.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-purple-900 rounded-lg to-indigo-800  max-w-[1220px] 3xl:max-w-[1500px] mx-auto px-4 lg:px-8 py-8 md:py-14 my-5 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-4xl text-sm py-1.5 w-max">{course?.category} Course</h1>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{course?.name}</h1>
                            <p className="text-lg text-purple-100 max-w-lg">{course?.description}</p>
                            <p className=" text-xl text-[#e6c2d9] font-semibold">Price : {course?.price} tk.</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button onClick={()=>addEnrolled(course?._id,course?.price)} size="lg" className="gap-3 cursor-pointer text-center justify-center bg-white text-black flex  items-center rounded px-7 py-2.5">
                                    Enroll Now 
                                </button>
                            </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <div className="aspect-video bg-gradient-to-br from-purple-400 to-indigo-600 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                    src={course?.image}
                                    alt="Course thumbnail"
                                    width={600}
                                    height={500}
                                    className="object-contain p-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;