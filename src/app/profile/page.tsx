'use client'
import ProfileSettings from "@/components/Profile/ProfileSettings";
import ProfileTab from "@/components/Profile/ProfileTab";
import Container from "@/utils/Container"
import { BookOpen, Droplets, Mail, MapPin, User } from "lucide-react";
import Image from "next/image"
import { useState } from "react";

function Profile() {
    const [isProfile,setProfile] = useState<boolean>(true)
    const [profileData,setProfileData] = useState( [
        { label: "Gender", value: "Female", icon: <User size={20} className="text-blue-600" /> },
        { label: "Birthday", value: "19th January 1995", icon: <Mail size={20} className="text-blue-600" /> },
        { label: "Phone No.", value: "+(125) 458-8547", icon: <BookOpen size={20} className="text-blue-600" /> },
        { label: "Address", value: "Sydney, Australia", icon: <MapPin size={20} className="text-blue-600" /> },
        { label: "Blood Group", value: "B +", icon: <Droplets size={20} className="text-blue-600" /> },
    ]);
    return (
        <section className="my-10">
            <Container>
                <div className="grid grid-cols-[400px_1fr] gap-7.5 h-[600px]">
                    <div className="w-full border border-gray-300 rounded">
                        <div className="w-full h-[100px] relative">
                            <Image src={'/bg-profile.jpg'} width={300} height={400} alt="banner" className="w-full h-full object-cover rounded" />
                            <div className="w-16 h-16 absolute left-1/2 -translate-x-1/2 -bottom-1/2 -translate-y-1/2  rounded-full flex items-center justify-center overflow-hidden">

                                <Image src={'/profile.jpg'} width={400} height={300} alt="profile" className=" w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center pt-8">
                            <h4 className="text-[16px] lg:text-[18px] font-semibold">Name</h4>
                            <p className="text-[12px] lg:text-[14px] font-medium text-gray-500">@rakib</p>
                            <p className="text-[12px] lg:text-[14px] font-medium capitalize text-gray-500">20 years old</p>
                        </div>
                        <hr className="mt-2 text-gray-300" />
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-base lg:text-[18px] font-bold text-gray-800">Complete your profile</h2>
                                <span className="text-sm font-semibold text-slate-400">89%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                            </div>
                            <div className="space-y-5">
                                {profileData.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex gap-2 items-center text-[14px] text-base">
                                            <span className="text-gray-800 font-semibold">{item.label}</span>
                                            <span className="text-slate-400 font-medium">{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" h-full overflow-y-auto">
                        <div className="flex items-center justify-between font-medium">
                            <button onClick={()=>setProfile(true)} className={`w-full h-15 text-2xl ${isProfile?'text-white bg-[#396CF0]':'text-black bg-[#F8F9FA]'}   cursor-pointer`}>Profile</button>
                            <button onClick={()=>setProfile(false)} className={`w-full h-15 text-2xl ${isProfile?'text-black bg-[#F8F9FA]':'text-white bg-[#396CF0]'}  cursor-pointer`}>Profile Settings</button>
                        </div>
                        {isProfile?(<ProfileTab/>):(<ProfileSettings/>)}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Profile
