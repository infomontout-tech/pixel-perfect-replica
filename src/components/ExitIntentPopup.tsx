import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExitIntentPopupProps {
    onClose: () => void;
}

const ExitIntentPopup = ({ onClose }: ExitIntentPopupProps) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="glass-card w-full max-w-lg p-8 relative overflow-hidden border-primary/20 shadow-2xl shadow-primary/10"
                >
                    {/* Decorative Glow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-brand-accent-soft to-brand-warm" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                        <X size={20} />
                    </button>

                    <div className="text-center">
                        <div className="text-6xl mb-4 animate-bounce">⏰</div>
                        <h3 className="text-3xl font-black mb-4">
                            ¡Espera! <span className="text-primary">No Te Vayas</span>
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            Agenda una <span className="text-foreground font-bold">consultoría GRATIS</span> de 30 minutos y te mostramos cómo podemos llevar tu idea a la realidad.
                        </p>

                        <div className="bg-secondary/30 rounded-xl p-6 mb-8 border border-white/5 text-left space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full text-green-500 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-sm text-foreground/90">Análisis técnico de tu proyecto</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full text-green-500 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-sm text-foreground/90">Cotización personalizada en el momento</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full text-green-500 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-sm text-foreground/90">Plan de desarrollo paso a paso</p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/523788856728?text=Hola%20Montout,%20quiero%20agendar%20mi%20consultoría%20GRATIS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full btn-primary py-4 text-lg mb-4 hover:shadow-lg hover:shadow-primary/20"
                        >
                            Agendar Consultoría Gratis
                        </a>

                        <button
                            onClick={onClose}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                        >
                            No gracias, prefiero seguir navegando
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
