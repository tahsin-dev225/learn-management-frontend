"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BookOpen, Award, Globe, CheckCircle, Users, ChevronRight } from "lucide-react"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { allTeachers } from '@/components/HomePage/Teachers';

const page = () => {
    return (
        <div className="bg-white">
            <Navbar/>
            {/* Hero Section */}
            <section className="relative bg-blue-400/10 py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                <Image
                    src="/placeholder.svg?height=600&width=1600"
                    alt="Background pattern"
                    fill
                    className="object-cover opacity-5"
                />
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                    <span className="block">We're Passionate About</span>
                    <span className="block text-primary mt-2">Transforming Education</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                    Our mission is to make quality education accessible to everyone, everywhere. We believe in the power of
                    knowledge to change lives.
                    </p>
                </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12  px-3.5 lg:w-[80%] 2xl:max-w-[1500px] my-7 mx-auto bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="text-center">
                    <p className="text-4xl font-bold text-primary">5000+</p>
                    <p className="mt-2 text-gray-600">Students</p>
                    </div>
                    <div className="text-center">
                    <p className="text-4xl font-bold text-primary">200+</p>
                    <p className="mt-2 text-gray-600">Courses</p>
                    </div>
                    <div className="text-center">
                    <p className="text-4xl font-bold text-primary">50+</p>
                    <p className="mt-2 text-gray-600">Instructors</p>
                    </div>
                    <div className="text-center">
                    <p className="text-4xl font-bold text-primary">15+</p>
                    <p className="mt-2 text-gray-600">Countries</p>
                    </div>
                </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16  px-3.5 lg:w-[80%] 2xl:max-w-[1500px] mx-auto md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Founded in 2018, our journey began with a simple idea: to create a platform where anyone could access
                        high-quality educational content at an affordable price.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        What started as a small collection of programming courses has grown into a comprehensive library
                        spanning technology, business, design, and personal development.
                    </p>
                    <p className="text-lg text-gray-600">
                        Today, we're proud to have helped thousands of students worldwide achieve their learning goals and
                        advance their careers.
                    </p>
                    </div>
                    <div className="relative h-96 rounded-xl overflow-hidden">
                    <Image src="/img/aboutUs.jpg" alt="Our journey" fill className="object-cover" />
                    </div>
                </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16  px-3.5 lg:w-[80%] 2xl:max-w-[1500px] mx-auto bg-primary/5 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
                    <p className="mt-4 text-xl text-gray-600">
                    We're on a mission to revolutionize online education through technology and innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Quality Content</h3>
                    <p className="text-gray-600">
                        We partner with industry experts to create courses that are comprehensive, up-to-date, and practical.
                    </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Global Access</h3>
                    <p className="text-gray-600">
                        We believe education should be accessible to everyone, regardless of location or background.
                    </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Student Success</h3>
                    <p className="text-gray-600">
                        Our ultimate goal is to help our students achieve their personal and professional goals.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full  bg-primary/10 py-12 md:py-24 bg-muted/50">
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

            {/* Values Section */}
            <section className="py-16  px-3.5 lg:w-[80%] 2xl:max-w-[1500px] mx-auto bg-gray-50 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
                    <p className="mt-4 text-xl text-gray-600">The principles that guide everything we do.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Innovation</h3>
                        <p className="text-gray-600">
                        We constantly explore new technologies and teaching methods to improve the learning experience.
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                        <p className="text-gray-600">
                        We create content that is accessible to learners of all backgrounds and abilities.
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Excellence</h3>
                        <p className="text-gray-600">
                        We hold ourselves to the highest standards in everything we create and deliver.
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Community</h3>
                        <p className="text-gray-600">
                        We foster a supportive environment where students can learn from each other.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16  px-3.5 lg:w-[85%] 2xl:max-w-[1500px] mx-auto md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Start Learning?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of students who are already advancing their careers with our courses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/courses"
                            className="flex items-center mx-auto lg:mx-0 gap-2 w-max text-white text-[15px] px-4 py-2 lg:px-5 lg:py-2.5 rounded bg-[#010103]"
                        >
                            Explore Courses <ChevronRight className="h-4 w-4" />
                        </Link>
                        <Link
                        href="/courses"
                        className="flex items-center mx-auto lg:mx-0 gap-2 w-max text-white text-[15px] px-4 py-2 lg:px-5 lg:py-2.5 rounded bg-[#3d21bc]/5 border border-amber-300"
                        >
                        Explore Courses <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default page;