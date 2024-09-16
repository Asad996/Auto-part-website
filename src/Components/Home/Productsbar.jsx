import React from 'react'
import JobsList from "../Helpers/Products"; // Make sure the path is correct
import { useInView } from 'react-intersection-observer';
const Productsbar = () => {

  const jobs = JobsList(); // Call the function to get the jobs array
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
         <div className="relative text-center py-16">
      <h1 className="pb-24 text-gray-500 text-9xl font-bold absolute inset-0 flex items-center justify-center opacity-10">
        CATEGORIES
      </h1>
      <div
        ref={ref}
        className="text-center transition-all duration-1000"
      >
        <p className={`text-5xl py-4 font-medium transition-transform ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          Popular Products
        </p>
        <p className={`text-sm font-medium transition-transform ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 text-center px-96'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Animi aliquid voluptates nostrum autem ratione. Ad cupiditate non natus dolorum. <br /> Illum laboriosam repellat tempora? Temporibus odit quibusdam assumenda cumque doloribus vitae.
        </p>
      </div>
    </div>

      


      <div
        className={`h-auto w-full flex flex-wrap justify-center items-center transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        {jobs.map((P, index) => (
          <div
            key={index}
            className={`h-56 w-40 text-center p-4 rounded-3xl m-4 bg-gray-100 hover:shadow-lg transition-transform transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105 `}
            style={{ transitionDelay: `${index * 0.1}s` }} // Adding delay for staggered animation
          >
            <img src={P.URL} alt="" />
            <p className="font-bold p-2 text-sm">{P.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Productsbar
