import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const themes = [
        { id: 'default', name: 'Classic Red', color: '#EF4444' },
        { id: 'ocean', name: 'Ocean Blue', color: '#0EA5E9' },
        { id: 'neon', name: 'Neon Dark', color: '#A855F7' },
        { id: 'modern', name: 'Modern Bold', color: '#2563EB' },
        { id: 'soft', name: 'Friendly', color: '#FF6B6B' },
    ] as const;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-brand-dark"
                title="Change Theme"
            >
                <Palette className="w-4 h-4" />
                <span className="hidden md:inline">Theme</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                        <div className="p-2 space-y-1">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id);
                                        setIsOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-4 h-4 rounded-full border border-gray-200"
                                            style={{ backgroundColor: t.color }}
                                        />
                                        <span className="text-gray-700 font-medium">{t.name}</span>
                                    </div>
                                    {theme === t.id && <Check className="w-4 h-4 text-brand-dark" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
