import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-white text-brand-dark">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            AJ
                        </div>
                        <span className="text-xl font-bold tracking-tight text-brand-dark">
                            Smart<span className="text-brand-red">Move</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium hover:text-brand-red transition-colors">Home</Link>
                        <a href="/#services" className="text-sm font-medium hover:text-brand-red transition-colors">Services</a>
                        <Link to="/storage" className="text-sm font-medium hover:text-brand-red transition-colors">Storage</Link>
                        <Link to="/tips" className="text-sm font-medium hover:text-brand-red transition-colors">Moving Tips</Link>
                        <a href="/#reviews" className="text-sm font-medium hover:text-brand-red transition-colors">Reviews</a>
                        <a href="/#contact" className="text-sm font-medium hover:text-brand-red transition-colors">Contact</a>
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a href="tel:0426464064" className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-red">
                            <Phone className="w-4 h-4" />
                            0426 464 064
                        </a>
                        <Link
                            to="/quote"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-brand-dark bg-brand-yellow hover:bg-yellow-400 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-yellow/20"
                        >
                            Get a Quote
                        </Link>
                        <button
                            className="md:hidden p-2 text-brand-dark"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                        <Link to="/" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Home</Link>
                        <a href="/#services" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Services</a>
                        <Link to="/storage" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Storage</Link>
                        <Link to="/tips" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Moving Tips</Link>
                        <a href="/#reviews" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Reviews</a>
                        <a href="/#contact" className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Contact</a>
                        <Link to="/quote" className="w-full text-center py-3 font-bold bg-brand-yellow rounded-lg text-brand-dark">
                            Get a Quote
                        </Link>
                    </div>
                )}
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
                            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white font-bold">AJ</div>
                            <span className="text-lg font-bold">SmartMove</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Professional, reliable, and stress-free removals in Caboolture and beyond.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-brand-yellow">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Home Removals</a></li>
                            <li><a href="#" className="hover:text-white">Office Relocations</a></li>
                            <li><a href="#" className="hover:text-white">Packing Services</a></li>
                            <li><Link to="/storage" className="hover:text-white">Storage Solutions</Link></li>
                            <li><Link to="/tips" className="hover:text-white">Moving Tips</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-brand-yellow">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0426 464 064</li>
                            <li>Caboolture, QLD</li>
                            <li>ABN: 56 964 595 186</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-brand-yellow">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} AJ Smart Move. All rights reserved.</p>
                    <Link to="/terms" className="hover:text-brand-yellow transition-colors">Terms & Conditions</Link>
                </div>
            </footer>
        </div>
    );
};
