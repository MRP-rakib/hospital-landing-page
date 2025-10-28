'use client'
import Container from '@/utils/Container'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import Profile from './profile/Profile'
interface mobilePropsType{
    mobile:boolean
    setMobile:React.Dispatch<React.SetStateAction<boolean>>
   
}
function Navbar() {
    const [mobile,setMobile] =useState<boolean>(false)
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
<nav className={`py-6 fixed bg-transparent ${scrolled&&'bg-white'} top-0 left-0 z-50 w-full`}>
        <Container>
            <div className='flex items-center justify-between'>
                <Image src='/logo-dark.png' width={120} height={64} alt='logo'/>
                <ul className={`hidden lg:flex items-center gap-10 lg:text-base ${scrolled?'text-black':'text-white'}`}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>Doctros</Link>
                    </li>
                    <li>
                        <Link href='/'>Shop</Link>
                    </li>
                    <li>
                        <Link href='/'>Appointment</Link>
                    </li>
                    <li>
                        <Link href='/'>Blogs</Link>
                    </li>
                    <li>
                        <Link href='/'>About us</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4 lg:gap-8'>
                    <span className='w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-primary text-white'>
                        <IoIosSearch />
                    </span>
                    <span className='w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-primary text-white'>
                        <CiShoppingCart />
                    </span>
                
                    <div className=' relative group'>
                        <span className='w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
                          <Image src='/profile.jpg' width={40} height={40} alt='profile' className=' object-center'/>
                    </span>
                    <Profile className='group-hover:opacity-100 group-hover:visible group-hover:top-12 group-focus:opacity-100 group-focus:visible group-focus:top-12'/>
                    </div>
                    <span onClick={()=>setMobile(true)} className='w-6 h-6 lg:hidden rounded-full flex items-center justify-center bg-primary text-white'>
                        <MdMenu />
                    </span>
                </div>
                
            </div>
        </Container>
        <MobileView mobile={mobile} setMobile={setMobile}/>
    </nav>
  )
}

function MobileView({mobile,setMobile}:mobilePropsType){
    return(
        <div className={`${mobile?"w-full":"w-0"} absolute top-0 transition-all duration-600 bg-[rgba(0,0,0,0.2)] overflow-hidden`}>
            <div className='lg:hidden bg-white overflow-y-scroll   flex flex-col gap-2 lg:text-base w-[250px] h-screen md:w-[300px]
           py-8  border-gray-200 border'>
                <div className='flex items-center justify-between pr-2'>
                    <Image className='px-4' src='/logo-dark.png' width={120} height={64} alt='logo'/>
                    <span onClick={()=>setMobile(false)} className=' w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-primary text-white'>
                        <IoIosClose />
                    </span>
                </div>
           <ul className=' flex flex-col'>
                    <li className='px-4 py-2 border-b border-gray-200'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='px-4 py-2 border-b border-gray-200'>
                        <Link href='/'>Doctros</Link>
                    </li>
                    <li className='px-4 py-2 border-b border-gray-200'>
                        <Link href='/'>Shop</Link>
                    </li>
                    <li className='px-4 py-2 border-b border-gray-200'>
                        <Link href='/'>Appointment</Link>
                    </li>
                    <li className='px-4 py-2 border-b border-gray-200'>
                        <Link href='/'>Blogs</Link>
                    </li>
                    <li className='px-4 py-2 border-b border-gray-200'>
                        <Link href='/'>About us</Link>
                    </li>
                   
                </ul>
                
            </div>
        
        </div>
    )
}

export default Navbar