import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WhyChose = () => {
    return (
        <section className="w-full py-12 md:py-24">
          <div className="max-w-[1600px] lg:w-[92%] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto flex items-center justify-center">
                <Image
                  src="/img/bnrlms.jpg"
                  alt="Students in classroom"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose EduLearn?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We provide a comprehensive learning experience with features designed to help you succeed.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Teachers</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn from industry professionals with real-world experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Flexible Learning</h3>
                      <p className="text-sm text-muted-foreground">Study at your own pace, anytime and anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Interactive Content</h3>
                      <p className="text-sm text-muted-foreground">
                        Engage with quizzes, projects, and hands-on exercises
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Certification</h3>
                      <p className="text-sm text-muted-foreground">Earn recognized certificates to boost your resume</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default WhyChose;