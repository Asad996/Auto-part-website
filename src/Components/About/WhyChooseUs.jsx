import React from 'react';
import Benefits from '../Helpers/Benefits';

const benefits = Benefits();

const WhyChooseUs = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why choose us</h2>
      <div className="flex justify-evenly flex-wrap">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md bg-gray-100 flex flex-col items-center w-72 m-6 transition-transform transform hover:translate-y-[-5px] hover:shadow-lg`}
          >
            <h3 className={`mb-4 p-2 rounded-xl text-sm font-semibold ${benefit.textColor} ${benefit.bgColor}`}>
              {benefit.title}
            </h3>
            <p className="text-gray-700 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
