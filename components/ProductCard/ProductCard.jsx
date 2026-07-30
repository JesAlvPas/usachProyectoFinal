import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const { name, subtitle, price, originalPrice, discountPercentage, imageUrl, altText } = product;

  return (
    <div className="group relative w-full overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product Image and Discount Badge */}
      <div className="relative aspect-16/20 w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={altText} 
          layout="fill" 
          objectFit="cover" 
          className="transition-opacity duration-300 group-hover:opacity-60" 
        />
        {discountPercentage && (
          <span className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold rounded-full w-12 h-12 flex items-center justify-center">
            -{discountPercentage}%
          </span>
        )}

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center space-y-6">
          <button className="bg-white text-yellow-600 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition-colors">
            Add to cart
          </button>
          <div className="flex space-x-6 text-white text-sm font-semibold">
            <button className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <span className="text-lg">🔄</span> 
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <span className="text-lg">⚖️</span> 
              <span>Compare</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <span className="text-lg">❤️</span> 
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-500 transition-colors">
          {subtitle}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            Rp {price.toLocaleString('id-ID')}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through group-hover:text-gray-300 transition-colors">
              Rp {originalPrice.toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;