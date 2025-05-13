import Image from "next/image";

const CoursBanner = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center bg-[url('/img/coursBg.jpg')] px-6 md:px-20 pt-12">
            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Build skills with  Online course .
                </h1>
                <p className="text-gray-400 text-[15px] font-thin  mb-6">
                    We discover skills, optimize intelligence and enable ones who are
                    inspired and determined for career success.
                </p>
                {/* <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition">
                    Explore Courses
                </button> */}
            </div>
            <div className="relative mt-10 md:mt-0 w-full md:w-1/2 flex justify-center items-center">
                <div className="absolute right-0 top-0 h-full w-full md:w-[120%] md:h-[120%] bg-[#2B2D42] rotate-6 -z-10 origin-bottom-left rounded-l-full"></div>
                <div className="absolute bottom-4 right-6 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                </div>
                <Image
                    src="/img/coursPerson.png"
                    alt="Student"
                    width={250}
                    height={250}
                    className="z-10 object-contain"
                />
            </div>
        </section>
    );
};

export default CoursBanner;