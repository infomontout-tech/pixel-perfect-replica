import { Zap, Gift, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Garantía 7 Días",
    description: "Entrega en tiempo récord. Tu proyecto funcional en una semana.",
    gradientClass: "gradient-cyan-blue"
  },
  {
    icon: Gift,
    title: "Dominio Gratis",
    description: "Te regalamos el dominio .com para tu proyecto. Sin costos ocultos.",
    gradientClass: "gradient-purple-pink"
  },
  {
    icon: Shield,
    title: "Desde $3,900",
    description: "Precio promocional increíble. Calidad profesional al alcance de tu startup.",
    gradientClass: "gradient-orange-red"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge-primary mb-4">
            ¿POR QUÉ MONTOUT?
          </div>
          <h2 className="section-title">
            Beneficios que
            <span className="block gradient-text-primary">
              Nos Diferencian
            </span>
          </h2>
          <p className="section-subtitle">
            Calidad profesional, velocidad récord y precios accesibles para startups
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative glass-card-hover p-8"
            >
              <div className="relative">
                <div className={`inline-flex p-4 ${benefit.gradientClass} rounded-2xl mb-6`}>
                  <benefit.icon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;