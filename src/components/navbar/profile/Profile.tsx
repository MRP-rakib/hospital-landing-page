import { LogIn, LogOut, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface profileProps {
  className: string
}

function Profile({ className }: profileProps) {

  return (
    <div className={`${className} absolute opacity-0 invisible top-20 right-0 transition-all duration-300 lg:-left-[200px] w-64 bg-white shadow-lg rounded-xl border-gray-100 overflow-hidden`}>
      {/* Profile Header */}
      <div className="flex items-start gap-2 p-4 border-b border-gray-200 overflow-hidden ">
        <div className='w-10 h-10 border overflow-hidden rounded-full'>
          <Image
            src="/profile.jpg"
            alt="User avatar"
            width={40}
            height={40}
            className="object-center"
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className="text-sm font-semibold text-gray-800  capitalize">md rakib</h2>
          <p className="text-xs text-blue-500 font-medium uppercase tracking-wide">
            patient
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="p-2">

        <Link href='/profile'>
        <li className="flex items-center gap-2 px-3 py-2 rounded-md  hover:bg-gray-100 cursor-pointer text-sm text-gray-700">
          <Settings size={16} />
          Profile Settings
        </li>
        </Link>
      
         <Link href='/signin'>
         <li  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-700 ">
            <LogIn size={16} />
            Sign In
          </li></Link>
        <li className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-700 ">
          <LogOut size={16} />
          Logout
        </li>
      </ul>
    </div>
  )
}

export default Profile