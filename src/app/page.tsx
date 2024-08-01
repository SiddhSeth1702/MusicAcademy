import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MovingReviews from "@/components/MovingReviews";
import Navbar from "@/components/Navbar";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-dot-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MovingReviews />
      <UpcomingWebinars />
      <Instructor />
    </main>
  );
}
