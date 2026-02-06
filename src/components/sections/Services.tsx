import { Code, ShoppingCart, Sparkles, Check } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Sistemas SaaS",
    description: "CRM, dashboards, herramientas de productividad y más. Plataformas escalables diseñadas para crecer con tu startup.",
    features: ["Arquitectura escalable", "APIs RESTful", "Autenticación segura", "Panel de administración"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Tiendas online completas con pasarela de pagos, gestión de inventario y análisis en tiempo real.",
    features: ["Pasarela de pagos", "Gestión de productos", "Carrito optimizado", "Panel de ventas"]
  },
  {
    icon: Sparkles,
    title: "Tu Idea a Realidad",
    description: "¿Tienes una idea? La convertimos en un producto digital funcional. Desde MVP hasta producto completo.",
    features: ["Desarrollo ágil", "Prototipado rápido", "Iteración continua", "Consultoría técnica"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge-primary mb-4">
            NUESTROS SERVICIOS
          </div>
          <h2 className="section-title">
            Lo Que
            <span className="block gradient-text-primary">
              Desarrollamos
            </span>
          </h2>
          <p className="section-subtitle">
            Desde MVPs hasta plataformas completas. Tu idea, nuestra ejecución.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative glass-card p-8 transition-all duration-300 hover:border-primary/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 gradient-primary rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              
              <div className="inline-flex p-4 bg-primary/20 rounded-2xl mb-6 text-primary">
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;