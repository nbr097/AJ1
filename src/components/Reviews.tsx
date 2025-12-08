import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Sarah Mitchell",
        rating: 5,
        text: "AJ Smart Move made our house move absolutely stress-free. The team was professional, punctual, and handled our antique furniture with incredible care. Highly recommend!",
        date: "2 weeks ago"
    },
    {
        name: "David Chen",
        rating: 5,
        text: "Best removalists in Caboolture! They were fast, efficient, and very friendly. The price was exactly as quoted with no hidden fees. Will definitely use them again.",
        date: "1 month ago"
    },
    {
        name: "Emma Thompson",
        rating: 5,
        text: "I was worried about moving my piano, but these guys knew exactly what they were doing. Arrived on time, worked hard, and were super polite. Great service!",
        date: "3 months ago"
    }
];

export const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-brand-gray relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Customer Stories</h2>
                    <h3 className="text-4xl font-black text-brand-dark mb-4">Trusted by Locals</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-brand-yellow">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <span className="text-lg font-bold text-gray-700">4.9/5 Average Rating</span>
                    </div>
                    <p className="text-gray-600 text-lg">Don't just take our word for it. Here's what our happy customers have to say about their moving experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-yellow/20" />
                            <div className="flex text-brand-yellow mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <h4 className="font-bold text-brand-dark">{review.name}</h4>
                                    <span className="text-xs text-gray-400">{review.date}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center font-bold text-brand-red">
                                    {review.name.charAt(0)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://g.page/r/Cf6fG8z6Gb79EBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-white border-2 border-brand-gray hover:border-brand-yellow hover:bg-brand-yellow/10 rounded-full transition-all"
                    >
                        Read More Reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
};
