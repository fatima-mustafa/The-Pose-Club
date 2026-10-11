import Navbar from "@/components/core/siteheader";
import LandingHero from "@/components/core/home";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#fbf3e4]">
      <Navbar />
      <LandingHero />
    </div>
  );
}
