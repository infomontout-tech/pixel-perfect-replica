import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Dashboard SaaS",
    category: "Analytics",
    description: "Panel de análisis en tiempo real con métricas avanzadas y reportes automatizados.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-Commerce Tech",
    category: "Tienda Online",
    description: "Plataforma con +5,000 productos, pagos integrados y gestión de inventario.",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "CRM Startup",
    category: "Gestión",
    description: "Sistema de gestión de clientes con automatización de procesos y analytics.",
    tech: ["React", "Express", "MySQL"],
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="tag mb-4">Portfolio</div>
            <h2 className="heading-section">
              Proyectos <span className="text-primary">destacados</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Ejemplos de lo que podemos crear para tu startup.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-interactive p-8 group flex flex-col"
            >
              {/* Category & Arrow */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Preview placeholder */}
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full p-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-coral/50" />
                    <div className="w-2 h-2 rounded-full bg-brand-warm/50" />
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted/50 rounded w-3/4" />
                    <div className="h-2 bg-muted/50 rounded w-1/2" />
                  </div>
                  <div className="h-12 bg-muted/30 rounded mt-4" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-muted rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
