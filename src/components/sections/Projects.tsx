import { LineChart } from 'lucide-react';

const projects = [
  {
    title: "SaaS Dashboard",
    description: "Panel de análisis en tiempo real con métricas avanzadas",
    tech: "React + Node.js + PostgreSQL"
  },
  {
    title: "E-Commerce Tech",
    description: "Tienda online con +5,000 productos y pagos integrados",
    tech: "Next.js + Stripe + MongoDB"
  },
  {
    title: "CRM Startup",
    description: "Sistema de gestión de clientes con automatización",
    tech: "React + Express + MySQL"
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge-primary mb-4">
            PORTFOLIO
          </div>
          <h2 className="section-title">
            Proyectos
            <span className="block gradient-text-primary">
              Destacados
            </span>
          </h2>
          <p className="section-subtitle">
            Ejemplos de lo que podemos crear para tu startup
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-8">
                <div className="aspect-video bg-gradient-to-br from-surface-light/50 to-surface/50 rounded-xl mb-6 flex items-center justify-center">
                  <LineChart className="w-16 h-16 text-primary/50" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;