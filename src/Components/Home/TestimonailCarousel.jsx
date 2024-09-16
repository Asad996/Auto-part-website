import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonial from '../Helpers/Testimonial';

const testimonials = Testimonial();

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto p-20 bg-gray-100 rounded-lg shadow-2xl my-12 shadow-gray-500"
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevClick}
          className="bg-[#F7A034] text-white p-2 rounded-full focus:outline-none"
        >
          &lt;
        </button>
        <div className="text-center">
          <blockquote className="text-4xl font-bold pb-6">{testimonials[currentIndex].quote}</blockquote>
          <p className="text-gray-600">{testimonials[currentIndex].details}</p>
          <cite className="block mt-2 text-[#F7A034] font-bold text-xl">{testimonials[currentIndex].name}</cite>
        </div>
        <button
          onClick={handleNextClick}
          className="bg-[#F7A034] text-white p-2 rounded-full focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center space-x-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full focus:outline-none ${
              currentIndex === index ? 'ring-4 ring-[#F7A034]' : ''
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 object-cover rounded-full"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;
