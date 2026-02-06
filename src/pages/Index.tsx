import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';
import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import CTA from '@/components/sections/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
