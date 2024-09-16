import React from 'react';
import Relatedproducts from '../Helpers/Relatedproducts';

const products = Relatedproducts();

const RelatedProducts = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-lg md:text-xl font-bold text-orange-500 mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-md md:text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 text-md md:text-lg">${product.price}</span>
              <span className="text-gray-500 line-through ml-2 text-sm md:text-base">${product.originalPrice}</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.897 5.834a1 1 0 00.95.69h6.128c.969 0 1.371 1.24.588 1.81l-4.97 3.606a1 1 0 00-.364 1.118l1.898 5.835c.3.921-.755 1.688-1.538 1.117l-4.971-3.606a1 1 0 00-1.176 0l-4.97 3.606c-.783.57-1.838-.196-1.538-1.117l1.898-5.835a1 1 0 00-.364-1.118L2.44 11.261c-.783-.57-.38-1.81.588-1.81h6.128a1 1 0 00.95-.69l1.897-5.834z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
