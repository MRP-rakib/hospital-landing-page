'use client'
import PageHeading from '@/utils/PageHeading'
import { usePathname } from 'next/navigation'
import React from 'react'
import AppointmentForm from '@/components/appointments/AppointmentForm'

function Appointment() {
    const pathName = usePathname()
            const path = pathName.slice(1)
  return (
    <div> 
        <PageHeading pageHeading='Book an appointment'
         pageDescription='Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.' 
         pageNavigation={path}/>
         
        <div>
          <AppointmentForm/>
          </div> 
    </div>
  )
}

export default Appointment