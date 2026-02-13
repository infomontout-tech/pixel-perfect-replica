import { ArrowRight, CheckCircle2, Code2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PromoCountdown from '../PromoCountdown';
import FloatingServiceLabels from '../FloatingServiceLabels';
import heroImage from '@/assets/hero2.png';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Background Gradient Blob */}
      {/* Background Gradient Blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-warm/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left - Content */}
          <div className="space-y-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 text-center lg:text-left"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-sm font-medium mx-auto lg:mx-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Disponible para nuevos proyectos
              </motion.div>

              <h1 className="heading-display text-balance leading-[1.1]">
                {["Tu", "Página", "Web."].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className="inline-block mr-3 text-foreground"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {["Lista", "en", "7", "Días."].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-brand-accent-soft to-brand-warm animate-gradient-x"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                variants={item}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0"
              >
                Desarrollamos tu sitio web, tienda online o sistema a medida. <strong>Sin anticipos</strong> y con vista previa antes de pagar.
              </motion.p>

              {/* Countdown is separate to avoid frequent re-renders affecting text */}
              <motion.div variants={item}>
                <PromoCountdown />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              {/* WhatsApp CTA Button */}
              <motion.a
                href="https://wa.me/17128882206?text=Hola%20estoy%20interesado%20en%20mi%20desarrollo%20web"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-5 px-8 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <div className="flex flex-col items-start">
                  <span className="text-sm opacity-90">Consulta Gratis sin Compromiso</span>
                  <span className="text-lg font-black">¡Hablar por WhatsApp!</span>
                </div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>

              {/* Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  "✓ Sin anticipo - pagas al final",
                  "✓ Vista previa antes de pagar",
                  "✓ Solo 7 días de desarrollo",
                  "✓ 20 cupos disponibles este mes"
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                    <span className="text-primary">{bullet.split(' ')[0]}</span>
                    <span>{bullet.substring(2)}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Micro Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-8 flex items-center gap-6 text-sm text-muted-foreground border-t border-border/50"
            >
              <div className="flex -space-x-3">
                {[
                  { name: 'TechFlow', color: 'from-blue-500 to-blue-600' },
                  { name: 'DataHub', color: 'from-purple-500 to-purple-600' },
                  { name: 'CloudSync', color: 'from-cyan-500 to-cyan-600' },
                  { name: 'AppNova', color: 'from-indigo-500 to-indigo-600' },
                  { name: 'DevCore', color: 'from-violet-500 to-violet-600' }
                ].map((startup, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br ${startup.color} flex items-center justify-center text-[10px] font-bold text-white shadow-lg`}
                    title={startup.name}
                  >
                    {startup.name.substring(0, 2).toUpperCase()}
                  </div>
                ))}
              </div>
              <p>+50 Empresas ya confían en nosotros</p>
            </motion.div>
          </div>

          {/* Right - Visual Experience */}
          <div className="relative mt-16 lg:mt-0 perspective-1000 max-w-2xl mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="relative z-10"
            >
              {/* Hero Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-primary/30" />
                <img
                  src={heroImage}
                  alt="Plataforma Montout"
                  className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 will-change-transform"
                />

                {/* Floating Animated Service Labels */}
                <FloatingServiceLabels />

                {/* Floating WhatsApp Button */}
                <motion.a
                  href="https://wa.me/17128882206?text=Hola%20estoy%20interesado%20en%20mi%20desarrollo%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -right-4 top-10 z-20 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl border-4 border-white/10 hover:border-white/30 transition-all"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-8 h-8 fill-current" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
