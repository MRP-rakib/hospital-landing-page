"use client"
import Image from "next/image"
import { Play } from "lucide-react"
import Container from "@/utils/Container"

export default function DoctorAboutSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex justify-center">
            <Image src='/about-2.png' width={500} height={500} alt="about" />
            <div className="absolute  inset-0 flex justify-center items-center">
              <span className="bg-white cursor-pointer shadow-lg w-16 h-16 flex justify-center items-center rounded-full hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-blue-600" />
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
              About Doctris
            </span>
            <h2 className="text-[20px] lg:text-2xl font-bold text-gray-900 pt-3 leading-snug">
              Good Services And Better Health By Our Specialists
            </h2>
            <p className="text-gray-500">
              Great doctor if you need your family member to get effective immediate assistance,
              emergency treatment or a simple consultation.
            </p>
            <p className="text-gray-500">
              The most well-known dummy text is the Lorem Ipsum, which is said to have originated
              in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or
              less corresponds to proper Latin. It contains a series of real Latin words.
            </p>
            <button className="mt-4 px-6 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 transition">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
