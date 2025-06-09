"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const teachers = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Web Developer",
    description: "Expert in React, Node.js and modern web technologies with 8+ years of experience.",
    image: "/img/teacher2.jpg",
  },
  {
    id: 2,
    name: "Anna Smith",
    title: "UI/UX Designer",
    description: "Creative designer specializing in user experience and interface design for web and mobile.",
    image: "/img/techer1.jpg",
  },
  {
    id: 3,
    name: "James Lee",
    title: "Data Scientist",
    description: "Machine learning expert with PhD in Computer Science and 10+ years in AI research.",
    image: "/img/teacher3.jpg",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    title: "Digital Marketing Expert",
    description: "Growth marketing specialist who has scaled multiple startups to millions in revenue.",
    image: "/img/teacher2.jpg",
  },
  {
    id: 5,
    name: "Mike Johnson",
    title: "Mobile App Developer",
    description: "iOS and Android developer with apps downloaded by millions of users worldwide.",
    image: "/img/teacher3.jpg",
  },
  {
    id: 6,
    name: "Lisa Chen",
    title: "Cybersecurity Expert",
    description: "Information security specialist with expertise in ethical hacking and network security.",
    image: "/img/techer1.jpg",
  },
]

const Teachers = ()=> {
  return (
    <section className="py-10 relative mx-auto md:w-[80%] px-4 bg-[#f5f8fb00]">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="sm:text-5xl text-3xl font-bold font-poppins text-black mb-4">Our Expert And Top <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teachers</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Learn from industry professionals who bring real-world experience to every lesson.Choose from quality courses to enhance your skill.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1444: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="teachers-swiper"
          >
            {teachers.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <div className="bg-blue-400 rounded-2xl border-b border-b-gray-300  shadow  hover:shadow-md transition-shadow duration-300 h-full">
                  {/* Profile Image */}
                  <div className="text-center">
                        <div className="w-full py-4 bg-blue-400 rounded-lg rounded-bl-4xl rounded-br-none">
                            <div className="w-20 h-20 mx-auto mb-4">
                                <img
                                    src={teacher.image || "/placeholder.svg"}
                                    alt={teacher.name}
                                    className="w-full h-full rounded-full object-cover border-4 border-gray-100"
                                />
                            </div>
                        </div>
                        
                        <div className="py-6 pb-8 rounded-xl rounded-tl-none  rounded-tr-3xl bg-white">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{teacher.name}</h3>
                            <p className="text-sm text-blue-600 font-medium mb-3">{teacher.title}</p>
                            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-6">{teacher.description}</p>
                            <div className="text-center">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                                View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>
        <div className="size-[350px] overflow-hidden absolute bottom-[13%] right-[30%] -z-[0] rounded-full blur-[170px] bg-gradient-to-b  from-sky-300/20 to-indigo-400/80"></div>
      </div>

      <style jsx global>{`
        .teachers-swiper {
          padding: 0 20px;
        }

        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background: #9ca3af;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .swiper-pagination-bullet-active-custom {
          background: #2563eb;
          width: 24px;
          border-radius: 4px;
        }

        .swiper-pagination-bullet-custom:hover {
          background: #6b7280;
        }

        .swiper-pagination-bullet-active-custom:hover {
          background: #2563eb;
        }
      `}</style>
    </section>
  )
}
export default Teachers;