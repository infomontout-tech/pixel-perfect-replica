import { useState } from 'react';
import { motion } from 'framer-motion';

const ROICalculator = () => {
    const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
    const improvement = 0.3;
    const montoutPrice = 3900;

    const monthlyGain = monthlyRevenue * improvement;
    const roi = ((monthlyGain * 12 - montoutPrice) / montoutPrice * 100).toFixed(0);
    const paybackDays = Math.ceil((montoutPrice / monthlyGain) * 30);

    return (
        <section className="relative py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 sm:p-12 border-primary/10 relative overflow-hidden"
                >
                    {/* Background Gradient */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="heading-section mb-4">
                            ¿Cuánto Puedes <span className="text-primary">Ahorrar y Ganar?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">Calcula el retorno de inversión de automatizar tu negocio</p>
                    </div>

                    <div className="mb-10 relative z-10">
                        <label className="block text-sm font-medium text-muted-foreground mb-4">
                            Ingresos mensuales actuales: <span className="text-white font-bold text-xl ml-2">${monthlyRevenue.toLocaleString()} MXN</span>
                        </label>
                        <input
                            type="range"
                            min="10000"
                            max="500000"
                            step="5000"
                            value={monthlyRevenue}
                            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                            className="w-full h-3 bg-secondary/50 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-hover transition-colors"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-3 font-medium">
                            <span>$10K</span>
                            <span>$500K</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 relative z-10">
                        <div className="bg-background/40 rounded-2xl p-6 border border-white/5 text-center">
                            <div className="text-3xl font-black text-brand-accent-soft mb-2">
                                ${monthlyGain.toLocaleString()}
                            </div>
                            <div className="text-sm text-foreground/80 font-medium">Ganancia mensual extra</div>
                            <div className="text-xs text-muted-foreground mt-2">(30% de mejora estimada)</div>
                        </div>

                        <div className="bg-background/40 rounded-2xl p-6 border border-white/5 text-center">
                            <div className="text-3xl font-black text-primary mb-2">
                                {paybackDays} días
                            </div>
                            <div className="text-sm text-foreground/80 font-medium">Recuperas inversión</div>
                            <div className="text-xs text-muted-foreground mt-2">($3,900 inicial)</div>
                        </div>

                        <div className="bg-background/40 rounded-2xl p-6 border border-white/5 text-center">
                            <div className="text-3xl font-black text-brand-warm mb-2">
                                {roi}%
                            </div>
                            <div className="text-sm text-foreground/80 font-medium">ROI anual</div>
                            <div className="text-xs text-muted-foreground mt-2">(Retorno proyectado)</div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-xl relative z-10">
                        <p className="text-center text-muted-foreground">
                            💡 <span className="font-bold text-primary-foreground bg-primary px-1 rounded">En {paybackDays} días</span> recuperas tu inversión.
                            Después son <span className="font-bold text-brand-accent-soft">${(monthlyGain * 11).toLocaleString()}/año</span> de ganancia pura.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ROICalculator;
