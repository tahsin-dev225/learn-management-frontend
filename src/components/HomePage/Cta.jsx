"use client"

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className=" bg-cover relative overflow-hidden md:overflow-visible flex-col lg:flex-row flex justify-center items-center gap-5 bg-[url('/img/cta.jpg')]  backdrop-blur-3xl text-[#feffdd] py-16 mb- px-6 text-center rounded-2xl shadow-lg max-w-[1600px] w-[94%] md:w-[80%] mx-auto lg:mt-40 my-24">
            <div className="hidden md:block z-20 w-full h-full">
                <Image src='/img/men-work.png' className="absolute z-20 bottom-4 left-[7%] " height={500} width={500} alt="cta"/>
            </div>
            <div className="w-full z-40">
                <h2 className="text-3xl sm:text-4xl font-roboto font-bold mb-4">Start Your  Learning Journey<span className='text-[#e95151] '> Today!</span> </h2>
                <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                    Join thousands of students learning new skills, building careers, and achieving goals. Get lifetime access to top-quality courses.
                </p>
                <div className="flex  justify-center gap-4">
                    <Link href='/courses' className="bg-[#f1f1f1] text-primary flex items-center gap-1.5 justify-center font-semibold px-6 py-2 rounded-4xl hover:bg-gray-100 transition">
                    Explore Courses <ChevronRight/>
                    </Link>
                </div>
            </div>
            <div className="h-full w-full absolute bg-[#e6bdde24]"></div>
            <div className="size-[390px] overflow-hidden absolute -top-[46%] left-[4%] -z-[20] rounded-full blur-[60px] bg-gradient-to-b  from-sky-300/20 to-indigo-400/80"></div>
        </section>
    );
};

export default Cta;