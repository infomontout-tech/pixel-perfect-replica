import { Code, ShoppingCart, Lightbulb, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: "Sistemas a la Medida",
    description: "Herramientas para administrar tu negocio. Controla ventas, inventarios y clientes desde un solo lugar.",
    features: ["Fácil de usar", "Datos seguros", "Reportes automáticos", "Tu propio panel"],
    accent: "primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: ShoppingCart,
    title: "Tienda en Línea",
    description: "Vende tus productos en internet las 24 horas. Nosotros nos encargamos de que los pagos y pedidos funcionen perfecto.",
    features: ["Cobros con tarjeta", "Catálogo de productos", "Carrito de compras", "Panel de ventas"],
    accent: "warm",
    gradient: "from-brand-warm/20 to-brand-warm/5"
  },
  {
    icon: Lightbulb,
    title: "Sitios Web Profesionales",
    description: "¿Necesitas presencia en internet? Diseñamos páginas que hacen que tu marca se vea increíble y atraiga clientes.",
    features: ["Diseño profesional", "Se ve bien en celular", "Carga rápida", "Botón de WhatsApp"],
    accent: "coral",
    gradient: "from-brand-coral/20 to-brand-coral/5"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="relative py-32 px-6 bg-surface-elevated/30 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-warm/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="tag mb-4">Servicios</div>
            <h2 className="heading-section">
              Lo que <span className="text-primary">desarrollamos</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md lg:text-right text-lg"
          >
            Soluciones claras para problemas reales. Tecnología que trabaja para ti.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12">

                  {/* Icon & Title */}
                  <div className="flex items-center gap-6 lg:w-[35%]">
                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                      <service.icon className={`relative z-10 w-8 h-8 ${service.accent === 'primary' ? 'text-primary' :
                        service.accent === 'warm' ? 'text-brand-warm' : 'text-brand-coral'
                        }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                      <div className={`h-1 w-12 rounded-full ${service.accent === 'primary' ? 'bg-primary' :
                        service.accent === 'warm' ? 'bg-brand-warm' : 'bg-brand-coral'
                        } group-hover:w-full transition-all duration-500 opacity-50`} />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:w-[30%]">
                    <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features & Action */}
                  <div className="lg:w-[35%] flex flex-col items-start lg:items-end gap-6">
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1.5 bg-background/50 border border-white/5 rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs font-medium px-3 py-1.5 bg-background/50 border border-white/5 rounded-full text-muted-foreground">
                          +{service.features.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="flex items-center gap-2 text-primary font-medium group/btn">
                      <span>Ver detalles</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
