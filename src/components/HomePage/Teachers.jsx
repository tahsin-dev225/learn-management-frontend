"use client"
import { BookOpen, ChevronRight, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const allTeachers =[
            {
                image : "/img/techer1.jpg",
                name : 'John Smith',
                category : 'Web Development',
                description : 'Senior Developer with 10+ years of experience at top tech companies.',
                student : '15K+ Students',
                course : '12 Courses'
            },
            {
                image : "/img/teacher2.jpg",
                name : 'Tasin Sir',
                category : 'Design',
                description : 'Senior Developer with 10+ years of experience at top tech companies.',
                student : '15K+ Students',
                course : '12 Courses'
            },
            {
                image : "/img/teacher3.jpg",
                name : 'Bajaw Roni',
                category : 'Bussiness',
                description : 'Senior Developer with 10+ years of experience at top tech companies.',
                student : '15K+ Students',
                course : '12 Courses'
            },
            {
                image : "/img/techer1.jpg",
                name : 'John Smith',
                category : 'Web Development',
                description : 'Senior Developer with 10+ years of experience at top tech companies.',
                student : '15K+ Students',
                course : '12 Courses'
            },
            {
                image : "/img/teacher2.jpg",
                name : 'Dubiya mk.',
                category : 'Merketing',
                description : 'Senior Developer with 10+ years of experience at top tech companies.',
                student : '15K+ Students',
                course : '12 Courses'
            },
        ]
const Teachers = () => {

    
    return (
        <section className="w-full  bg-gray-200 py-12 md:py-24 bg-muted/50">
            <div className=" lg:w-[90%] max-w-[1600px] mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Top Teachers</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Learn from industry experts who are passionate about teaching and helping you succeed.
                        </p>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                    >
                    {allTeachers?.map((teacher, index) => (
                        <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center p-4  rounded shadow-2xl">
                            <div className="relative mb-4">
                                <div className="w-32 h-32 p-1.5 rounded-full overflow-hidden">
                                    <Image src={teacher?.image} alt={teacher?.name} width={128} height={128} className="object-cover rounded-full h-full w-full"/>
                                </div>
                                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">4.9 ★ </div>
                            </div>
                            <h3 className="text-lg font-bold">{teacher?.name}</h3>
                            <p className="text-sm text-muted-foreground">{teacher?.category}</p>
                            <p className="text-xs mt-2">{teacher?.description}</p>
                            <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    <span>{teacher?.student}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <BookOpen className="h-3 w-3" />
                                    <span>{teacher?.course}</span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Teachers;