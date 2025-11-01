import {FaMapMarkerAlt, FaClock, FaCalendarAlt, FaDollarSign, FaCalendarCheck } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface DoctorCardProps {
  image: string;
  name: string;
  department: string;
  location: string;
  visitingHours: string;
  visitingDays: string;
  fee: number;

}

function DoctorCard({ 
  image, 
  name, 
  department, 
  location,
  visitingHours,
  visitingDays,
  fee,
  
}: DoctorCardProps) {
  return (
    <div className=" group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
      {/* Doctor Image with Book Appointment Button */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          
        />
        {/* Book Appointment Button - Hidden by default, shown on hover */}
        <div className="absolute inset-x-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bottom-10 group-hover:bottom-0 transition duration-300">
          <Link 
            href={`/appointment/`}
            className="flex items-center justify-center gap-2 w-full bg-[#396CF0] text-white py-3 hover:bg-[#2857d0] transition-colors"
          >
            <FaCalendarCheck className="w-5 h-5" />
            <span className="font-medium">Book Appointment</span>
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-[#396CF0] transition-colors line-clamp-1">{name}</h3>
          <p className="text-sm sm:text-base text-gray-500 mt-0.5 sm:mt-1">{department}</p>
        </div>
        <div className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#396CF0] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FaClock className="text-[#396CF0] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="line-clamp-1">{visitingHours}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#396CF0] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="line-clamp-1">{visitingDays}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-[#396CF0] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="line-clamp-1">Consultation Fee: ${fee}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DoctorCard;