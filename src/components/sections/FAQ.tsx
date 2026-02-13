import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "¿Por qué no piden anticipo?",
            a: "Queremos que veas el resultado antes de pagar. Confiamos plenamente en la calidad de nuestro trabajo y tú decides al final si el proyecto cumple con tus expectativas."
        },
        {
            q: "¿Realmente pueden entregar en 7 días?",
            a: "Sí. Contamos con procesos optimizados que nos permiten desarrollar sitios web y tiendas online funcionales en una semana. Proyectos más complejos pueden tomar un poco más, pero siempre con metas claras."
        },
        {
            q: "¿Qué incluye el precio de lanzamiento de $3,900?",
            a: "Incluye el desarrollo de tu landing page o sitio web, dominio gratis (.com o .mx), hosting, certificado SSL, optimización de velocidad y botón de WhatsApp directo."
        },
        {
            q: "¿Trabajan con startups sin financiamiento?",
            a: "¡Absolutamente! El 70% de nuestros clientes son startups pre-seed. Ofrecemos planes de pago flexibles y nos adaptamos a tu presupuesto. También podemos empezar con un MVP básico."
        },
        {
            q: "¿Qué tecnologías usan?",
            a: "React, Next.js, Node.js, Python, PostgreSQL, MongoDB, Tailwind CSS. Usamos lo más moderno y escalable del mercado. Todo código limpio, documentado y listo para crecer."
        },
        {
            q: "¿Dan mantenimiento después del lanzamiento?",
            a: "Sí. 30 días de soporte incluido. Después ofrecemos planes desde $500/mes que incluyen actualizaciones, monitoreo 24/7, backups automáticos y mejoras continuas."
        },
        {
            q: "¿Puedo ver el código antes de pagar?",
            a: "Por supuesto. Entregamos el código completo con documentación. Eres dueño al 100% de tu proyecto. Sin ataduras ni dependencias."
        }
    ];

    return (
        <section className="relative py-24 px-6 bg-surface-elevated/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="tag mb-4">Preguntas Frecuentes</div>
                    <h2 className="heading-section mb-6">
                        ¿Tienes
                        <span className="text-primary"> Dudas?</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card border border-white/5 overflow-hidden group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-lg pr-4 group-hover:text-primary transition-colors">{faq.q}</span>
                                <span className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground mb-4">¿No encuentras tu respuesta?</p>

                    <a
                        href="https://wa.me/17128882206?text=Hola%20estoy%20interesado%20en%20mi%20desarrollo%20web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-full font-semibold transition-all group"
                    >
                        Pregúntanos por WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
