import Container from '@/utils/Container'
import React from 'react'
import DoctorCard from './DoctorCard'
import Link from 'next/link'

function DoctorsSection() {
  return (
    <div>
        <Container>
            <div className='flex flex-col items-center gap-5 lg:gap-6 text-center'>
                <h3 className='text-[20px] lg:text-[24px] font-bold'>Doctors</h3>
                <p className='text-[14px] lg:text-base text-gray-400 mx-auto max-w-[600px]'>
                    Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
          {[1,2,3,4].map((_,index)=>(
            <DoctorCard key={index} image='/01.jpg' name='Cristino Murphy' department='Eye Care' location='dhaka' visitingDays='mon, tue, friday' visitingHours='7:30 - 9:00 PM' fee={1}/>
          ))}
         </div>
         <div className='flex items-center justify-center my-10'>
            <Link href='/doctors' className='bg-[#396CF0] hover:bg-[#2857d0] cursor-pointer text-white py-2 px-5 rounded'>See More</Link>
         </div>
        </Container>
    </div>
  )
}

export default DoctorsSection