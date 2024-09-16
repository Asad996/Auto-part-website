import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerimg2 from '../../assets/Screenshot_24-7-2024_11518_.jpeg';

const Banner2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="flex items-center justify-center py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={bannerimg2}
            alt="Mission Image"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission & commitment to quality, competitive pricing, and exceptional customer service sets us apart. We provide fast, reliable shipping and easy returns to make your experience hassle-free. Dedicated to sustainability and community involvement, we strive to make a positive impact both on and off the road with our reliable parts and outstanding service.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner2;
