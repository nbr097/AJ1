import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import miniLogo from '../assets/logo/minilogo.png';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../lib/contact';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-white text-brand-dark">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-start gap-2 pt-1">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <img src={miniLogo} alt="AJ Smart Move logo" />
                        </div>
                        <div className="flex flex-col leading-none -mt-1">
                            <span className="text-2xl font-black tracking-tight text-brand-red uppercase">
                                SMART <span className="text-brand-red">MOVE</span>
                            </span>
                            <span className="text-[10px] sm:text-xs uppercase text-brand-dark font-black tracking-wider">
                                Removals & Storage
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium hover:text-brand-dark hover:underline underline-offset-4 transition-colors">Home</Link>
                        <a href="/#services" className="text-sm font-medium hover:text-brand-dark hover:underline underline-offset-4 transition-colors">Services</a>
                        <Link to="/storage" className="text-sm font-medium hover:text-brand-dark hover:underline underline-offset-4 transition-colors">Storage</Link>
                        <Link to="/tips" className="text-sm font-medium hover:text-brand-dark hover:underline underline-offset-4 transition-colors">Moving Tips</Link>
                        <a href="/#reviews" className="text-sm font-medium hover:text-brand-dark hover:underline underline-offset-4 transition-colors">Reviews</a>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium hover:text-brand-dark hover:underline underline-offset-4 transition-colors">Contact</a>
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-8">
                        <a href="tel:0426464064" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-brand-dark hover:underline underline-offset-4">
                            <Phone className="w-4 h-4" />
                            0426 464 064
                        </a>
                        <Link
                            to="/quote"
                            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-brand-dark bg-brand-yellow hover:bg-yellow-400 rounded-full btn-press shadow-md"
                        >
                            Calculate your move
                        </Link>
                        <button
                            type="button"
                            className="lg:hidden p-2 text-brand-dark"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: EASE_OUT }}
                            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-2 shadow-xl"
                        >
                            <Link to="/" onClick={closeMenu} className="text-lg font-medium p-3 rounded-lg hover:bg-gray-50">Home</Link>
                            <a href="/#services" onClick={closeMenu} className="text-lg font-medium p-3 rounded-lg hover:bg-gray-50">Services</a>
                            <Link to="/storage" onClick={closeMenu} className="text-lg font-medium p-3 rounded-lg hover:bg-gray-50">Storage</Link>
                            <Link to="/tips" onClick={closeMenu} className="text-lg font-medium p-3 rounded-lg hover:bg-gray-50">Moving Tips</Link>
                            <a href="/#reviews" onClick={closeMenu} className="text-lg font-medium p-3 rounded-lg hover:bg-gray-50">Reviews</a>
                            <a href={`mailto:${CONTACT_EMAIL}`} onClick={closeMenu} className="text-lg font-medium p-3 rounded-lg hover:bg-gray-50">Contact</a>
                            <Link to="/quote" onClick={closeMenu} className="w-full text-center py-3 font-bold bg-brand-yellow rounded-lg text-brand-dark btn-press">
                                Calculate your move
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-brand-dark text-white py-12">
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                <img src={miniLogo} alt="AJ Smart Move logo" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-black tracking-tight text-brand-red uppercase">
                                    SMART <span className="text-brand-red">MOVE</span>
                                </span>
                                <span className="text-[10px] sm:text-xs uppercase text-white font-black tracking-wider">
                                    Removals & Storage
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Professional, reliable, and stress-free removals in Caboolture and beyond.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-bold mb-4 text-brand-yellow text-base">Services</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/#services" className="hover:text-white">Home Removals</a></li>
                            <li><a href="/#services" className="hover:text-white">Office Relocations</a></li>
                            <li><a href="/#services" className="hover:text-white">Packing Services</a></li>
                            <li><Link to="/storage" className="hover:text-white">Storage Solutions</Link></li>
                            <li><Link to="/tips" className="hover:text-white">Moving Tips</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold mb-4 text-brand-yellow text-base">Contact</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="tel:0426464064" className="flex items-center gap-2 hover:text-white">
                                    <Phone className="w-4 h-4" aria-hidden="true" /> 0426 464 064
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
                            </li>
                            <li>Caboolture, QLD</li>
                            <li>ABN: 56 964 595 186</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold mb-4 text-brand-yellow text-base">Follow us</h2>
                        <div className="flex gap-4">
                            <a
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="AJ Smart Move on Facebook"
                                className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors"
                            >
                                <Facebook className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="AJ Smart Move on Instagram"
                                className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors"
                            >
                                <Instagram className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} AJ Smart Move. All rights reserved.</p>
                    <Link to="/terms" className="hover:text-brand-yellow transition-colors">Terms & Conditions</Link>
                </div>
            </footer>
        </div>
    );
};
