import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Introduce un email válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    toast.success("Mensaje enviado con éxito", {
      description: "Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="tag mb-4">Contacto</div>
              <h2 className="heading-section">
                ¿Listo para <br />
                <span className="text-primary">empezar?</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              No dejes tu idea para después. Escríbenos y platiquemos sobre cómo podemos ayudarte hoy mismo.
            </p>

            <div className="flex flex-col gap-4 text-sm text-foreground/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="font-bold">1</span>
                </div>
                Asesoría gratis
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="font-bold">2</span>
                </div>
                Te decimos cuánto cuesta en 24h
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">O mándanos un correo</p>
                  <a href="mailto:ricardoponce@conectamt.mx" className="text-primary hover:underline">ricardoponce@conectamt.mx</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />

            <div className="glass-card p-8 md:p-10 rounded-3xl relative z-10">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Nombre completo</label>
                  <input
                    id="name"
                    {...form.register("name")}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary/50"
                    placeholder="Ej. Juan Pérez"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Correo electrónico</label>
                  <input
                    id="email"
                    {...form.register("email")}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary/50"
                    placeholder="nombre@empresa.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Cuéntanos sobre tu proyecto</label>
                  <textarea
                    id="message"
                    {...form.register("message")}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary/50 resize-y"
                    placeholder="¿Qué estás construyendo?"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <a
                  href="https://wa.me/17128882206?text=Hola%20estoy%20interesado%20en%20mi%20desarrollo%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-16 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
                >
                  <MessageCircle className="w-8 h-8 fill-current" />
                  Platicar por WhatsApp
                </a>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  Respuesta garantizada en menos de 24 horas.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
