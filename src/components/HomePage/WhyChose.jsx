import { BookOpen, CheckCircle, ChevronRight, Users } from 'lucide-react';
import Image from 'next/image';
import { Clock, Award } from "lucide-react"

const WhyChose = () => {
    return (
        <section className="w-full relative py-5 bg-white  my-14 md:py-14">
          <div className="max-w-[1600px] lg:w-[80%] mx-auto px-4 md:px-6">
            <div className="gap-6 flex justify-center lg:gap-8 items-center">
              <div className="mx-auto w-[92%] hidden z-10 lg:mr-auto lg:flex items-center justify-center">
                <Image
                  src="/img/bnrlm.png"
                  alt="Students in classroom"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-8 z-10 w-full">
                <div className="space-y-4">
                  <h1 className="md:text-[44px] text-3xl font-bold font-lato text-gray-900 leading-tight">
                    Why Choose{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Learnetic
                    </span>
                    <span className="text-blue-600">?</span>
                  </h1>

                  <p className="text-lg ml-5 text-gray-600 leading-relaxed">
                    We provide a comprehensive learning experience with features designed to help you succeed in your
                    educational journey.
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Expert Teachers */}
                  <div className="group bg-white rounded-2xl p-3  sm:p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                    <div className="flex items-start space-x-2 sm:space-x-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded sm:rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                        <Users className="sm:w-6 sm:h-6 h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="sm:text-lg sm:font-semibold text-gray-900 mb-2">Expert Teachers</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from industry professionals with real-world experience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Flexible Learning */}
                  <div className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-200">
                    <div className="flex items-start space-x-2 sm:space-x-4">
                      <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded sm:rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="sm:w-6 sm:h-6 h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="sm:text-lg sm:font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Study at your own pace, anytime and anywhere
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Content */}
                  <div className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                    <div className="flex items-start space-x-2 sm:space-x-4">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded sm:rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="sm:w-6 sm:h-6 h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="sm:text-lg sm:font-semibold text-gray-900 mb-2">Interactive Content</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Engage with quizzes, projects, and hands-on exercises
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certification */}
                  <div className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-200">
                    <div className="flex items-start space-x-2 sm:space-x-4">
                      <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded sm:rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                        <Award className="sm:w-6 sm:h-6 h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="sm:text-lg sm:font-semibold text-gray-900 mb-2">Certification</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Earn recognized certificates to boost your resume
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
              
            </div>
          </div>
          <div className="size-[300px] overflow-hidden absolute bottom-[3%] right-[29%] -z-[0] rounded-full blur-[390px] bg-gradient-to-b  from-[#6cb2e8c3] to-[#8582d8a5]"></div>
        </section>
    );
};

export default WhyChose;