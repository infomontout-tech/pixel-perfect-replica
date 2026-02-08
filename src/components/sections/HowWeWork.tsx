import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code2, Eye, Rocket } from 'lucide-react';

const steps = [
    {
        icon: MessageCircle,
        title: "Paso 1: Nos cuentas tu idea",
        description: "Platicamos por WhatsApp para entender qué necesitas y cómo podemos ayudarte.",
        color: "text-primary"
    },
    {
        icon: FileText,
        title: "Paso 2: Cotización en 24h",
        description: "Te enviamos una propuesta clara con el costo total y el plan de trabajo.",
        color: "text-brand-accent-soft"
    },
    {
        icon: Code2,
        title: "Paso 3: Desarrollo (3-7 días)",
        description: "Empezamos a trabajar de inmediato. Sin pedirte anticipo.",
        color: "text-brand-warm"
    },
    {
        icon: Eye,
        title: "Paso 4: Vista previa completa",
        description: "Te mostramos el resultado final para que lo revises y nos des tu opinión.",
        color: "text-brand-coral"
    },
    {
        icon: Rocket,
        title: "Paso 5: Pagas y lanzamos",
        description: "Solo si te gusta el resultado, realizas el pago y publicamos tu proyecto.",
        color: "text-primary"
    }
];

const HowWeWork = () => {
    return (
        <section id="como-trabajamos" className="relative py-32 px-6 bg-surface-elevated/10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="tag mb-4">Proceso</div>
                    <h2 className="heading-section">
                        Así <span className="text-primary">trabajamos</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Transparencia total desde el primer contacto. Sin riesgos para ti.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0" />
                            )}

                            <div className={`w-20 h-20 rounded-2xl glass border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 bg-background/50`}>
                                <step.icon className={`w-10 h-10 ${step.color}`} />
                            </div>

                            <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
