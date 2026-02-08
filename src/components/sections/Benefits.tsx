import { Clock, Gift, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Banknote,
    number: "$0",
    label: "Anticipo",
    title: "Sin Riesgos",
    description: "No pedimos anticipos. Solo pagas si te gusta el resultado final.",
    delay: 0
  },
  {
    icon: Clock,
    number: "7",
    label: "días",
    title: "Entrega Rápida",
    description: "Tu proyecto funcionando en tiempo récord. Sin excusas ni retrasos.",
    delay: 0.1
  },
  {
    icon: Gift,
    number: "FREE",
    label: "Dominio .com",
    title: "Regalo de Inicio",
    description: "Dominio .com o .mx gratis para los primeros 20 clientes del mes.",
    delay: 0.2
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <div className="tag mb-4">Beneficios</div>
          <h2 className="heading-section mb-6">
            Por qué elegirnos
            <br />
            para <span className="text-primary">Tu Negocio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sabemos lo que necesitas: rapidez, calidad y buen precio.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              whileHover={{ y: -10 }}
              className="card-elevated p-8 group border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground group-hover:from-primary group-hover:to-brand-accent-soft transition-all duration-300">
                    {benefit.number}
                  </span>
                  <span className="text-sm text-muted-foreground block font-medium tracking-wide uppercase mt-1">
                    {benefit.label}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.title === "Sin Riesgos" ? (
                  <>No pedimos anticipos. Pagas <span className="text-primary font-bold">solo después de ver el resultado</span>.</>
                ) : benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
