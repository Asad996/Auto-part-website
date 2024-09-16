import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import banner from "../../assets/Images_page-0004.jpg";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="container flex flex-col md:flex-row justify-between px-4">
        <div className="md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-medium text-gray-700 mb-12 leading-tight">
            Unmatched product quality with Exceptional Technical Support
          </h2>
          <button className="px-4 py-2 bg-[#F7A034] text-white rounded-full">
            About US <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={banner} alt="Product" className="max-w-xs md:max-w-md" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
