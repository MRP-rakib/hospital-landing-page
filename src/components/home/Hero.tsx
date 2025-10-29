import React from 'react'

import { MapPin, User } from 'lucide-react';
import Container from '@/utils/Container';
function Hero() {
  return (
      <section
      className="flex relative items-center justify-center bg-cover bg-center bg-[url(https://wallpapers.com/images/hd/hospital-background-8uzvaaj1wielv1ca.jpg)]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Container>
      <div
        
        className="relative z-10 text-center text-white px-4 py-[100px] lg:py-[150px]"
      >
        <div className="flex justify-center mb-3">
          <div className="flex items-center space-x-2">
            
            <h1 className="text-3xl md:text-5xl font-bold">
              Booking Your Appointments
            </h1>
          </div>
        </div>

        <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto mb-10">
          Great doctor if you need your family member to get effective
          immediate assistance, emergency treatment, or a simple consultation.
        </p>

        {/* Search Bar */}
        <div className="bg-gray-400 rounded-2xl shadow-lg p-4 flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto">
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 w-full bg-white">
            <MapPin className="text-blue-500 mr-2 h-5 w-5" />
            <input
              type="text"
              placeholder="Location..."
              className="outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 w-full bg-white">
            <User className="text-blue-500 mr-2 h-5 w-5" />
            <input
              type="text"
              placeholder="Doctor Name..."
              className="outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Hero