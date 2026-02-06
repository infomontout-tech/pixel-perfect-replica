import { Code, ShoppingCart, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Sistemas SaaS",
    description: "CRM, dashboards, herramientas de productividad. Plataformas escalables diseñadas para crecer con tu negocio.",
    features: ["Arquitectura escalable", "APIs RESTful", "Autenticación segura", "Panel de administración"],
    accent: "primary"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Tiendas online con pasarela de pagos, gestión de inventario y analytics en tiempo real.",
    features: ["Pasarela de pagos", "Gestión de productos", "Carrito optimizado", "Dashboard de ventas"],
    accent: "warm"
  },
  {
    icon: Lightbulb,
    title: "Tu idea a código",
    description: "¿Tienes una idea? La convertimos en un producto digital funcional. Desde MVP hasta producto completo.",
    features: ["Prototipado rápido", "Desarrollo ágil", "Iteración continua", "Consultoría técnica"],
    accent: "coral"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="relative py-32 px-6 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="tag mb-4">Servicios</div>
            <h2 className="heading-section">
              Lo que <span className="text-primary">desarrollamos</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Desde MVPs hasta plataformas completas. Tu visión, nuestra experiencia técnica.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-interactive p-8 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Icon & Title */}
                <div className="flex items-center gap-6 lg:w-1/3">
                  <div className={`icon-container${service.accent !== 'primary' ? `-${service.accent}` : ''}`}>
                    <service.icon className={`w-6 h-6 ${
                      service.accent === 'primary' ? 'text-primary' : 
                      service.accent === 'warm' ? 'text-brand-warm' : 'text-brand-coral'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>

                {/* Description */}
                <div className="lg:w-1/3">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="lg:w-1/3 flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1.5 bg-muted rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
