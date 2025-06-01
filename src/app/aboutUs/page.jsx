"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BookOpen, Award, Globe, CheckCircle, ChevronRight, Calendar, TrendingUp, Globe2, Target } from "lucide-react"
import { Lightbulb, Users, Heart } from "lucide-react"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { allTeachers } from '@/components/HomePage/Teachers';
import MetTeam from './MetTeam';

const page = () => {
    return (
        <div className="bg-white ">
            <Navbar/>
            {/* Hero Section */}
            <section className="relative  py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    
                    <Image
                        src="/img/about.jpg"
                        alt="Background pattern"
                        fill
                        className="object-cover "
                    />
                </div>
                <div className="container relative z-30 mx-auto px-4 md:py-5 lg:py-10 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-serif font-medium mb-4">
                            <BookOpen className="w-4 h-4" />
                            About Us
                        </div>
                        <div className="mx-auto text-lg text-white font-serif text-center">We belive in skills, building careers, and achieving goals.</div>
                    </div>
                </div>
                <div className="absolute bg-black/70 w-full h-full z-10 top-0"></div>
            </section>

            
            {/* Our Story Section */}
            <section className="py-16  px-3.5 lg:w-[80%] 2xl:max-w-[1500px] mx-auto md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif mx-auto md:text-5xl text-center font-bold  text-gray-900 mb-10 ">Our <span className="text-blue-600">Story</span></h2>
                            <div className="">
                                {/* Content Side */}
                                <div className="space-y-8">
                                    {/* Story Card 1 */}
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-3 rounded-xl">
                                            <Calendar className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Founded in 2018</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Our journey began with a simple idea: to create a platform where anyone could access
                                                <span className="text-red-500 font-medium"> high-quality educational content</span> at an affordable
                                                price.
                                            </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Story Card 2 */}
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-sky-100 p-3 rounded-xl">
                                            <TrendingUp className="w-6 h-6 text-sky-600" />
                                            </div>
                                            <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Growth</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                What started as a small collection of programming courses has grown into a
                                                <span className="text-blue-600 font-medium"> comprehensive library</span> spanning technology,
                                                business, design, and personal development.
                                            </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Story Card 3 */}
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-red-100 p-3 rounded-xl">
                                            <Globe2 className="w-6 h-6 text-red-500" />
                                            </div>
                                            <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Today, we're proud to have helped{" "}
                                                <span className="text-red-500 font-medium">thousands of students worldwide</span>
                                                achieve their learning goals and advance their careers.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-xl overflow-hidden">
                            <Image src="/img/aboutus.jpg" alt="Our journey" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-12  px-3.5 lg:w-[80%] 2xl:max-w-[1500px] mx-auto bg-primary/5 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-5xl">Our <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Mission</span> </h2>
                    <p className="mt-4 font-serif text-gray-600">
                    We're on a mission to revolutionize online education through technology and innovation skills, building careers.
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
            <MetTeam/>

            {/* Values Section */}
            <section className="py-24 font-serif bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our <span className='bg-gradient-to-r font-serif from-blue-600 to-purple-600 bg-clip-text text-transparent'>Values</span>
                        </h2>
                        <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
                        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto  rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                    {/* Innovation Card */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-start space-x-5 relative z-10">
                        <div className="bg-blue-400/80 rounded-xl p-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            Innovation
                            </h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                            We constantly explore new technologies and teaching methods to improve the learning experience,
                            pushing boundaries to create better educational outcomes.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Inclusivity Card */}
                    <div className="group bg-white font-serif rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-start space-x-5 relative z-10">
                        <div className="bg-blue-400/80 rounded-xl p-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Heart className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                            Inclusivity
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            We create content that is accessible to learners of all backgrounds and abilities, ensuring everyone
                            has equal opportunities to grow and succeed.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Excellence Card */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-start space-x-5 relative z-10">
                        <div className="bg-blue-400/80  rounded-xl p-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            Excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            We hold ourselves to the highest standards in everything we create and deliver, continuously striving
                            for quality and improvement in all aspects of our work.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Community Card */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-start space-x-5 relative z-10">
                        <div className="bg-blue-400/80 rounded-xl p-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                            Community
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            We foster a supportive environment where students can learn from each other, building connections that
                            enhance the educational journey and create lasting relationships.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 font-serif px-3.5 lg:w-[85%] 2xl:max-w-[1500px] mx-auto md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#3faee2b6] to-[#3f77dec7] rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Start Learning?</h2>
                    <p className="text-xl mb-8 max-w-2xl font- mx-auto">
                    Join thousands of students who are already advancing their careers with our courses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/courses"
                            className="flex items-center mx-auto lg:mx-0 gap-2 w-max text-white text-[15px] px-4 py-2 lg:px-5 lg:py-2.5 rounded bg-[#01010380]"
                        >
                            Explore Courses <ChevronRight className="h-4 w-4" />
                        </Link>
                        <Link
                        href="/courses"
                        className="flex items-center mx-auto lg:mx-0 gap-2 w-max text-white text-[15px] px-4 py-2 lg:px-5 lg:py-2.5 rounded hover:bg-black/20 duration-300 bg-[#3d21bc]/5 border border-amber-600"
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