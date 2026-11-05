import { motion } from 'framer-motion';

// Import images directly so Vite handles hashing/optimization
import truck1 from '../assets/trucks/truck-1.jpg';
import truck2 from '../assets/trucks/truck-2.jpg';
import truck3 from '../assets/trucks/truck-3.jpg';
import truck4 from '../assets/trucks/truck-4.jpg';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const TRUCK_IMAGES = [
    { src: truck1, alt: 'AJ Smart Move large truck profile', title: "Modern fleet", desc: "Equipped for any move", span: 'md:col-span-2 md:row-span-2' },
    { src: truck2, alt: 'AJ Smart Move truck with residential house', title: "Residential experts", desc: "Careful home removals", span: 'md:col-span-2' },
    { src: truck3, alt: 'AJ Smart Move truck in a tropical location', title: "Anywhere in QLD", desc: "Long distance available", span: '' },
    { src: truck4, alt: 'AJ Smart Move truck at the beach', title: "Coastal moves", desc: "From beach to bush", span: '' },
];

export const FleetGallery = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark mb-6">Modern, clean & reliable.</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Take a look at our fully equipped trucks ready to handle moves of any size with care and precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {TRUCK_IMAGES.map((image, index) => (
                        <motion.figure
                            key={image.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-2xl shadow-md m-0 ${image.span}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Captions always visible: touch users cannot hover */}
                            <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end h-1/2">
                                <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                                <p className="text-white/90 text-sm">{image.desc}</p>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
