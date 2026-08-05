import { Suspense } from 'react';
import type { Metadata } from 'next';
import BannerProduct from '../components/BannerProduct.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Pagination from '../components/Pagination.jsx';
import { ProductGridSkeleton } from '../components/ProductCardSkeleton.jsx';
import { getProducts } from '../API/Products.js';


export const metadata: Metadata = {
  title: "Products | Furniro",
  description: "Explore Furniro's complete catalog: technology, fashion, home, beauty, and more, all in one place.",
  openGraph: {
    title: "Products | Furniro",
    description: "Explore Furniro's complete catalog: technology, fashion, home, beauty, and more, all in one place.",
    url: "/product",
    siteName: "Furniro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Furniro - Catálogo de productos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



async function ProductListContent({ currentPage }: { currentPage: number }) {
  const LIMIT = 12;
  const data = await getProducts(currentPage, LIMIT);
  const productList = data?.products || [];
  const totalProducts = data?.total || 0;
  const totalPages = Math.ceil(totalProducts / LIMIT);




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