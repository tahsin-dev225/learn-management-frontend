"use client"
import { useAddCommentMutation, useAddLikeMutation, useGetAllLikeQuery, useGetCommentQuery, useGetCourseQuery,
         useGetLikeQuery, useRemoveLikeMutation } from "@/components/redux/course/courseApi";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBox } from "react-icons/fa";
import {  useSelector } from "react-redux";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import Swal from "sweetalert2";
import { BiDislike } from "react-icons/bi";
import Link from "next/link";

const page = () => {
    const {id} = useParams()
    const [currentClass , setCurrentClass] = useState('')
    const [currentLikes , setCurrentLikes] = useState('')
    const {data : course ,isLoading, error} = useGetCourseQuery(id)
    const [addComment] = useAddCommentMutation()
    const {data : comments ,isLoading : comLoading } = useGetCommentQuery(currentClass?.cLessonId || '')
    const [addLike] = useAddLikeMutation()
    const [removeLike] = useRemoveLikeMutation()
    const currentUser = useSelector(state => state?.userReducer?.userInfo)
    
    const {data : allLIkes ,isFetching} = useGetAllLikeQuery(currentClass?.cLessonId)
    const likeObject ={lessonId : currentClass?.cLessonId, userId : currentUser?._id}
    
    const {data  } = useGetLikeQuery(likeObject)

    const addLikes =async ()=>{
        const newLike = {
            lessonId : currentClass?.cLessonId,
            userId : currentUser?._id
        }
        try {
            const resp = await addLike(newLike);
        } catch (err) {
            console.log(err)
        }
    }

    const removeLikes =async ()=>{
        const newLike = {
            lessonId : currentClass?.cLessonId,
            userId : currentUser?._id
        }
        try {
            console.log('likes',resp)
        } catch (err) {
            console.log(err)
        }
    }

    const handleAddComment =async (e)=>{
        e.preventDefault();
        const newComment ={
            text : e.target.comment.value,
            userId : currentUser?._id,
            lessonId : currentClass?.cLessonId
        }
        try {
            const resp = await addComment(newComment);
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Comment added succesfully `,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            console.log('error from create course', err)
        }
    }

    if(isLoading || comLoading){
        return <div className="flex justify-center items-center w-full min-h-screen">Loading....</div>
    }
    if(error){
        return <div className="flex justify-center items-center w-full min-h-screen">Something went wrong <Link href={'/'} className='text-sky-500'>Go Home...</Link></div>
    }
    
    return (
        <div>
            <div className="p-1 lg:p-4 xl:max-w-[1100px] 2xl:max-w-[1460px] mx-auto">
                <div className=" flex justify-center flex-col xl:flex-row gap-3 md:gap-7  rounded-2xl">
                    <div className="w-full">
                        <div className="w-full">
                            <Image src={course?.image} className="max-h-[550px] w-full mx-auto object-cover rounded-md" alt={course?.name} width={800} height={680} />
                        </div>
                        <div className="w-full py-5">
                            <div className="">
                                <h1 className="text-lg lg:text-2xl font-bold">Name : {course?.name}</h1>
                                <p className="text-gray-400 mt-2">Description : {course?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:min-w-96 rounded-xl min-h-screen bg-[#eae1e1]">
                        <div className="bg-[#171717] rounded-t-xl py-4 px-4">
                            <h1 className="text-lg font-semibold text-gray-50">Course Content</h1>
                            <p className="text-gray-300 font-medium text-[15px]">{course?.lessonIds.length} Lessons</p>
                        </div>
                        {
                            course?.lessonIds?.map((lesson,idx) => <Link href={`/dashboard/enroledCourse/${id}/${lesson?._id }`}
                              key={idx} 
                             className="flex gap-2 my-2 p-1 cursor-pointer bg-[#dfd3d3] mx-1 rounded-md relative justify-start px-3 ">
                                    <iframe width="160" height="75" src={lesson?.video}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    ></iframe>
                                    
                                    <h1 className="lg:text-lg line-clamp-2 mt-1">{lesson?.title}</h1>

                                    <div className="absolute z-10 w-full h-full bg-amber-300/5"></div>

                                </Link>
                            )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default page;