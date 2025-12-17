import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { TERMS_AND_CONDITIONS, SETTLEMENT_TERMS, HOLIDAY_TERMS, AFTER_HOURS_TERMS } from '../data/terms';

type TermsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onAgree: () => void;
};

export const TermsModal = ({ isOpen, onClose, onAgree }: TermsModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                            <h2 className="text-2xl font-black text-brand-dark">Terms & Conditions</h2>
                            <button
                                type="button"
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm mb-6">
                                Please review and agree to our terms and conditions to proceed with your quote request.
                            </div>

                            {TERMS_AND_CONDITIONS.map((section, index) => (
                                <section key={index}>
                                    <h3 className="text-xl font-bold text-brand-dark mb-4">{section.title}</h3>
                                    <ol className="list-decimal list-outside pl-5 space-y-3 text-sm text-gray-600">
                                        {section.items.map((item, i) => (
                                            <li key={i}>
                                                {typeof item === 'string' ? (
                                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                                ) : (
                                                    <>
                                                        {item.text}
                                                        <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                                                            {item.subItems.map((subItem, j) => (
                                                                <li key={j} dangerouslySetInnerHTML={{ __html: subItem }} />
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                </section>
                            ))}

                            <div className="space-y-6 pt-6 border-t border-gray-100">
                                {[SETTLEMENT_TERMS, HOLIDAY_TERMS, AFTER_HOURS_TERMS].map((term, index) => (
                                    <div key={index}>
                                        <h4 className="font-bold text-brand-dark mb-2">{term.title}</h4>
                                        <p className="text-sm text-gray-600">{term.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col md:flex-row gap-4 justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 font-bold text-gray-500 hover:text-brand-dark hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                type="button"
                                onClick={onAgree}
                                className="flex items-center justify-center gap-2 px-8 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Check className="w-5 h-5" />
                                I Agree & Send Quote
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
