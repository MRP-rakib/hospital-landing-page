"use client"
import Container from "@/utils/Container"
import { Briefcase, Monitor, Code2 } from "lucide-react"

export default function AboutSection() {
  const data = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-500" />,
      title: "Our Mission",
      desc: "The most well-known dummy text is the 'Lorem Ipsum' originated in the 16th century.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-blue-500" />,
      title: "Our Vision",
      desc: "The most well-known dummy text is the 'Lorem Ipsum' originated in the 16th century.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-blue-500" />,
      title: "Who We Are ?",
      desc: "The most well-known dummy text is the 'Lorem Ipsum' originated in the 16th century.",
    },
  ]

  return (
    <section className="bg-gray-50 py-6">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center md:items-start space-y-3">
            <span>{item.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      </Container>
    </section>
  )
}
