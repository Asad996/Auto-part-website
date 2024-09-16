import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import location from '../Helpers/Location';

const locations = location();

const MapComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to UAE
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
      className="flex flex-col md:flex-row bg-[#FFE4C3] py-12 px-4 md:px-12"
    >
      <div className="w-full md:w-1/4 p-4 flex flex-col items-center md:items-start">
        {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`block w-3/4 md:w-44  p-2 mb-2 text-center hover:shadow-2xl transition-shadow duration-300  hover:bg-white hover:rounded-3xl ${
              currentIndex === index
                ? 'bg-white text-[#F7A034] font-bold rounded-3xl'
                : 'text-[#F7A034]'
            }`}
          >
            {location.name}
          </button>
        ))}
      </div>
      <div className="w-full  p-4 bg-white rounded-2xl shadow-md relative">
        <div className="relative w-full h-36 ">
          <img
            src={locations[currentIndex].map}
            alt={`${locations[currentIndex].name} Map`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="mt-2 ">
          <h2 className="text-2xl font-bold mb-2">{locations[currentIndex].name} Headquarters</h2>
          <p>{locations[currentIndex].address}</p>
          <p>Tel: {locations[currentIndex].tel}</p>
          <p>E-mail: {locations[currentIndex].email}</p>
        </div>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % locations.length)}
          className="bg-[#F7A034] text-white p-2 rounded-full focus:outline-none absolute bottom-4 right-4 md:bottom-4 md:right-4"
        >
          &gt;
        </button>
      </div>
    </motion.div>
  );
};

export default MapComponent;
