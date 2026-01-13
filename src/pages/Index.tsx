import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TownsSection from "@/components/TownsSection";
import FeaturedResources from "@/components/FeaturedResources";
import TopicsSection from "@/components/TopicsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TownsSection />
        <FeaturedResources />
        <TopicsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
