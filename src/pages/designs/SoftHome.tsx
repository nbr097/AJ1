import { motion } from 'framer-motion';
import { ArrowRight, Package, Home, Heart, Coffee, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reviews } from '../../components/Reviews';

export const SoftHome = () => {
    return (
        <div className="overflow-hidden">
            {/* Soft Hero */}
            <section className="relative min-h-[85vh] flex items-center justify-center px-4">
                {/* Background Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-brand-red font-bold text-sm mb-6">
                            <Sun className="w-4 h-4" />
                            Stress-free moving is here
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 leading-tight">
                            Moving made <br />
                            <span className="text-brand-red relative inline-block">
                                friendly.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            We take the heavy lifting off your shoulders with a smile. Professional, careful, and always ready to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/quote"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-brand-yellow hover:bg-yellow-300 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-yellow/20"
                            >
                                Get a Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-600 bg-white border-2 border-gray-100 hover:border-brand-gray hover:bg-brand-gray rounded-full transition-all"
                            >
                                How we help
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="aspect-square bg-brand-gray rounded-[2.5rem] overflow-hidden relative">
                                <img
                                    src="/images/hero-truck.jpg"
                                    alt="Friendly Team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white">
                                            <Heart className="w-6 h-6 fill-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-brand-dark">We care about your stuff</p>
                                            <p className="text-sm text-gray-500">Like it's our own</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Friendly Services */}
            <section id="services" className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Everything you need</h2>
                        <p className="text-gray-500 text-lg">We handle the tricky bits so you can focus on the fun parts of moving.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Home, title: "Home Moves", desc: "Big or small, we move it all with care and precision." },
                            { icon: Package, title: "We Pack", desc: "Don't like boxes? Let us pack everything for you." },
                            { icon: Coffee, title: "Relax", desc: "Sit back and have a coffee while we do the heavy lifting." },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-brand-gray p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-red shadow-sm">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <Reviews />

            {/* Soft CTA */}
            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="bg-brand-red rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-brand-yellow/10 rounded-[3rem] transform rotate-3 scale-105" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to get moving?</h2>
                            <p className="text-xl text-white/90 mb-12 font-medium">Join our happy family of customers today.</p>
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
