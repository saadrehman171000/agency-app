import Footer from "@/components/shared/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/shared/Navbar";
import Services from "@/components/Services";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <FeaturedProjects />
    </div>
  );
}
