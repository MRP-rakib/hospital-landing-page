'use client'
import Container from '@/utils/Container'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import ProfileNav from '../Profile/ProfileNav'
import { usePathname } from 'next/navigation'
import { Heart, ShoppingCart } from 'lucide-react'
interface mobilePropsType{
    mobile:boolean
    setMobile:React.Dispatch<React.SetStateAction<boolean>>
    pathname:string
   
}
function Navbar() {
    const [mobile,setMobile] =useState<boolean>(false)
const [scrolled, setScrolled] = useState(false);
const pathname = usePathname()

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
<nav className={`py-6 sticky bg-transparent ${scrolled&&'bg-white'} top-0 left-0 z-50 w-full`}>
        <Container>
            <div className='flex items-center justify-between'>
                <Image src='/logo-dark.png' width={120} height={64} alt='logo'/>
                <ul className={`hidden lg:flex items-center gap-10 lg:text-base text-black} `}>
                    <li className={`${pathname==='/'&&'text-[#396CF0]'}`}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={`${pathname==='/doctors'&&'text-[#396CF0]'}`}>
                        <Link href='/doctors'>Doctros</Link>
                    </li>
                    <li className={`${pathname==='/shop'&&'text-[#396CF0]'}`}>
                        <Link href='/shop'>Shop</Link>
                    </li>
                    <li className={`${pathname==='/appointment'&&'text-[#396CF0]'}`}>
                        <Link href='/appointment'>Appointment</Link>
                    </li>
                    <li className={`${pathname==='/about'&&'text-[#396CF0]'}`}>
                        <Link href='/about'>About us</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4 lg:gap-8'>
                    <span className='w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-primary text-white'>
                        <Heart size={16}/>
                    </span>
                    <span className='w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-primary text-white'>
                        <ShoppingCart size={16} />
                    </span>
                
                    <div className=' relative group'>
                        <span className='w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
                          <Image src='/profile.jpg' width={40} height={40} alt='profile' className=' object-center'/>
                    </span>
                    <ProfileNav className='group-hover:opacity-100 group-hover:visible group-hover:top-12 group-focus:opacity-100 group-focus:visible group-focus:top-12'/>
                    </div>
                    <span onClick={()=>setMobile(true)} className='w-6 h-6 lg:hidden rounded-full flex items-center justify-center bg-primary text-white'>
                        <MdMenu />
                    </span>
                </div>
                
            </div>
        </Container>
        <MobileView mobile={mobile} setMobile={setMobile} pathname={pathname}/>
    </nav>
  )
}

function MobileView({mobile,setMobile,pathname}:mobilePropsType){
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
                    <li className={`${pathname==='/'&&'text-[#396CF0]'} px-4 py-2 border-b border-gray-200`}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={`${pathname==='/doctros'&&'text-[#396CF0]'} px-4 py-2 border-b border-gray-200`}>
                        <Link href='/doctors'>Doctros</Link>
                    </li>
                    <li className={`${pathname==='/shop'&&'text-[#396CF0]'} px-4 py-2 border-b border-gray-200`}>
                        <Link href='/shop'>Shop</Link>
                    </li>
                    <li className={`${pathname==='/appointment'&&'text-[#396CF0]'} px-4 py-2 border-b border-gray-200`}>
                        <Link href='/appointment'>Appointment</Link>
                    </li>
                    <li className={`${pathname==='/about'&&'text-[#396CF0]'} px-4 py-2 border-b border-gray-200`}>
                        <Link href='/about'>About us</Link>
                    </li>
                   
                </ul>
                
            </div>
        
        </div>
    )
}

export default Navbar