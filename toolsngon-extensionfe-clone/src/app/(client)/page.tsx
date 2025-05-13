import HeroSection from "../components/ui/HeroSection";
import FeatureSection from "../components/ui/FeatureSection";
import Testimonials from "../components/ui/Testimonials";
import CtaSection from "../components/ui/CtaSection";
import PricingSection from "../components/ui/PricingSection";
import FaqSection from "../components/ui/FaqSection";
import DownloadSection from "../components/ui/DownloadSection";
import FloatingButtons from "../components/ui/FloatingButtons";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <PricingSection />
      <CtaSection />
      <FaqSection />
      <DownloadSection/>
      <FloatingButtons />
    </>
  );
}
