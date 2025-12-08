import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Home, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reviews } from '../../components/Reviews';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const ClassicHome = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-white text-brand-dark">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern-red opacity-30" />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="space-y-6"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-red/10 text-brand-red font-bold text-sm">
                            <Star className="w-4 h-4 fill-brand-red" />
                            #1 Rated Removalist in Caboolture
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-tight text-brand-dark">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-brand-yellow">Smart</span> Move <br />
                            For Your Next Chapter.
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-lg leading-relaxed">
                            Experience a stress-free move with AJ Smart Move. Professional, reliable, and careful handling of your prized possessions.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/quote"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-brand-red to-orange-600 hover:from-red-600 hover:to-orange-700 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-red/25"
                            >
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-white border-2 border-gray-100 hover:border-brand-yellow hover:bg-brand-yellow/5 rounded-full transition-all shadow-sm hover:shadow-md"
                            >
                                Our Services
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image / Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block perspective-1000"
                    >
                        <div className="relative z-10 bg-white p-3 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border border-gray-100 group">
                            <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center relative">
                                <img
                                    src="/images/hero-truck.jpg"
                                    alt="AJ Smart Move Truck"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                                            ))}
                                        </div>
                                        <span className="text-white font-bold text-sm">5.0 Star Rating</span>
                                    </div>
                                    <p className="text-white font-bold text-xl">Modern Fleet & Expert Team</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-50 flex items-center gap-3"
                        >
                            <div className="bg-green-100 p-2.5 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-dark leading-tight">Fully Insured</p>
                                <p className="text-xs text-gray-500">For your peace of mind</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-gray"></path>
                    </svg>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-brand-gray relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">What We Do</h2>
                        <h3 className="text-4xl font-black text-brand-dark mb-4">Comprehensive Removal Services</h3>
                        <p className="text-gray-600 text-lg">Whether you're moving down the street or across the state, we have the expertise and equipment to make it smooth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Home, title: "Home Removals", desc: "Careful handling of furniture, appliances, and fragile items for houses of all sizes." },
                            { icon: Package, title: "Packing Services", desc: "Professional packing to ensure your belongings arrive safe and sound." },
                            { icon: Truck, title: "Office Relocations", desc: "Efficient business moves to minimize downtime and get you back to work." },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-brand-yellow/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                                <div className="w-16 h-16 bg-brand-gray rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-300">
                                    <service.icon className="w-8 h-8 text-brand-dark" />
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

            {/* CTA Section */}
            <section className="py-24 bg-brand-red text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Make Your Move?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote in minutes. Our team is ready to help you plan your perfect move.</p>
                    <Link
                        to="/quote"
                        className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-brand-red bg-white rounded-full transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Get Started Now
                    </Link>
                </div>
            </section>
        </div>
    );
};
