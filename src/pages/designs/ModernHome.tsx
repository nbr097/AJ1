import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Home, Star, Shield, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ModernHome = () => {
    return (
        <div className="overflow-hidden">
            {/* Modern Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-red/5 via-transparent to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark/5 border border-brand-dark/10 text-brand-dark font-bold text-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available for bookings
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-brand-dark"
                        >
                            Move <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">Smarter.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-500 max-w-lg font-medium"
                        >
                            The next generation of removal services. Precision planning, modern fleet, and a team that actually cares about your stuff.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/quote"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-dark hover:bg-brand-red rounded-full transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                Get Instant Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-transparent border-2 border-brand-dark/10 hover:border-brand-dark rounded-full transition-all"
                            >
                                Explore Services
                            </a>
                        </motion.div>

                        <div className="pt-8 flex items-center gap-8 border-t border-gray-100">
                            <div>
                                <p className="text-3xl font-black text-brand-dark">5.0</p>
                                <div className="flex text-brand-yellow">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-sm text-gray-400 font-medium">Google Rating</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-brand-dark">10k+</p>
                                <p className="text-sm text-gray-400 font-medium">Successful Moves</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/images/hero-truck.jpg"
                                alt="Modern Moving"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Fully Insured</p>
                                        <p className="text-sm text-white/70">Comprehensive coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-yellow rounded-full blur-3xl opacity-20 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-red rounded-full blur-3xl opacity-20 animate-pulse" />
                    </motion.div>
                </div>
            </section>

            {/* Modern Services Grid */}
            <section id="services" className="py-32 bg-brand-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Premium Services<br />For Every Move.</h3>
                        </div>
                        <p className="text-gray-400 max-w-md text-lg">
                            We've reimagined the moving process to be efficient, transparent, and surprisingly pleasant.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Home, title: "Residential", desc: "From studio apartments to family estates, we handle your home with white-glove care." },
                            { icon: Truck, title: "Commercial", desc: "Minimize downtime with our strategic business relocation planning and execution." },
                            { icon: Package, title: "Packing", desc: "Premium materials and expert techniques to protect your most valuable assets." },
                            { icon: Clock, title: "Storage", desc: "Secure, climate-controlled facilities for short or long-term safekeeping." },
                            { icon: MapPin, title: "Interstate", desc: "Seamless long-distance moves with real-time tracking and dedicated support." },
                            { icon: Shield, title: "Insurance", desc: "Full comprehensive transit insurance included for complete peace of mind." },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-brand-red/20 rounded-2xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern CTA */}
            <section className="py-32 bg-brand-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-brand-red rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready for a smarter move?</h2>
                            <p className="text-xl text-white/90 mb-12 font-medium">Join thousands of satisfied customers who chose the modern way to move.</p>
                            <Link
                                to="/quote"
                                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-brand-red bg-white rounded-full transition-all hover:scale-105 shadow-xl"
                            >
                                Get Your Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
