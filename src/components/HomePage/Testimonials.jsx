import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Web Development Student",
    rating: 5,
    testimonial:
      "The web development course completely changed my career path. I went from knowing nothing about coding to landing a job as a junior developer in just 6 months.",
    avatar: "AT",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Jessica Lee",
    role: "Design Student",
    rating: 5,
    testimonial:
      "As someone with a non-technical background, I was worried about learning data science. But the step-by-step approach and practical projects made it accessible and enjoyable",
    avatar: "JL",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Digital Marketing Student",
    rating: 4,
    testimonial:
      "The digital marketing course provided me with practical skills I could immediately apply to my business. The ROI from implementing what I learned has been incredible.",
    avatar: "DW",
    color: "from-emerald-500 to-teal-500",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
        />
      ))}
    </div>
  )
}

const Testimonials = ()=> {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students</span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thousands of students have transformed their careers with our courses. Here's what they have to say about
            their journey.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`group relative ${index === 1 ? "lg:scale-105 lg:z-10" : ""}`}>
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6">
                  {/* Rating */}
                  <div className="mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`w-8 h-8 bg-gradient-to-r ${testimonial.color} rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white`}
                >
                  {testimonial.avatar}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Join 10,000+ successful students</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
