import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Home, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reviews } from '../components/Reviews';
import { FleetGallery } from '../components/FleetGallery';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// One entrance sequence for the hero. Nothing loops.
const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE_OUT }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.08
        }
    }
};

const services = [
    { icon: Home, title: "Home Removals", desc: "Careful handling of furniture, appliances, and fragile items for houses of all sizes." },
    { icon: Package, title: "Packing Services", desc: "Professional packing to ensure your belongings arrive safe and sound." },
    { icon: Truck, title: "Office Relocations", desc: "Efficient business moves to minimise downtime and get you back to work." },
];

export const HomePage = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-start overflow-hidden bg-brand-white text-brand-dark pt-0">
                {/* Full Width Banner */}
                <div className="w-full bg-brand-yellow py-4 md:py-6 relative z-20 flex justify-center items-center shadow-md px-2">
                    <div className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide flex flex-wrap justify-center items-center gap-x-2 gap-y-1 uppercase text-center leading-none">
                        <span className="text-black font-black">AJ</span>
                        <span
                            className="text-brand-red font-black px-1 relative tracking-widest text-stroke-brand"
                        >
                            Smart Move
                        </span>
                        <span className="text-black font-black">Removals & Storage</span>
                    </div>
                </div>

                {/* Background texture (static) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern-red opacity-30" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center flex-grow pt-12 pb-40">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="space-y-6"
                    >
                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-brand-dark">
                            The smart move <br />
                            for your next chapter.
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-lg leading-relaxed">
                            Experience a stress-free move with AJ Smart Move. Professional, reliable, and careful handling of your prized possessions.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/quote"
                                className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-brand-red hover:bg-red-600 rounded-full btn-press shadow-md"
                            >
                                Calculate your move
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-white border-2 border-gray-200 hover:border-brand-yellow hover:bg-brand-yellow/5 rounded-full btn-press shadow-sm"
                            >
                                Our services
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image / Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
                        className="relative hidden md:block"
                    >
                        <div className="relative z-10 bg-white p-3 rounded-3xl shadow-xl border border-gray-100 group">
                            <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center relative">
                                <img
                                    src="/images/hero-truck.jpg"
                                    style={{ objectPosition: "left" }}
                                    alt="AJ Smart Move truck"
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex text-brand-yellow">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                                            ))}
                                        </div>
                                        <span className="text-white font-bold text-sm">4.9/5 average rating</span>
                                    </div>
                                    <p className="text-white font-bold text-xl">Modern fleet and expert team</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-red font-bold text-sm border border-brand-red/20 shadow-md">
                                <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                                Caboolture based removalists
                            </div>
                        </div>
                        {/* Static badge: a claim the customer can check, no looping motion */}
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg z-20 border border-gray-100 flex items-center gap-3">
                            <div className="bg-green-100 p-2.5 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-700" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-dark leading-tight">Fully insured</p>
                                <p className="text-xs text-gray-600">For your peace of mind</p>
                            </div>
                        </div>
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
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">Comprehensive removal services</h2>
                        <p className="text-gray-600 text-lg">Whether you're moving down the street or across the state, we have the expertise and equipment to make it smooth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-brand-yellow transition-colors duration-150"
                            >
                                <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors duration-150">
                                    <service.icon className="w-7 h-7 text-brand-dark" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Gallery */}
            <FleetGallery />

            {/* Reviews Section */}
            <Reviews />

            {/* CTA Section */}
            <section className="py-24 bg-brand-red text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Ready to make your move?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote in minutes. Our team is ready to help you plan your perfect move.</p>
                    {/* Yellow on red: the button must differ from the section background */}
                    <Link
                        to="/quote"
                        className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow text-brand-dark font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 btn-press w-full md:w-auto"
                    >
                        Get a quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};
