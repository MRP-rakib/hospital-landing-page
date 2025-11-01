'use client'
import PageHeading from '@/utils/PageHeading'
import { usePathname} from 'next/navigation'
import React from 'react'

function Blogs() {
    const pathName = usePathname()
        const path = pathName.slice(1)
  return (
    <div>
         <PageHeading pageHeading='Blogs & News'
         pageDescription='Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.' 
         pageNavigation={path}/>
    </div>
  )
}

export default Blogs