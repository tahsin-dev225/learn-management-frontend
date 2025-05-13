"use client"
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleCourse = ({course}) => {
    return (
        <Link href={`/courseDetails/${course?._id}`}  className="group cursor-pointer relative overflow-hidden rounded-lg  bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video overflow-hidden">
                <Image src={course?.image} alt="Web Development Masterclass" width={600} height={400} className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{course?.category}</span>
                </div>
                <h3 className="text-lg font-bold mt-2 line-clamp-1">{course?.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course?.description} </p>
                <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{course?.lessonId?.length}lessons</span>
                </div>
                <span className="font-bold">$89.99</span>
                </div>
            </div>
        </Link>
    );
};

export default SingleCourse;