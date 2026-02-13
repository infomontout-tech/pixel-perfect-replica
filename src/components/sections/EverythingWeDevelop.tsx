import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    ShoppingCart,
    Ticket,
    Target,
    Store,
    Users,
    Settings,
    CheckCircle2,
    Clock,
    Tag,
    MessageCircle,
    Plus,
    Minus
} from 'lucide-react';

const services = [
    {
        id: 'web',
        icon: Globe,
        title: "Páginas Web Profesionales",
        description: "Sitios web modernos, rápidos y responsivos para tu negocio",
        details: "Desarrollamos una presencia digital sólida que posicione a tu empresa frente a la competencia. Nos enfocamos en la velocidad de carga y la experiencia del usuario.",
        includes: ["Diseño personalizado", "Optimización SEO básica", "Hosting incluido", "Dominio gratis", "Responsive (móvil y tablet)"],
        examples: "Portafolios, sitios corporativos, servicios profesionales.",
        time: "3-5 días",
        price: "Desde $3,900",
        color: "primary"
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: "Tiendas Online (E-commerce)",
        description: "Vende online con pasarela de pagos integrada",
        details: "Tu negocio abierto las 24 horas del día. Gestiona tus productos y recibe pagos de forma automática y segura.",
        includes: ["Catálogo de productos", "Carrito de compras", "Pasarela de pagos (Stripe/Mercado Pago)", "Panel de administración", "Gestión de inventario"],
        examples: "Ropa, tecnología, productos digitales, comida.",
        time: "5-7 días",
        price: "Desde $3,900",
        color: "brand-accent-soft"
    },
    {
        id: 'rifas',
        icon: Ticket,
        title: "Sistemas de Rifas",
        description: "Plataforma completa para rifas online con pagos automáticos",
        details: "La solución perfecta para organizar sorteos profesionales. Olvida los métodos manuales y automatiza la venta de boletos.",
        includes: ["Generación de boletos", "Pagos en línea automáticos", "Sorteo aleatorio", "Panel de control", "Notificaciones automáticas"],
        examples: "Rifas de autos, celulares, viajes, efectivo.",
        time: "5-7 días",
        price: "Desde $3,900",
        color: "brand-warm"
    },
    {
        id: 'landing',
        icon: Target,
        title: "Landing Pages",
        description: "Páginas de aterrizaje optimizadas para captar clientes",
        details: "Diseñadas específicamente para campañas publicitarias (Meta Ads/Google Ads) con el único objetivo de convertir visitas en ventas.",
        includes: ["Diseño persuasivo", "Formularios de contacto", "Integración con WhatsApp", "Optimización de conversión", "Carga ultra rápida"],
        examples: "Lanzamientos, eventos, promociones específicas.",
        time: "3-4 días",
        price: "Desde $3,900",
        color: "brand-coral"
    },
    {
        id: 'pos',
        icon: Store,
        title: "Punto de Venta (POS)",
        description: "Sistema de ventas para tu negocio físico",
        details: "Controla tu caja, inventario y empleados desde cualquier lugar. Un sistema robusto y fácil de usar para el día a día.",
        includes: ["Registro de ventas", "Control de inventario", "Reportes detallados", "Múltiples usuarios", "Impresión de tickets"],
        examples: "Restaurantes, tiendas de abarrotes, farmacias, boutiques.",
        time: "7 días",
        price: "Desde $3,900",
        color: "primary"
    },
    {
        id: 'crm',
        icon: Users,
        title: "CRM (Gestión de Clientes)",
        description: "Administra tus clientes, ventas y seguimiento",
        details: "No pierdas más prospectos. Organiza tu flujo de ventas y mantén un seguimiento puntual de cada oportunidad de negocio.",
        includes: ["Base de datos de clientes", "Pipeline de ventas", "Recordatorios de seguimiento", "Reportes de desempeño", "Automatizaciones"],
        examples: "Inmobiliarias, agencias, despachos de servicios.",
        time: "7 días",
        price: "Desde $3,900",
        color: "brand-accent-soft"
    },
    {
        id: 'custom',
        icon: Settings,
        title: "Sistemas Personalizados",
        description: "¿Tienes una idea específica? La desarrollamos a tu medida",
        details: "Si no encaja en las categorías anteriores, nosotros construimos la solución tecnológica exacta que tu negocio requiere.",
        includes: ["Análisis de requerimientos", "Desarrollo 100% a medida", "Capacitación de uso", "Soporte técnico dedicado", "Escalabilidad asegurada"],
        examples: "Cualquier idea o necesidad específica que tengas.",
        time: "7-10 días según complejidad",
        price: "Cotización personalizada",
        color: "brand-warm"
    }
];

const EverythingWeDevelop = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="que-desarrollamos" className="relative py-32 px-6 bg-surface-elevated/20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="tag mb-4">Servicios Completos</div>
                    <h2 className="heading-section">
                        Todo Lo Que <span className="text-primary">Desarrollamos</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Soluciones tecnológicas diseñadas para impulsar tu crecimiento. Haz clic para conocer los detalles.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`relative overflow-hidden transition-all duration-500 rounded-3xl border ${expandedId === service.id
                                ? 'border-primary/40 bg-primary/5 lg:col-span-1 shadow-2xl'
                                : 'border-white/5 bg-card/50 hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => toggleExpand(service.id)}
                                className="w-full text-left p-8 flex flex-col items-start gap-6 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${expandedId === service.id ? 'bg-primary text-black' : 'bg-primary/10 text-primary group-hover:scale-110'
                                    }`}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                </div>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mt-2">
                                    <span>{expandedId === service.id ? 'Cerrar' : 'Ver Detalles'}</span>
                                    {expandedId === service.id ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {expandedId === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 border-t border-white/10 mt-2 space-y-8">
                                            <p className="text-foreground leading-relaxed">
                                                {service.details}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-8">
                                                <div className="flex flex-col md:flex-row gap-8">
                                                    <div className="flex-1">
                                                        <h4 className="text-primary font-bold text-sm uppercase mb-4 flex items-center gap-2">
                                                            <CheckCircle2 size={16} /> Incluye
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {service.includes.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <span className="text-primary mt-1">✓</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex-1 space-y-6">
                                                        <div>
                                                            <h4 className="text-primary font-bold text-sm uppercase mb-3 flex items-center gap-2">
                                                                💻 Ejemplos
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">{service.examples}</p>
                                                        </div>
                                                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                                                            <div>
                                                                <h4 className="text-primary font-bold text-sm uppercase mb-2 flex items-center gap-2">
                                                                    <Clock size={16} /> Entrega
                                                                </h4>
                                                                <p className="text-sm font-bold">{service.time}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-primary font-bold text-sm uppercase mb-2 flex items-center gap-2">
                                                                    <Tag size={16} /> Inversión
                                                                </h4>
                                                                <p className="text-sm font-bold whitespace-nowrap">{service.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <a
                                                href="https://wa.me/17128882206?text=Hola%20estoy%20interesado%20en%20mi%20desarrollo%20web"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary w-full py-4 flex items-center justify-center gap-3 group/btn shadow-lg"
                                            >
                                                <MessageCircle className="w-5 h-5 fill-current" />
                                                Quiero este servicio
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EverythingWeDevelop;
