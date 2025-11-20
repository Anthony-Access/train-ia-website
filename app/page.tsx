import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";
import ResourcesSection from "./components/ResourcesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <ResourcesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
