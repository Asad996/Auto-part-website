import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CarouselProduct from '../Helpers/CarouselProduct';
import { useInView } from 'react-intersection-observer';

const productData = CarouselProduct();

const Carousel2 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [index, setIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('Best Selling');

    const getVisibleSlides = () => {
        if (window.innerWidth < 640) {
            return 1;
        } else if (window.innerWidth < 768) {
            return 2;
        } else if (window.innerWidth < 1024) {
            return 3;
        } else {
            return 4;
        }
    };

    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

    useEffect(() => {
        const handleResize = () => {
            setVisibleSlides(getVisibleSlides());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % productData[activeTab].length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + productData[activeTab].length) % productData[activeTab].length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const visibleImages = [];
    for (let i = 0; i < visibleSlides; i++) {
        visibleImages.push(productData[activeTab][(index + i) % productData[activeTab].length]);
    }

    return (
        <>
            <div className="relative text-center">
                <h1 className="text-gray-500 text-9xl font-bold absolute inset-0 flex items-center justify-center opacity-10 pb-12">
                    PRODUCTS
                </h1>
                <motion.div
                    ref={ref}
                    className="text-center transition-all duration-1000"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <p className={`text-5xl py-4 font-medium transition-transform ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                        Source From Curated Ateliers
                    </p>
                </motion.div>
            </div>

            <div className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        {Object.keys(productData).map((tab) => (
                            <button
                                key={tab}
                                className={`mx-2 px-4 py-2 font-medium text-sm ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
                                onClick={() => { setActiveTab(tab); setIndex(0); }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center justify-between relative">
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-3xl p-2 mr-4"
                        >
                            <i className="bi bi-caret-left"></i>
                        </button>
                        <div className="flex justify-center gap-4 overflow-hidden w-full lg:pl-28 sm:pl-0">
                            {visibleImages.map((product, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-shrink-0 w-1/4 p-2"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <img
                                        src={product.image}
                                        alt={`carousel ${i}`}
                                        className="h-40 w-auto mb-4"
                                        style={{ transition: 'transform 1s ease, opacity 1s ease' }}
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <div className="text-yellow-400">
                                        {'★'.repeat(product.rating)}
                                        {'☆'.repeat(5 - product.rating)}
                                    </div>
                                    <div className="text-gray-500 line-through">{product.oldPrice}</div>
                                    <div className="text-gray-800 font-bold">{product.price}</div>
                                </motion.div>
                            ))}
                        </div>
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-black p-2 ml-4"
                        >
                            <i className="bi bi-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel2;
