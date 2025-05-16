"use client"
import { BookOpen, ChevronRight, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
  
    return (
      <section className="w-full min-h-[95vh] py-10 md:py-24 lg:py-32 ">
        <div className=" xl:w-[90%] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold  tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Learn Without Limits
                </h1>
                <p className="max-w-[600px] text-[#1a2349] text-muted-foreground md:text-xl">
                  Start, switch, or advance your career with thousands of courses from expert teachers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href='/courses' size="lg" className="gap-3 text-white flex w-max items-center rounded bg-black/90 px-5 py-2.5">
                  Explore Courses <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>10K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>500+ Courses</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex items-center justify-center">
              <Image
                src="/img/vecbn.png"
                alt="Students learning online"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;