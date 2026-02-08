const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="text-xl font-bold tracking-tight">
              montout<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Desarrollo web profesional para startups. Tu idea, nuestra ejecución.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-12 gap-y-4">
            <div className="space-y-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Navegación</span>
              <div className="flex flex-col gap-2">
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </a>
                <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Beneficios
                </a>
                <a href="#proyectos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Contacto</span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/523788856728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:ricardoponce@conectamt.mx"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="divider my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Montout. Todos los derechos reservados.
            </div>
            <div className="text-[10px] text-muted-foreground/30 font-mono">
              Build: 1.0.2-mobile-opt
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Aceptando proyectos
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
