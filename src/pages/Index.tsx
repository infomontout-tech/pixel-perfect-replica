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

import { motion } from "framer-motion";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BackgroundEffects />
      <Header />
      <main>
        <motion.div {...fadeInUp}>
          <Hero />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <Services />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <HowWeWork />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <Benefits />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <SitePreview />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <EverythingWeDevelop />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <FAQ />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <SecurityPayments />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <CTA />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
