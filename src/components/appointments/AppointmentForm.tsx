'use client';
import Container from '@/utils/Container';
import { useState } from 'react';
import AppointmentFormInput from './AppFormInput';
import AppointmentComment from './Comment';

export default function AppointmentForm() {
  // State for form inputs (not functional, just for design)
  const [formType, setFormType] = useState('clinic'); // 'clinic' or 'online'

  return (
   <Container>
     <div className="max-w-4xl mx-auto my-15">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setFormType('clinic')}
          className={`py-3 px-4 text-center rounded-lg font-medium transition-colors ${formType === 'clinic'
              ? 'bg-[#396CF0] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          Clinic Appointment
        </button>
        <button
          onClick={() => setFormType('online')}
          className={`py-3 px-4 text-center rounded-lg font-medium transition-colors ${formType === 'online'
              ? 'bg-[#396CF0] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          Online Appointment
        </button>
      </div>

      <form className="space-y-6">
        {/* Patient Name */}
        <AppointmentFormInput label='Patient Name' type='text' placeholder='Your Name: '/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Departments
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#396CF0] focus:ring-1 focus:ring-[#396CF0] outline-none transition-colors appearance-none bg-white">
              <option value="">Eye Care</option>
              <option value="cardiology">Cardiology</option>
              <option value="dental">Dental Care</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedic">Orthopedic</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Doctor
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#396CF0] focus:ring-1 focus:ring-[#396CF0] outline-none transition-colors appearance-none bg-white">
              <option value="">Dr. Calvin Carlo</option>
              <option value="dr-john">Dr. John Doe</option>
              <option value="dr-mary">Dr. Mary Smith</option>
            </select>
          </div>
        </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppointmentFormInput label='your Email' type='email' placeholder='Your Email: '/>
            <AppointmentFormInput label='Your Phone' type='number' placeholder='Your Number: '/>
          </div>
        {formType === 'online' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppointmentFormInput label='Your Date' type='date'/>
            <AppointmentFormInput label='Your Time' type='time' />
          </div>
        )}

        <AppointmentComment/>

        <button
          type="submit"
          className="w-full bg-[#396CF0] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2857d0] transition-colors"
        >
          Book An Appointment
        </button>
      </form>
    </div>
   </Container>
  );
}