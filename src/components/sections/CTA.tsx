import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contacto" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative glass-card p-12 sm:p-16 rounded-3xl text-center overflow-hidden">
          <div className="glow-blur" />
          
          <div className="relative z-10">
            <h2 className="section-title">
              ¿Listo Para
              <span className="block gradient-text-primary">
                Lanzar Tu Proyecto?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Cuéntanos tu idea y te mostramos cómo podemos convertirla en realidad. 
              <span className="text-primary font-semibold"> Primera consultoría gratis.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/523788856728?text=Hola%20Montout,%20quiero%20iniciar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Contactar por WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:ricardoponce@conectamt.mx"
                className="btn-secondary"
              >
                Enviar Email
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">
                Promoción especial - Desde $3,900 MXN + Dominio Gratis | Proyectos a precio fijo
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Entrega en 7 días
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Código 100% tuyo
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Soporte incluido
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;