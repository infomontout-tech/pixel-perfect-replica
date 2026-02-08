import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Banknote, Shield } from 'lucide-react';

const SecurityPayments = () => {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 md:p-16 border-primary/20 bg-primary/5 text-center relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-bold uppercase tracking-widest mb-8 border border-[#25D366]/20">
                            <ShieldCheck className="w-4 h-4" />
                            Pago 100% Seguro
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black mb-6">
                            Aceptamos todos los <span className="text-primary">métodos de pago</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                            Solo pagas una vez que estés satisfecho con el resultado. Sin letras chiquitas, sin cargos ocultos.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group">
                                    <CreditCard className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Tarjeta</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group">
                                    <Banknote className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Transferencia</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group">
                                    <div className="font-black text-xl italic">MP</div>
                                </div>
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Mercado Pago</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecurityPayments;
