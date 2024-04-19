import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/hero/hero-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MemeSection from "@/components/memes/meme-section";

export default function Home() {
  return (
    <div className="h-full text-white">
      <Header />
      <HeroSection />
      <MemeSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
