import HeroSection from "@/components/home/HeroSection";
import ValuesSection from "@/components/home/ValuesSection";
import AboutPreview from "@/components/home/AboutPreview";
import PoliciesPreview from "@/components/home/PoliciesPreview";
import NewsPreview from "@/components/home/NewsPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <AboutPreview />
      <PoliciesPreview />
      <NewsPreview />
    </>
  );
}
