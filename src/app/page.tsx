import { CTASection } from "@/components/CtaSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { TargetAudience } from "@/components/TargetAudience";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ScrollProgress } from "@/components/magicui/scroll-progress";


export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <SmoothCursor />
      <Navbar/>
      <HeroSection/>
      <FeaturesSection />
      <HowItWorks />
      <TargetAudience />
      <CTASection />
      <Footer />
    </main>
  );
}