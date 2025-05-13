"use client"

import Link from "next/link";

const Cta = () => {
    return (
        <section className="bg-blue-700/10 backdrop-blur-3xl text-[#614a4a] py-16 px-6 text-center rounded-2xl shadow-lg max-w-[90%] mx-auto my-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Learning Journey Today!</h2>
            <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of students learning new skills, building careers, and achieving goals. Get lifetime access to top-quality courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href='/courses' className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Explore Courses
                </Link>
                <button className="bg-secondary text-gray-300 font-semibold px-6 py-3 rounded-full hover:bg-secondary/90 transition">
                Join Now
                </button>
            </div>
        </section>
    );
};

export default Cta;