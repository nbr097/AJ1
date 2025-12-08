import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Instagram, Heart } from 'lucide-react';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const SoftLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-white text-brand-dark selection:bg-brand-yellow selection:text-brand-dark">
            {/* Soft Floating Header */}
            <div className="container mx-auto px-4 md:px-6 pt-6 absolute top-0 left-0 right-0 z-50">
                <header className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-sm rounded-3xl px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl transform group-hover:rotate-12 transition-transform">
                            AJ
                        </div>
                        <span className="text-xl font-bold tracking-tight text-brand-dark">
                            Smart<span className="text-brand-red">Move</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {['Home', 'Services', 'Storage', 'Tips', 'Reviews'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-brand-red hover:bg-brand-red/5 rounded-full transition-all"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeSwitcher />
                        <Link
                            to="/quote"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-brand-dark bg-brand-yellow hover:bg-yellow-300 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-yellow/20"
                        >
                            Get a Quote
                        </Link>
                        <button
                            className="md:hidden p-2 text-brand-dark bg-gray-100 rounded-full"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </header>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-3xl p-4 shadow-xl border border-gray-100 flex flex-col gap-2 animate-in slide-in-from-top-5">
                        {['Home', 'Services', 'Storage', 'Tips', 'Reviews', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-lg font-bold p-3 hover:bg-brand-gray rounded-2xl text-center text-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Main Content */}
            <main className="flex-grow pt-32">
                {children}
            </main>

            {/* Soft Footer */}
            <footer className="bg-white border-t border-gray-100 py-16 mt-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-brand-gray rounded-[3rem] p-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold">AJ</div>
                                <span className="text-xl font-bold text-brand-dark">SmartMove</span>
                            </div>
                            <p className="text-gray-500 leading-relaxed">
                                Making moves easier, one box at a time. Friendly service, professional care.
                            </p>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all shadow-sm">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all shadow-sm">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6 text-brand-dark">Services</h4>
                            <ul className="space-y-3 text-gray-500">
                                <li><a href="#" className="hover:text-brand-red transition-colors">Home Removals</a></li>
                                <li><a href="#" className="hover:text-brand-red transition-colors">Office Relocations</a></li>
                                <li><a href="#" className="hover:text-brand-red transition-colors">Packing Services</a></li>
                                <li><Link to="/storage" className="hover:text-brand-red transition-colors">Storage Solutions</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6 text-brand-dark">Contact</h4>
                            <ul className="space-y-3 text-gray-500">
                                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-red" /> 0426 464 064</li>
                                <li>Caboolture, QLD</li>
                                <li>ABN: 56 964 595 186</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                                <Heart className="w-8 h-8 text-brand-red mx-auto mb-3 fill-brand-red" />
                                <p className="font-bold text-brand-dark">We love what we do!</p>
                            </div>
                            <p className="text-sm text-gray-400 text-center mt-6">
                                © {new Date().getFullYear()} AJ Smart Move.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
