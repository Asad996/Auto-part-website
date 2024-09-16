import React, { useState } from 'react';
import ProductQuality from '../Helpers/ProductQuality';

const DetailProduct = () => {
  const images = ProductQuality();
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8">
      <div className="w-full md:w-1/4 flex flex-col space-y-4 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Product ${index + 1}`}
            className="w-full h-auto cursor-pointer transition-transform duration-1000 ease-in-out transform hover:scale-110"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>
      <div className="w-full md:w-3/4 flex justify-center items-center overflow-hidden">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-auto max-w-lg transition-transform duration-1000 ease-in-out transform hover:scale-110"
        />
      </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl font-bold">Automatic Bearings</h1>
          <p className="text-gray-600">(150 Reviews) | In Stock</p>
          <p className="text-2xl md:text-3xl font-semibold mt-4">$180.00</p>
          <p className="mt-2 text-gray-600">
            Automatic bearings, also known as self-aligning or self-adjusting bearings, are designed to accommodate misalignment between the shaft and the housing. These bearings can automatically adjust to correct alignment issues, which helps to reduce stress on the bearing and extend its service life.
          </p>
          <div className="mt-4">
            <span className="font-semibold">Colours: </span>
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 ml-2 cursor-pointer"></span>
            <span className="inline-block w-6 h-6 rounded-full bg-gray-500 ml-2 cursor-pointer"></span>
          </div>
          <div className="mt-4">
            <span className="font-semibold">Size: </span>
            <button className="border rounded px-2 py-1 mx-1">XS</button>
            <button className="border rounded px-2 py-1 mx-1">S</button>
            <button className="border rounded px-2 py-1 mx-1">M</button>
            <button className="border rounded px-2 py-1 mx-1">L</button>
            <button className="border rounded px-2 py-1 mx-1">XL</button>
          </div>
          <div className="mt-4 flex items-center">
            <button className="border px-3 py-1">-</button>
            <input type="text" value="2" readOnly className="w-12 text-center border-t border-b" />
            <button className="border px-3 py-1">+</button>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded">Buy Now</button>
        </div>
    </div>
  );
};

export default DetailProduct;
