import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0B14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}