import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Insructors from "@/components/Insructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicSchoolTestimonials/>
    <UpcomingWebinars/>
    <Insructors/>
    <Footer/>
  </main>
    
  );
}
