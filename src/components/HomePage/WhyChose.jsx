import { BookOpen, CheckCircle, ChevronRight, Users } from 'lucide-react';
import Image from 'next/image';
import { Clock, Award } from "lucide-react"

const WhyChose = () => {
    return (
        <section className="w-full relative py-5 bg-white  my-14 md:py-14">
          <div className="max-w-[1600px] lg:w-[80%] mx-auto px-4 md:px-6">
            <div className="gap-6 flex justify-center lg:gap-8 items-center">
              <div className="mx-auto w-[92%] lg:mr-auto flex items-center justify-center">
                <Image
                  src="/img/bnrlm.png"
                  alt="Students in classroom"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-8 w-full">
                <div className="space-y-4">
                  <h1 className="text-[44px] font-bold font-serif text-gray-900 leading-tight">
                    Why Choose{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                      Learnetic
                    </span>
                    <span className="text-blue-600">?</span>
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    We provide a comprehensive learning experience with features designed to help you succeed in your
                    educational journey.
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Expert Teachers */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Teachers</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Learn from industry professionals with real-world experience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Flexible Learning */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Study at your own pace, anytime and anywhere
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Content */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Content</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Engage with quizzes, projects, and hands-on exercises
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certification */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
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
          <div className="size-[550px] overflow-hidden absolute bottom-[3%] right-[29%] -z-[0] rounded-full blur-[290px] bg-gradient-to-b  from-[#c36ce8c3] to-[#a8bc0fa5]"></div>
        </section>
    );
};

export default WhyChose;