import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { cn } from '../../lib/utils';

export const ModernLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-white text-brand-dark selection:bg-brand-red selection:text-white">
            {/* Modern Floating Header */}
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4",
                scrolled ? "py-2" : "py-4"
            )}>
                <div className={cn(
                    "max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
                    scrolled || isMenuOpen ? "bg-white/80 backdrop-blur-lg shadow-lg border border-white/20" : "bg-transparent"
                )}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-brand-yellow rounded-xl flex items-center justify-center text-white font-black text-xl transform group-hover:rotate-3 transition-transform">
                            AJ
                        </div>
                        <span className="text-xl font-black tracking-tighter text-brand-dark">
                            Smart<span className="text-brand-red">Move</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Home', 'Services', 'Storage', 'Tips', 'Reviews'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-sm font-bold text-gray-600 hover:text-brand-red transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <Link
                            to="/quote"
                            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-brand-dark hover:bg-brand-red rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                            className="md:hidden p-2 text-brand-dark"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex flex-col gap-2 animate-in slide-in-from-top-5">
                        {['Home', 'Services', 'Storage', 'Tips', 'Reviews', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-lg font-bold p-3 hover:bg-gray-50 rounded-xl transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            to="/quote"
                            className="w-full text-center py-4 font-black bg-brand-red text-white rounded-xl mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24">
                {children}
            </main>

            {/* Modern Footer */}
            <footer className="bg-brand-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-white text-brand-dark rounded-xl flex items-center justify-center font-black text-xl">AJ</div>
                                <span className="text-2xl font-black tracking-tighter">SmartMove</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Redefining the moving experience with modern technology, expert care, and transparent pricing.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6">Services</h4>
                            <ul className="space-y-4 text-gray-400">
                                {['Home Removals', 'Office Relocations', 'Packing Services', 'Storage Solutions'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-400">
                                {['About Us', 'Our Team', 'Reviews', 'Moving Tips'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6">Contact</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-brand-red" />
                                    <span className="font-bold text-white">0426 464 064</span>
                                </li>
                                <li>Caboolture, QLD</li>
                                <li>ABN: 56 964 595 186</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} AJ Smart Move. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link to="/terms" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
