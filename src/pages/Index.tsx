import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';
import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import Services from '@/components/sections/Services';
import CTA from '@/components/sections/CTA';
import SitePreview from '@/components/sections/SitePreview';
import FAQ from '@/components/sections/FAQ';
import HowWeWork from '@/components/sections/HowWeWork';
import SecurityPayments from '@/components/sections/SecurityPayments';
import EverythingWeDevelop from '@/components/sections/EverythingWeDevelop';

const Index = () => {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Benefits />
        <SitePreview />
        <EverythingWeDevelop />
        <FAQ />
        <SecurityPayments />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
