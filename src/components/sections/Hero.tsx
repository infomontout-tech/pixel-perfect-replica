import { ArrowRight, Rocket, Zap, Gift, Shield } from 'lucide-react';

const stats = [
  { number: "7", label: "Días de Garantía" },
  { number: "100%", label: "Código Escalable" },
  { number: "24/7", label: "Soporte Continuo" }
];

const features = [
  {
    icon: Zap,
    title: "Desarrollo Rápido",
    description: "Tu proyecto listo en 7 días garantizados",
    gradientClass: "gradient-cyan-blue"
  },
  {
    icon: Gift,
    title: "Dominio Incluido",
    description: "Regalo: Tu dominio .com personalizado",
    gradientClass: "gradient-purple-pink"
  },
  {
    icon: Shield,
    title: "Precio Especial",
    description: "Desde $3,900 MXN - Promoción limitada",
    gradientClass: "gradient-orange-red"
  }
];

const Hero = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="relative z-10">
            <div className="badge-primary mb-6">
              <Rocket className="w-4 h-4" />
              Especializados en Startups
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
              Tu Idea a
              <span className="block gradient-text-hero">
                Realidad Digital
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
              Creamos sistemas SaaS, CRMs, dashboards, e-commerce y cualquier idea que tengas. 
              <span className="text-primary font-semibold"> En solo 7 días.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contacto" className="btn-primary group">
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver Servicios
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-black gradient-text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative z-10">
            <div className="relative glass-card p-8 rounded-3xl shadow-2xl">
              <div className="glow-blur" />
              
              <div className="relative space-y-6">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${feature.gradientClass} rounded-xl`}>
                        <feature.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    {index < features.length - 1 && (
                      <div className="h-px bg-border mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;