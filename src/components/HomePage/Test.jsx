import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight, Star, Users, BookOpen, Clock, CheckCircle, GraduationCap } from "lucide-react"

const Test = () => {
    return (
        <div className="flex  min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container w-[92%] mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduLearn</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Home
            </Link>
            <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link href="/teachers" className="text-sm font-medium transition-colors hover:text-primary">
              Teachers
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search courses..."
                className="rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </button>
            <button size="sm">Sign Up</button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container xl:w-[93%] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn Without Limits
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Start, switch, or advance your career with thousands of courses from expert teachers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button size="lg" className="gap-1.5">
                    Explore Courses <ChevronRight className="h-4 w-4" />
                  </button>
                  <button size="lg" variant="outline">
                    Become a Teacher
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>10K+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>500+ Courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.8/5 Rating</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Students learning online"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our most popular courses and start your learning journey today.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Course Card 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Web Development Masterclass"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                    Bestseller
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Web Development</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs font-medium">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 line-clamp-1">Web Development Masterclass</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer.
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>42 hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>85 lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Instructor"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-xs font-medium">John Smith</span>
                    </div>
                    <span className="font-bold">$89.99</span>
                  </div>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Data Science Fundamentals"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Data Science</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs font-medium">4.8</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 line-clamp-1">Data Science Fundamentals</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    Master Python, statistics, machine learning, and data visualization for data science.
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>38 hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>72 lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Instructor"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-xs font-medium">Sarah Johnson</span>
                    </div>
                    <span className="font-bold">$79.99</span>
                  </div>
                </div>
              </div>

              {/* Course Card 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Digital Marketing Essentials"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">New</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Marketing</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs font-medium">4.7</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 line-clamp-1">Digital Marketing Essentials</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    Learn SEO, social media marketing, email campaigns, and analytics for business growth.
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>28 hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>56 lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Instructor"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-xs font-medium">Michael Brown</span>
                    </div>
                    <span className="font-bold">$69.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button variant="outline" className="gap-1.5">
                View All Courses <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
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
                <button className="w-fit gap-1.5">
                  Learn More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Teachers Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Top Teachers</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Learn from industry experts who are passionate about teaching and helping you succeed.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {/* Teacher 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="John Smith"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    4.9 ★
                  </div>
                </div>
                <h3 className="text-lg font-bold">John Smith</h3>
                <p className="text-sm text-muted-foreground">Web Development</p>
                <p className="text-xs mt-2">Senior Developer with 10+ years of experience at top tech companies.</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>15K+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>12 Courses</span>
                  </div>
                </div>
                <button variant="outline" size="sm" className="mt-4">
                  View Profile
                </button>
              </div>

              {/* Teacher 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Sarah Johnson"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    4.8 ★
                  </div>
                </div>
                <h3 className="text-lg font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Data Science</p>
                <p className="text-xs mt-2">PhD in Computer Science with expertise in machine learning and AI.</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>12K+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>8 Courses</span>
                  </div>
                </div>
                <button variant="outline" size="sm" className="mt-4">
                  View Profile
                </button>
              </div>

              {/* Teacher 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Michael Brown"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    4.7 ★
                  </div>
                </div>
                <h3 className="text-lg font-bold">Michael Brown</h3>
                <p className="text-sm text-muted-foreground">Digital Marketing</p>
                <p className="text-xs mt-2">Marketing Director with experience at Fortune 500 companies.</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>9K+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>6 Courses</span>
                  </div>
                </div>
                <button variant="outline" size="sm" className="mt-4">
                  View Profile
                </button>
              </div>

              {/* Teacher 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Emily Chen"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    4.9 ★
                  </div>
                </div>
                <h3 className="text-lg font-bold">Emily Chen</h3>
                <p className="text-sm text-muted-foreground">UX/UI Design</p>
                <p className="text-xs mt-2">Lead Designer with 8+ years of experience in product design.</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>11K+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>9 Courses</span>
                  </div>
                </div>
                <button variant="outline" size="sm" className="mt-4">
                  View Profile
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button variant="outline" className="gap-1.5">
                View All Teachers <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24">
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
                    src="/placeholder.svg?height=60&width=60"
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
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Jessica Lee</h3>
                    <p className="text-sm text-muted-foreground">Data Science Student</p>
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
                    src="/placeholder.svg?height=60&width=60"
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

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Learning?</h2>
                  <p className="max-w-[600px] opacity-90 md:text-xl">
                    Join thousands of students and transform your career with our expert-led courses.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button size="lg" variant="secondary" className="gap-1.5">
                    Get Started Today <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Browse Courses
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>7-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 bg-primary-foreground/10 rounded-lg p-6">
                <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
                <p className="text-sm opacity-90">
                  Get the latest updates on new courses, special offers, and educational content.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                  />
                  <button variant="secondary" className="shrink-0">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs opacity-70">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EduLearn</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Empowering learners worldwide with quality education and skills for the future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Courses</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    UX/UI Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} EduLearn. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );
};

export default Test;