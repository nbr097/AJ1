import { motion } from 'framer-motion';

// Import images directly so Vite handles hashing/optimization
import truck1 from '../assets/trucks/truck-1.jpg';
import truck2 from '../assets/trucks/truck-2.jpg';
import truck3 from '../assets/trucks/truck-3.jpg';
import truck4 from '../assets/trucks/truck-4.jpg';

const TRUCK_IMAGES = [
    { src: truck1, alt: 'AJ Smart Move Large Truck Profile', title: "Modern Fleet", desc: "Equipped for any move" },
    { src: truck2, alt: 'AJ Smart Move Truck with Residential House', title: "Residential Experts", desc: "Careful home removals" },
    { src: truck3, alt: 'AJ Smart Move Truck Tropical Location', title: "Anywhere in QLD", desc: "Long distance available" },
    { src: truck4, alt: 'AJ Smart Move Truck Beachside', title: "Coastal Moves", desc: "From beach to bush" },
];

export const FleetGallery = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2"
                    >
                        Our Fleet
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-brand-dark mb-6"
                    >
                        Modern, Clean & Reliable.
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Take a look at our fully equipped trucks ready to handle moves of any size with care and precision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {TRUCK_IMAGES.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' :
                                index === 1 ? 'md:col-span-2' :
                                    ''
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                loading="lazy"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-1/2">
                                <h4 className="text-white font-bold text-xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{image.title}</h4>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{image.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
