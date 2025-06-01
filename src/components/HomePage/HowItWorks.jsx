"use client"
import { UserPlus, Search, Play, Award, CheckCircle } from "lucide-react"
const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            title: "Create Your Account",
            description: "Sign up in seconds with your email or social media accounts. Set up your learning profile and preferences.",
            icon: UserPlus,
            color: "blue",
            features: ["Free registration", "Quick setup", "Personalized profile"],
        },
        {
        id: 2,
        title: "Browse & Choose Courses",
        description:
            "Explore our vast library of courses across multiple categories. Use filters to find exactly what you need.",
        icon: Search,
        color: "sky",
        features: ["500+ courses", "Smart filters", "Expert instructors"],
        },
        {
        id: 3,
        title: "Learn at Your Pace",
        description:
            "Access high-quality video lessons, interactive exercises, and downloadable resources anytime, anywhere.",
        icon: Play,
        color: "red",
        features: ["HD video lessons", "Mobile learning", "Offline access"],
        },
        {
        id: 4,
        title: "Get Certified",
        description: "Complete assessments, earn certificates, and showcase your new skills to advance your career.",
        icon: Award,
        color: "blue",
        features: ["Industry certificates", "Skill assessments", "Career support"],
        },
    ]


  return (
    <div className="bg-gray-50 py-16 mx-auto px-4 lg:w-[80%]">
        <h2 className="text-5xl md:text-6xl font-serif mx-auto text-center my-5 font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>{" "}
          </h2>
          <p className="text- text-gray-600 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
            Thousands of students have transformed their careers with our courses. Here's what they have to say about
            their journey.
          </p>
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.id} className="relative ">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 z-0 transform translate-x-4"></div>
                )}

                {/* Step Content */}
                <div className="relative bg-white rounded-lg p-6 shadow">
                  

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-sky-400/70 text-white rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 `} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default HowItWorks;