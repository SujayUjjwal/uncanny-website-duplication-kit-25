
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Strategy from "@/components/Strategy";
import Statistics from "@/components/Statistics";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContent } from "@/contexts/ContentContext";

const Index = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();
  const { content } = useContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="strategy">
        <Strategy />
      </div>
      <Statistics />
      <div id="reviews">
        <Reviews />
      </div>
      <Team />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8" ref={footerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-gray-400 transition-all duration-700 ${
            footerVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            {content.footer.text}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
