import Image from 'next/image';

const ProductCard = ({ name, imageUrl, subtitle, price, altText, priority = false }) => {
  return (
    <div className="group relative w-full max-w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={altText || name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-opacity duration-300 group-hover:opacity-60"
          />
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-2">
          <button className="bg-white text-[#B88E2F] font-semibold text-xs sm:text-sm px-3 py-2 sm:px-6 sm:py-3 rounded shadow hover:bg-gray-100 transition-colors cursor-pointer text-center max-w-full truncate">
            Ver producto
          </button>
        </div>
      </div>

      <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-1 gap-1">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2 wrap-break-word">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-500 transition-colors truncate">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-1 sm:pt-2 mt-auto">
          <span className="text-sm sm:text-lg font-bold text-gray-900 transition-colors truncate">
            $ {price ? price.toLocaleString('id-ID') : '0'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;