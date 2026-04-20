import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ProductOverviewSection from "./components/ProductOverviewSection";
import ViewingExperienceSection from "./components/ViewingExperienceSection";
import GroupUseSection from "./components/GroupUseSection";
import InstitutionalSection from "./components/InstitutionalSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <StatsBar />
        <ProductOverviewSection />
        <ViewingExperienceSection />
        <GroupUseSection />
        <InstitutionalSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
