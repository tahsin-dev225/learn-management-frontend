"use client"
import { useAddCommentMutation, useAddDislikeMutation, useAddLikeMutation, useGetAllDislikeQuery, useGetAllLikeQuery, useGetCommentQuery, useGetCourseQuery, useGetDislikeQuery, useGetLessonQuery, useGetLikeQuery,
     useRemoveDislikeMutation,
     useRemoveLikeMutation } from '@/components/redux/course/courseApi';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BiDislike, BiSolidDislike } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { FaTelegramPlane } from "react-icons/fa";


const VideoPage = () => {
    const { id,video } = useParams()
    const {data : currentLesson } = useGetLessonQuery(video)

    const {data : course ,isLoading, error} = useGetCourseQuery(id)
    const [addComment] = useAddCommentMutation()
    const {data : comments ,isLoading : comLoading } = useGetCommentQuery(video || '')
    const [addLike] = useAddLikeMutation()
    const [addDislike] = useAddDislikeMutation()
    const [removeLike] = useRemoveLikeMutation()
    const [removeDislike] = useRemoveDislikeMutation()
    const currentUser = useSelector(state => state?.userReducer?.userInfo)
    
    const {data : allLIkes } = useGetAllLikeQuery(video)
    const {data : allDislikes} = useGetAllDislikeQuery(video)
    const likeObject ={lessonId : video, userId : currentUser?._id}
    
    const {data :isLiked } = useGetLikeQuery(likeObject)
    const {data :isDisliked } = useGetDislikeQuery(likeObject)

    const addLikes =async ()=>{
        const newLike = {
            lessonId : video,
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
            lessonId : video,
            userId : currentUser?._id
        }
        try {
            const resp = await removeLike(newLike);
        } catch (err) {
            console.log(err)
        }
    }

    const addDislikes =async ()=>{
        const newLike = {
            lessonId : video,
            userId : currentUser?._id
        }
        try {
            const resp = await addDislike(newLike);
        } catch (err) {
            console.log(err)
        }
    }

    const removeDislikes =async ()=>{
        const newLike = {
            lessonId : video,
            userId : currentUser?._id
        }
        try {
            const resp = await removeDislike(newLike);
            // console.log('likes',resp)
        } catch (err) {
            console.log(err)
        }
    }

    const handleAddComment =async (e)=>{
        e.preventDefault();
        const newComment ={
            text : e.target.comment.value,
            userId : currentUser?._id,
            lessonId : video
        }
        try {
            const resp = await addComment(newComment);
            console.log(resp)
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
        <div className="p-1  lg:p-4 xl:max-w-[1100px] 2xl:max-w-[1460px] mx-auto"> 
            <div className=" flex justify-center flex-col xl:flex-row gap-3 md:gap-7 h-full  rounded-2xl">
                <div className="w-full h-full">
                <div className="relative w-full pt-[56.25%] shadow-lg">
                    <iframe
                    className="absolute top-0 left-0 w-full rounded h-full"
                    src={currentLesson?.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    ></iframe>
                </div>
                    <div className="w-full p-1 py-5">
                    {
                    <div className="">
                        <div className="lg:flex justify-between gap-4 items-center">
                            <h1 className="text-lg lg:text-2xl font-bold"> {currentLesson?.title}</h1>
                            <div className="flex rounded-2xl items-center bg-blue-600/60 text-amber-200">

                            { isLiked?.length ?<p onClick={()=> removeLikes()} className="px-4 rounded-l-2xl flex gap-1 hover:bg-blue-900/50 cursor-pointer py-1.5 border-r border-sky-950 text-lg">
                                    <AiTwotoneLike  className="text-2xl " ></AiTwotoneLike >
                                    <span className="text-[16px]">{allLIkes}</span>
                                </p>
                                :
                                <p onClick={()=> addLikes()} className="px-4 rounded-l-2xl flex gap-1 hover:bg-blue-900/50 cursor-pointer py-1.5 border-r border-sky-950 text-lg">
                                    <AiOutlineLike className="text-2xl" ></AiOutlineLike>
                                    <span className="text-[16px]">{allLIkes}</span>
                                </p>}
                            {
                                isDisliked?.length ?  <p onClick={()=> removeDislikes()} className="px-4 rounded-r-2xl flex gap-1 hover:bg-blue-900/50 cursor-pointer py-1.5  border-sky-950 text-lg">
                                <span className="text-[16px]">{allDislikes}</span>
                                <BiSolidDislike className="text-2xl" ></BiSolidDislike>
                            </p>
                            :
                            <p onClick={()=> addDislikes()} className="px-4 rounded-r-2xl flex gap-1 hover:bg-blue-900/50 cursor-pointer py-1.5  border-sky-950 text-lg">
                                <span className="text-[16px]">{allDislikes}</span>
                                <BiDislike className="text-2xl" ></BiDislike>
                            </p>
                            }
                            </div>
                        </div>
                        <form className="w-full flex flex-col justify-end gap- p-4 my-4" onSubmit={handleAddComment}>
                            <textarea type="text" className="w-full text-[15px] px-4 my-2 outline-none p-2 rounded-lg shadow border border-[#b2adad]" placeholder="Add a comment" name="comment" required />
                            <div className="flex justify-end">
                                <div className="flex gap-1.5 justify-center items-center bg-[#171616] rounded px-4 py-2 text-white">
                                    <FaTelegramPlane className='text-[18px]' />
                                    <input type="submit" className="" value="Add Comment" />
                                </div>
                            </div>
                        </form>
                        {
                        comments && <div className="">
                            {
                            comments.map(comment => <div key={comment?._id} className="">
                                <div className="flex items-start p-3 gap-3 my-8 border rounded border-blue-950/15 shadow">
                                    <div className="size-8 rounded-full border border-b-gray-500">
                                        {
                                        comment?.userId?.image ?<Image src={comment?.userId?.image} height={40} width={40}  className="object-cover rounded-full" alt="" />
                                        :
                                        <Image src='/img/userDef.png' height={40} width={40}  className="object-cover rounded-full" alt="" />
                                        }
                                    </div>
                                    <div className="">
                                        <h1 className="font-semibold text-[17px] ">{comment?.userId?.name}</h1>
                                        <h3 className="font-light mt-1 ">{comment?.text}</h3>
                                    </div>
                                </div>
                            </div> )
                            }
                        </div>
                        }
                    </div>
                    }
                    </div>
                </div>
                <div className="lg:min-w-96 rounded-xl min-h-screen bg-[#eae1e1]">
                    <div className="bg-[#171717] rounded-t-xl py-4 px-4">
                        <h1 className="text-lg font-semibold text-gray-50">Course Content</h1>
                        <p className="text-gray-300 font-medium text-[15px]">{course?.lessonIds.length} Lessons</p>
                    </div>
                    {
                    course?.lessonIds?.map((lesson,idx) => <Link key={idx} href={`/dashboard/enroledCourse/${id}/${lesson?._id }`} 
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
    );
};

export default VideoPage;