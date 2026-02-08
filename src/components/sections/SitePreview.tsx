import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Users, Building2, ChevronRight } from 'lucide-react';

const SitePreview = () => {
    return (
        <section id="trabajo-demo" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="tag mb-4">Caso de Éxito</div>
                    <h2 className="heading-section">
                        Proyecto: <span className="text-primary">ConectaTalento</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Dale un vistazo al sistema que desarrollamos para ConectaTalento.

                    </p>
                </div>

                {/* Browser Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]"
                >
                    {/* Browser Header */}
                    <div className="bg-slate-900/80 border-b border-white/5 p-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="bg-black/20 rounded-lg px-4 py-1 text-xs text-muted-foreground font-mono truncate max-w-[200px] md:max-w-md">
                            https://conectamt.mx
                        </div>
                        <div className="w-10" />
                    </div>

                    {/* Site Content Mockup */}
                    <div className="relative h-[500px] md:aspect-video overflow-hidden bg-white text-slate-900 overflow-y-auto custom-scrollbar">
                        {/* Nav */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">C</div>
                                <span className="font-bold text-slate-900 tracking-tight">ConectaTalento</span>
                            </div>
                            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                                <span>Empresas</span>
                                <span>Talento</span>
                                <span>Blog</span>
                                <span className="text-blue-600">Postularse</span>
                            </div>
                            <div className="w-8 md:hidden" />
                        </div>

                        {/* Hero Mockup */}
                        <div className="p-6 md:p-12 text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 bg-gradient-to-br from-blue-50 to-white">
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                    Conecta con el <span className="text-blue-600">Talento Joven</span> de México
                                </h3>
                                <p className="text-sm md:text-base text-slate-600">
                                    La plataforma definitiva para que empresas y jóvenes talentos se encuentren de forma efectiva y rápida.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <div className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-200">
                                        Buscar Empleo <ChevronRight size={16} />
                                    </div>
                                    <div className="border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-700">
                                        Soy Empresa
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-8 md:mt-0">
                                {/* Visual elements representing recruitment */}
                                <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-100 space-y-4 translate-y-0 opacity-100 transition-all duration-700">
                                    {[
                                        { company: "TechNova", role: "Junior Developer", loc: "CDMX", color: "bg-purple-100 text-purple-600" },
                                        { company: "Designly", role: "UI Designer", loc: "Monterrey", color: "bg-pink-100 text-pink-600" },
                                        { company: "MarketFlow", role: "SEO Expert", loc: "Remote", color: "bg-emerald-100 text-emerald-600" },
                                    ].map((job, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg ${job.color} flex items-center justify-center font-bold`}>
                                                    {job.company[0]}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900">{job.role}</div>
                                                    <div className="text-xs text-slate-500">{job.company} • {job.loc}</div>
                                                </div>
                                            </div>
                                            <ChevronRight size={14} className="text-slate-300" />
                                        </div>
                                    ))}
                                </div>
                                {/* Animated floating stats */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-4 md:-right-6 bg-white rounded-xl shadow-lg p-3 border border-slate-100 cursor-default z-10"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] md:text-xs font-bold text-slate-700">54 postulaciones hoy</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Bottom Bar Mockup */}
                        <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white border-t border-slate-50">
                            {[
                                { icon: Users, label: "+5k Usuarios", sub: "Talento activo" },
                                { icon: Building2, label: "+200 Empresas", sub: "Contratando" },
                                { icon: Briefcase, label: "800 Vacantes", sub: "Publicadas este mes" },
                                { icon: MapPin, label: "Todo México", sub: "Remoto y presencial" },
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-blue-600 flex items-center gap-1.5 md:gap-2">
                                        <stat.icon size={14} />
                                        <span className="text-[10px] md:text-sm font-bold text-slate-900">{stat.label}</span>
                                    </div>
                                    <div className="text-[8px] md:text-[10px] text-slate-400 font-medium uppercase tracking-tight">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Overlay to encourage CTA (Desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 hidden md:flex items-end justify-center pb-12">
                        <a
                            href="https://conectamt.mx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-black font-bold rounded-full shadow-2xl flex items-center gap-2 transform translate-y-4 hover:translate-y-0 transition-all"
                        >
                            Visitar Sitio Real <ChevronRight size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Direct Mobile Button */}
                <div className="mt-8 flex justify-center md:hidden">
                    <a
                        href="https://conectamt.mx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 px-8 py-4 shadow-lg active:scale-95 transition-transform"
                    >
                        Ver Página Real <ChevronRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SitePreview;
