import { ArrowRight, MessageCircle, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contacto" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="card-elevated p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Subtle accent */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, hsl(175 84% 52%) 0%, transparent 70%)' }}
          />
          
          <div className="relative z-10">
            <div className="tag-outlined mx-auto mb-8 w-fit">
              Consulta gratis
            </div>
            
            <h2 className="heading-section mb-6">
              ¿Listo para lanzar
              <br />
              <span className="text-primary">tu proyecto?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Cuéntanos tu idea y te mostramos cómo podemos hacerla realidad. 
              Primera consultoría sin costo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://wa.me/523788856728?text=Hola%20Montout,%20quiero%20iniciar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:ricardoponce@conectamt.mx"
                className="btn-ghost"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            {/* Bottom info */}
            <div className="divider mb-8" />
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="dot-accent" />
                Desde $3,900 MXN
              </span>
              <span className="flex items-center gap-2">
                <span className="dot-accent" />
                Dominio gratis
              </span>
              <span className="flex items-center gap-2">
                <span className="dot-accent" />
                7 días de entrega
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
