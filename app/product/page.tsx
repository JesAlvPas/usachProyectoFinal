import { Suspense } from 'react';
import BannerProduct from '../components/BannerProduct.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Pagination from '../components/Pagination.jsx';
import { ProductGridSkeleton } from '../components/ProductCardSkeleton.jsx';
import { getProducts } from '../API/Products.js';


// Obtencion y renderizar los productos

async function ProductListContent({ currentPage }: { currentPage: number }) {
  const LIMIT = 12;
  const data = await getProducts(currentPage, LIMIT);
  const productList = data?.products || [];
  const totalProducts = data?.total || 0;
  const totalPages = Math.ceil(totalProducts / LIMIT);


  // Mensaje cuando la lista esté vacía

  if (productList.length === 0) {
    return (
      <p className="text-center text-gray-500 my-10 text-sm sm:text-base">
        No products found.
      </p>
    );
  }

  return (
    <>
      <ProductGrid productList={productList} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}


// Vista principal de Productos

export default async function Product({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;

  return (
    <div className="w-full">
      <BannerProduct />

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
        <Suspense key={currentPage} fallback={<ProductGridSkeleton count={12} />}>
          <ProductListContent currentPage={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}