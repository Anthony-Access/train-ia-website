import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MethodologySection from "./components/MethodologySection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MethodologySection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
