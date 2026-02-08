import { useState, useEffect } from 'react';

const PromoCountdown = () => {
    // Editable spots variable
    const availableSpots = 12;
    const totalSpots = 20;

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Logic to reset every 7 days (based on current date)
        const calculateTargetDate = () => {
            const now = new Date();
            const startOfWeek = new Date(now);
            // reset day (let's say every Sunday night)
            const daysToSunday = 7 - now.getDay();
            const target = new Date(now);
            target.setDate(now.getDate() + (daysToSunday === 0 ? 7 : daysToSunday));
            target.setHours(23, 59, 59, 999);
            return target;
        };

        const target = calculateTargetDate();

        const timer = setInterval(() => {
            const difference = target.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                // If it reaches 0, it would effectively reset on next render or mount
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="glass-card border-primary/20 bg-primary/5 p-6 mb-8 max-w-lg">
            <div className="flex flex-col gap-4">
                {/* Spots Counter */}
                <div className="flex items-center justify-between bg-background/40 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <p className="text-sm font-bold uppercase tracking-wide">
                            🔥 Solo quedan <span className="text-primary">{availableSpots} de {totalSpots}</span> cupos disponibles este mes
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                        Promoción termina en:
                    </p>

                    <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="bg-background/40 rounded-xl p-3 text-center border border-white/5">
                                <div className="text-2xl font-black text-primary font-mono">{value}</div>
                                <div className="text-[10px] text-muted-foreground uppercase mt-1 tracking-wider">{
                                    unit === 'days' ? 'Días' :
                                        unit === 'hours' ? 'Hrs' :
                                            unit === 'minutes' ? 'Min' : 'Seg'
                                }</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoCountdown;
