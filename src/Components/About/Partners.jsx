import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  { name: 'MCB', src: 'path_to_logo1.png' },
  { name: 'NTN', src: 'path_to_logo2.png' },
  { name: 'SNR', src: 'path_to_logo3.png' },
  { name: 'SKF', src: 'path_to_logo4.png' },
  { name: 'MBS', src: 'path_to_logo5.png' },
];

const Partners = () => {
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
      className="bg-gray-200 pt-12"
    >
      <p className="text-3xl text-center font-medium">Our Partnership & Collaborators</p>
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center p-2">
                <img src={logo.src} alt={logo.name} className="h-10 w-36" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
