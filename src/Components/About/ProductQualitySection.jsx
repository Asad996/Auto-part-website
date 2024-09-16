import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductQuality from '../Helpers/ProductQuality';

const images = ProductQuality();

// Sample text content for each slide

const ProductQualitySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const handleSlideChange = () => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setTextVisible(true);
      }, 500);
    };
    const carouselElement = document.querySelector('.carousel-root');
    carouselElement.addEventListener('slidestart', handleSlideChange);

    return () => {
      carouselElement.removeEventListener('slidestart', handleSlideChange);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-cream p-8">
      {/* Left Side Content */}
      <div className="lg:w-1/2 flex flex-col justify-center p-4">
        <nav className="text-sm text-gray-600 mb-4">
          Home &gt; <span className='text-[#F7A034]'>About us</span>
        </nav>
        <h1 className={`text-4xl font-bold mb-4 transition-opacity duration-500 ${textVisible ? 'opacity-100' : 'opacity-0 blur-0'}`}>
          {images[currentSlide].title}
        </h1>
        <p className={`mb-6 transition-opacity duration-500 ${textVisible ? 'opacity-100' : 'opacity-0 blur-o'}`}>
          {images[currentSlide].description}
        </p>
        <button className={`bg-orange-500 w-44 h-10 text-white py-2 px-4 rounded-3xl flex items-center transition-opacity duration-500 ${textVisible ? 'opacity-100' : 'opacity-0 blur-0'}`}>
          {images[currentSlide].buttonText}
        </button>
      </div>
      
      {/* Right Side Carousel */}
      <div className="lg:w-1/2">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          onChange={(index) => {
            setTextVisible(false);
            setTimeout(() => {
              setCurrentSlide(index);
              setTextVisible(true);
            }, 500);
          }}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className='h-full' />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductQualitySection;
