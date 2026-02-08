import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    'Tienda en Línea',
    'App Móvil',
    'Punto de Venta',
    'CRM',
    'Sistemas'
];

const FloatingServiceLabels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const positions = [
        { top: '5%', left: '0%', rotate: -12 },
        { top: '25%', right: '0%', rotate: 8 },
        { bottom: '20%', left: '0%', rotate: 15 },
        { bottom: '10%', right: '0%', rotate: -8 },
        { top: '45%', left: '5%', rotate: 5 }
    ];

    return (
        <>
            {services.map((service, index) => {
                const position = positions[index];
                const isVisible = index === currentIndex;

                return (
                    <AnimatePresence key={service} mode="wait">
                        {isVisible && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    rotate: position.rotate
                                }}
                                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut"
                                }}
                                className="absolute z-30 pointer-events-none"
                                style={{
                                    top: position.top,
                                    bottom: position.bottom,
                                    left: position.left,
                                    right: position.right
                                }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="glass-card px-6 py-3 rounded-full border-2 border-primary/30 bg-primary/10 backdrop-blur-md shadow-2xl"
                                >
                                    <span className="text-sm font-bold text-primary whitespace-nowrap">
                                        {service}
                                    </span>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                );
            })}
        </>
    );
};

export default FloatingServiceLabels;
