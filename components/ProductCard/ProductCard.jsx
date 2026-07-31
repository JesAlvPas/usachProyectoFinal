import Image from 'next/image';

const ProductCard = ({ name,imageUrl}) => {
  // const { name, subtitle, price, imageUrl, altText } = product;

  const subtitle = 'Stylish cafe chair';
  const price =2500000;
  // const imageUrl = 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop'; // O la ruta de tu imagen local
  const altText = 'Stylish cafe chair';


  return (
    <div className="group relative w-full overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product Image and Discount Badge */}
      <div className="relative aspect-20/20 w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={altText} 
          layout="fill" 
          objectFit="cover" 
          className="transition-opacity duration-300 group-hover:opacity-60" 
        />
        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center space-y-6">
          <button className="bg-white text-yellow-600 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition-colors cursor-pointer ">
            Ver producto
          </button>
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
            $ {price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;