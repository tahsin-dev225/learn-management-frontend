"use client"
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGetCourseLessonsQuery } from "../redux/course/courseApi";

const SingleCourse = ({course}) => {
    const {data : lessons} = useGetCourseLessonsQuery(course?._id)
    return (
        <Link href={`/courseDetails/${course?._id}`}  className="group hover:bg-sky-50 cursor-pointer relative overflow-hidden rounded  bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video overflow-hidden">
                <Image src={course?.image} alt="Web Development Masterclass" width={600} height={400} className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-4 py-6">
                <div className="flex items-center justify-between">
                <span className="text-[16px] shadow px-1.5 italic font-serif rounded-sm text-muted-foreground text-blue-500">{course?.category}</span>
                </div>
                <h3 className="text-xl my-3 font-semibold  mt-2 line-clamp-2">{course?.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2 ">{course?.description} </p>
                <div className="flex items-center justify-between mt-4">
                <div className="flex text-blue-800 items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span> {lessons?.length} lessons</span>
                </div>
                <span className="font-bold">{course?.price} BDT.</span>
                </div>
            </div>
        </Link>
    );
};

export default SingleCourse;