import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Main Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="tag-outlined">
                Desarrollo web para startups
              </div>
              
              <h1 className="heading-display text-balance">
                Tu idea.
                <br />
                <span className="text-primary">Nuestra ejecución.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transformamos conceptos en productos digitales funcionales. 
                SaaS, CRM, e-commerce — entregado en 7 días.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary group">
                Comenzar proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicios" className="btn-ghost">
                Ver servicios
              </a>
            </div>

            {/* Stats */}
            <div className="pt-10 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="stat-number">7</div>
                  <div className="text-sm text-muted-foreground mt-1">días de entrega</div>
                </div>
                <div>
                  <div className="stat-number">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">código tuyo</div>
                </div>
                <div>
                  <div className="stat-number">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">soporte</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="card-elevated p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-brand-coral" />
                    <div className="w-3 h-3 rounded-full bg-brand-warm" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">montout.dev</span>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-32 bg-muted/50 rounded-lg mt-6" />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <div className="h-10 bg-primary/20 rounded-lg flex-1" />
                  <div className="h-10 bg-muted rounded-lg flex-1" />
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 card-elevated p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Proyecto enviado</div>
                  <div className="text-xs text-muted-foreground">hace 2 minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
