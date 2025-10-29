"use client"
import Container from "@/utils/Container"
import { Eye, Brain, Stethoscope, Pill, ArrowRight, Bone, Activity, Dna } from "lucide-react"

export default function MedicalServicesSection() {
  const services = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Eye Care",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Psychotherapy",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Primary Care",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Pill className="w-8 h-8 text-blue-600" />,
      title: "Dental Care",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Bone className="w-8 h-8 text-blue-600" />,
      title: "Orthopedic",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Cardiology",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Dna className="w-8 h-8 text-blue-600" />,
      title: "Gynecology",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Neurology",
      desc: "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
  ]

  return (
    <section className="py-20 bg-white text-center">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full">
            Departments
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Our Medical Services</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Great doctor if you need your family member to get effective immediate assistance,
            emergency treatment or a simple consultation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="bg-blue-50 p-4 rounded-2xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 mt-2 mb-4">{item.desc}</p>
              <a
                href="#"
                className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
