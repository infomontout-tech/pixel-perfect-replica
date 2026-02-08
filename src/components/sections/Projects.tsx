import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Conecta MT",
    category: "Corporativo",
    description: "Plataforma corporativa de alto impacto para servicios tecnológicos. Diseño moderno y optimización SEO completa.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: `${import.meta.env.BASE_URL}conectamt.png`,
    link: "https://conectamt.mx"
  },
  {
    title: "Dashboard SaaS",
    category: "App Web",
    description: "Panel de control administrativo con visualización de datos en tiempo real y gestión de usuarios.",
    tech: ["Next.js", "Supabase", "Recharts"],
    image: `${import.meta.env.BASE_URL}project_dashboard.svg`,
    link: "#"
  },
  {
    title: "Lozano Store",
    category: "E-commerce Completo",
    description: "Tienda en línea completa con catálogo de productos, carrito de compras y sistema de pagos integrado.",
    tech: ["Shopify", "Liquid", "JS"],
    image: `${import.meta.env.BASE_URL}lozano.png`,
    link: "https://lozanogarzajoyeria.com"
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="tag mb-4">Portfolio</div>
            <h2 className="heading-section">
              Proyectos <span className="text-primary">destacados</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md lg:text-right text-lg"
          >
            Ejemplos reales de transformación digital.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target={project.link !== '#' ? "_blank" : undefined}
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-interactive group flex flex-col overflow-hidden p-0 h-full border border-white/5 bg-card/50"
            >
              {/* Image Preview */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback using placeholder if image fails to load (or hasn't been generated yet)
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.classList.add('bg-muted');
                  }}
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-xs font-bold px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                    {project.link !== '#' ? <ExternalLink className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 bg-white/5 rounded text-muted-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
