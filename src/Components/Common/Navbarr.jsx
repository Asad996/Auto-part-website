import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <>
       <Link to="/login"><div className="flex justify-center text-5xl p-4 font-medium">
       <p>LO</p><p className="text-[#F7A034]">GO</p>
      </div></Link>

      <div className="bg-gray-200 p-1 flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex gap-10 md:gap-20 md:ml-48 sm:ml-0 lg:ml-72">
          <Link to="/"><p>HOME</p></Link>
        <Link to="/product"> <p>PRODUCTS</p></Link>
         <Link to="/about"><p>ABOUT US</p></Link>
          <p>CONTACT US</p>
        </div>
        <div className="flex items-center gap-4 p-1">
          <input type="text" className="bg-gray-600 rounded-2xl outline-none border-none p-1 text-white w-32 md:w-44 px-2" placeholder="Search..." />
          <i className="bi bi-heart text-xl"></i>
          <i className="bi bi-bell text-xl"></i>
        </div>
      </div>
    </>
  );
}

export default Navbarr;
