import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { TERMS_AND_CONDITIONS, SETTLEMENT_TERMS, HOLIDAY_TERMS, AFTER_HOURS_TERMS } from '../data/terms';

export const TermsPage = () => {
    return (
        <div className="min-h-screen bg-brand-white py-24 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-brand-red" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Terms & Conditions</h1>
                    <p className="text-xl text-gray-600">Please read our terms of service carefully.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 space-y-12"
                >
                    {TERMS_AND_CONDITIONS.map((section, index) => (
                        <section key={index}>
                            <h2 className="text-2xl font-bold text-brand-dark border-b-2 border-brand-yellow/20 pb-4 mb-6">{section.title}</h2>
                            <ol className="list-decimal list-outside pl-5 space-y-4 text-gray-600 leading-relaxed">
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

                    <section className="space-y-8 pt-8 border-t border-gray-100">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-dark border-b border-gray-100 pb-2">{SETTLEMENT_TERMS.title}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {SETTLEMENT_TERMS.content}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-dark border-b border-gray-100 pb-2">{HOLIDAY_TERMS.title}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {HOLIDAY_TERMS.content}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-dark border-b border-gray-100 pb-2">{AFTER_HOURS_TERMS.title}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {AFTER_HOURS_TERMS.content}
                            </p>
                        </section>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};
