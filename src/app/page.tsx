import About from "@/components/home/About";
import DoctorAboutSection from "@/components/home/DoctorAboutsection";
import Hero from "@/components/home/Hero";
import Department from '@/components/home/Department'

export default function Home() {
  return (
    <div>
          <Hero/>
         <About/>
         <DoctorAboutSection/>
         <Department/>
    </div>
  );
}
