import { Clock, Gift, Banknote } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    number: "7",
    label: "días",
    title: "Entrega garantizada",
    description: "Tu proyecto funcional en una semana. Sin excusas, sin demoras.",
  },
  {
    icon: Gift,
    number: "1",
    label: "dominio",
    title: "Dominio gratis",
    description: "Te regalamos el dominio .com para tu proyecto. Sin costos ocultos.",
  },
  {
    icon: Banknote,
    number: "$3.9K",
    label: "MXN",
    title: "Precio accesible",
    description: "Calidad profesional al alcance de tu startup. Precio fijo, sin sorpresas.",
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="tag mb-4">Beneficios</div>
          <h2 className="heading-section mb-6">
            Por qué startups
            <br />
            eligen <span className="text-primary">Montout</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entendemos las necesidades de las startups: velocidad, calidad y presupuesto ajustado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-interactive p-8 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="icon-container text-primary">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black">{benefit.number}</span>
                  <span className="text-sm text-muted-foreground block">{benefit.label}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
