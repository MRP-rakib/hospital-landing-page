'use client'
import DoctorCard from '@/components/doctors/DoctorCard'
import Container from '@/utils/Container'
import PageHeading from '@/utils/PageHeading'
import { usePathname} from 'next/navigation'
import React from 'react'

function DoctorsPage() {
    const pathName = usePathname()
    const path = pathName.slice(1)
  return (
    <div>
        <PageHeading pageHeading='Doctors Team'
         pageDescription='Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.' 
         pageNavigation={path}/>

         <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
          {[1,2,3,4,5,6,7,8].map((_,index)=>(
            <DoctorCard key={index} image='/01.jpg' name='Cristino Murphy' department='Eye Care' location='dhaka' visitingDays='mon, tue, friday' visitingHours='7:30 - 9:00 PM' fee={1}/>
          ))}
         </div>
         </Container>
    </div>
  )
}

export default DoctorsPage