import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle, Calendar, Truck, Home, FileText } from 'lucide-react';

export const TipsPage = () => {
    return (
        <div className="min-h-screen bg-brand-white py-24 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-yellow/10 rounded-2xl mb-6">
                        <Lightbulb className="w-8 h-8 text-brand-yellow" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Moving Tips</h1>
                    <p className="text-xl text-gray-600">Expert advice to make your move smooth and stress-free.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 space-y-12"
                >
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-brand-red" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-dark">One Month Before Moving</h2>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Book your obligation free quote with AJ Smart Move Removals & Storage.",
                                "Sort through your belongings donating what you no longer want or need.",
                                "Decide whether to pack your household yourself. Arrange for us to deliver your cartons, tape and paper to allow plenty of time if packing.",
                                "Arrange insurance.",
                                "Arrange travel for your pets.",
                                "If driving a long distance have your car serviced.",
                                "Back up important computer files."
                            ].map((tip, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                    <CheckCircle className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                                <Home className="w-5 h-5 text-brand-yellow" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-dark">Getting Ready for the New Home</h2>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "If possible look through your new home to get a clear idea of where you would like furniture placed on moving day.",
                                "Notify the post office of your change of address. You may like to have your mail diverted."
                            ].map((tip, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-brand-dark/5 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-brand-dark" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-dark">Change of Address Checklist</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Bank",
                                "Insurances",
                                "Electoral Roll",
                                "Doctor",
                                "Schools",
                                "Clubs",
                                "Subscriptions / Papers",
                                "Estate Agents"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                                    <span className="font-medium text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="bg-brand-red/5 p-6 rounded-xl border border-brand-red/10 mt-8">
                        <div className="flex items-start gap-4">
                            <Truck className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-brand-dark mb-2">Ready to make your move?</h3>
                                <p className="text-gray-600 mb-4">
                                    Our team at AJ Smart Move is here to help with every step of the process.
                                </p>
                                <a href="/quote" className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white bg-brand-red hover:bg-red-600 rounded-full transition-all">
                                    Get a Free Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
