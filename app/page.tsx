import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Features from "@/components/Features";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0B14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Results />
      <Features />
      <Offer />
      <FAQ />
      <Footer />
    </main>
  );
}