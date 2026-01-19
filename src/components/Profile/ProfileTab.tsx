import { Baby, Bone, Brain, ClipboardPlus, Eye, File, FlaskConical, HeartPulse, Scan, Stethoscope, Syringe } from 'lucide-react';
import React from 'react'
const departmentData = [
  {
    id: 1,
    department: "Cardiogram",
    doctorName: "Dr. Calvin Carlo",
    date: "10 Dec",
    icon: <HeartPulse size={24} color="#3b82f6" />
  },
  {
    id: 2,
    department: "Checkup",
    doctorName: "Dr. Cristino Murphy",
    date: "12 Dec",
    icon: <Stethoscope size={24} color="#10b981" />
  },
  {
    id: 3,
    department: "Covid Test",
    doctorName: "Dr. Alia Reddy",
    date: "13 Dec",
    icon: <FlaskConical size={24} color="#f59e0b" />
  },
  {
    id: 4,
    department: "Dentist",
    doctorName: "Dr. Toni Kovar",
    date: "15 Dec",
    icon: <ClipboardPlus size={24} color="#64748b" />
  },
  {
    id: 5,
    department: "Neurology",
    doctorName: "Dr. Robert Brown",
    date: "18 Dec",
    icon: <Brain size={24} color="#8b5cf6" />
  },
  {
    id: 6,
    department: "Ophthalmology",
    doctorName: "Dr. Linda Green",
    date: "20 Dec",
    icon: <Eye size={24} color="#06b6d4" />
  },
  {
    id: 7,
    department: "Orthopedics",
    doctorName: "Dr. Michael Ross",
    date: "22 Dec",
    icon: <Bone size={24} color="#f43f5e" />
  },
  {
    id: 8,
    department: "Pediatrics",
    doctorName: "Dr. Emily Davis",
    date: "25 Dec",
    icon: <Baby size={24} color="#fb923c" />
  },
  {
    id: 9,
    department: "Radiology",
    doctorName: "Dr. Sarah Jenkins",
    date: "28 Dec",
    icon: <Scan size={24} color="#475569" />
  },
  {
    id: 10,
    department: "Vaccination",
    doctorName: "Dr. James Wilson",
    date: "30 Dec",
    icon: <Syringe size={24} color="#ef4444" />
  }
];
function ProfileTab() {
  return (
    <div>
      <div className='pt-4'>
        <h6 className='text-base font-medium'>Introduction:</h6>
        <p className='text-[14px] lg:text-base text-gray-400'>Web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. Dummy texts have been in use by typesetters since the 16th century.</p>
      </div>
      <div className='grid grid-cols-2 pt-5 gap-7.5'>
        <div>
          <h5 className='text-[18px] lg:text-[20px] font-semibold'>Appointment List</h5>
          <div className='flex flex-col gap-2'>
            {departmentData.map(department => (
              <div key={department.id} className='py-2 px-2 flex items-end justify-between border border-gray-200 rounded'>
                <div className='flex items-center gap-2 '>
                  <span >{department.icon}</span>
                  <div>
                    <h6 className='text-[14px]  lg:text-base font-semibold'>{department.department}</h6>
                    <p className='text-gray-400 text-[14px]'>{department.doctorName}</p>
                  </div>
                </div>
                <p>{department.date}</p>
              </div>
            ))}
          </div>

        </div>
        <div>
          <h5 className='text-[18px] lg:text-[20px] font-semibold'>Payment List</h5>
          <div className='flex flex-col gap-2'>
            {departmentData.map(department => (
              <div key={department.id} className='py-2 px-2 flex items-center justify-between border border-gray-200 rounded'>
                <div>
                  <h6 className='text-[14px]  lg:text-base font-semibold'>{department.department}</h6>
                  <p className='text-gray-400 text-[14px] capitalize'>Full bill paid</p>
                </div>
                <div>
                  <span className='bg-[#305CCC] w-8 h-8 border flex items-center justify-center rounded'>
                    <File color='#ffffff' size={16}/>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTab