import { motion } from 'framer-motion';
import { Warehouse, ShieldCheck, Container, Car, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StoragePage = () => {
    return (
        <div className="min-h-screen bg-brand-white py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-2xl mb-6">
                        <Warehouse className="w-8 h-8 text-brand-red" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Secure Storage Solutions</h1>
                    <p className="text-xl text-gray-600">Safe, affordable, and flexible storage right here in Caboolture.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-brand-yellow" />
                                Why Store With Us?
                            </h2>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5" />
                                    <span><strong>Fully Secure Facility:</strong> Your belongings are safe in our monitored premises.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5" />
                                    <span><strong>Flexible Terms:</strong> Short or long term options available to suit your needs.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5" />
                                    <span><strong>Affordable Rates:</strong> Prices start from as little as <strong>$25 per week</strong>.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3 text-brand-dark font-medium">
                                <MapPin className="w-5 h-5 text-brand-red" />
                                38 Cessna Drive, Caboolture
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-brand-dark text-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-16 -mt-16" />

                        <h2 className="text-2xl font-bold mb-8 relative z-10">Storage Options</h2>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Container className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Container Storage</h3>
                                    <p className="text-gray-400 text-sm">Store your own container or rent one of ours. Perfect for household goods.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Car className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Vehicle Storage</h3>
                                    <p className="text-gray-400 text-sm">Secure onsite parking for caravans, cars, and trailers.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Short & Long Term</h3>
                                    <p className="text-gray-400 text-sm">Whether it's a few weeks or a few years, we've got you covered.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <div className="bg-brand-yellow/10 rounded-2xl p-8 md:p-12 border border-brand-yellow/20 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-brand-dark mb-4">Need a Storage Quote?</h3>
                        <p className="text-gray-600 mb-8">
                            Contact us today to discuss your storage requirements and get a tailored price.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a href="tel:0426464064" className="w-full md:w-auto px-8 py-3 bg-white text-brand-dark font-bold rounded-full border-2 border-brand-dark hover:bg-brand-gray transition-colors">
                                Call 0426 464 064
                            </a>
                            <Link to="/quote" className="w-full md:w-auto px-8 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg">
                                Get a Quote Online
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
