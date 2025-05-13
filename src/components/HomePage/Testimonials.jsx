import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
    return (
        <section className="w-full lg:w-[92%] mx-auto py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Thousands of students have transformed their careers with our courses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Testimonial 1 */}
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/img/userDef.png"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Alex Thompson</h3>
                    <p className="text-sm text-muted-foreground">Web Development Student</p>
                  </div>
                </div>
                <div className="flex mt-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm">
                  "The web development course completely changed my career path. I went from knowing nothing about
                  coding to landing a job as a junior developer in just 6 months. The instructor was amazing and the
                  course content was comprehensive and up-to-date."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/img/userDef.png"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Jessica Lee</h3>
                    <p className="text-sm text-muted-foreground">Design Student</p>
                  </div>
                </div>
                <div className="flex mt-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm">
                  "As someone with a non-technical background, I was worried about learning data science. But the
                  step-by-step approach and practical projects made it accessible and enjoyable. Now I'm working as a
                  data analyst at a company I love!"
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/img/userDef.png"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">David Wilson</h3>
                    <p className="text-sm text-muted-foreground">Digital Marketing Student</p>
                  </div>
                </div>
                <div className="flex mt-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="text-sm">
                  "The digital marketing course provided me with practical skills I could immediately apply to my
                  business. The ROI from implementing what I learned has been incredible, and I've seen a 200% increase
                  in our online conversions."
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Testimonials;