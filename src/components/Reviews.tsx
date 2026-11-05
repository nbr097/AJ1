import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

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
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">Trusted by locals</h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-brand-yellow" aria-hidden="true">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <span className="text-lg font-bold text-gray-700">4.9/5 average rating</span>
                    </div>
                    <p className="text-gray-600 text-lg">Don't just take our word for it. Here's what our happy customers have to say about their moving experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.article
                            key={review.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_OUT }}
                            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-yellow/30" aria-hidden="true" />
                            <div className="flex text-brand-yellow mb-4" aria-label={`${review.rating} out of 5 stars`}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <h3 className="font-bold text-brand-dark">{review.name}</h3>
                                    <span className="text-xs text-gray-500">{review.date}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center font-bold text-brand-dark" aria-hidden="true">
                                    {review.name.charAt(0)}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://g.page/r/Cf6fG8z6Gb79EBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-white border-2 border-gray-200 hover:border-brand-yellow hover:bg-brand-yellow/10 rounded-full btn-press"
                    >
                        Read more reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
};
