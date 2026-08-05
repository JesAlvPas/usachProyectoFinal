// app/product/[id]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetails from '../../components/ProductDetails.jsx';
import { getProductById } from '../../API/Products.js';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}