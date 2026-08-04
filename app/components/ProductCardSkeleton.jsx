export default function ProductCardSkeleton() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
      {/* Contenedor con efecto shimmer en movimiento */}
      <div className="relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/60 before:to-transparent">
        
        {/* Imagen Skeleton */}
        <div className="aspect-square w-full bg-gray-200" />

        {/* Detalles Skeleton */}
        <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-1 gap-2">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-1/3 mt-2" />
          </div>

          <div className="pt-2 mt-auto">
            <div className="h-5 bg-gray-200 rounded w-2/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 12 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center w-full">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}