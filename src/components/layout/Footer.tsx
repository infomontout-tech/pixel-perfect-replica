const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black gradient-text-primary">
            MONTOUT
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#proyectos" className="text-muted-foreground hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          
          <div className="text-muted-foreground text-sm">
            © 2025 Montout. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;