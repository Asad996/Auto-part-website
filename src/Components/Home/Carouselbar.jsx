import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousels from '../Helpers/Carousel';

const carouselItems = Carousels();

function Carouselbar() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="w-full my-4"
    >
      <Carousel activeIndex={index} onSelect={handleSelect} className="w-full my-4">
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx} className="h-96">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex flex-col justify-center items-start p-8">
                <p className="mb-4 text-5xl leading-tight text-gray-700">{item.text}</p>
                <button className="px-4 py-2 bg-[#F7A034] text-white rounded-full">
                  {item.buttonText} <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              <div className="h-full">
                <img
                  className="w-full h-full object-cover"
                  src={item.url}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
}

export default Carouselbar;
