import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductDetails from '../../components/ProductDetails.jsx';
import { getProductById } from '../../API/Products.js';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product not found | Furniro",
      description: "The product you are looking for is not available.",
    };
  }

  const productImage = product.images?.[0] || product.thumbnail;

  return {
    title: `${product.title} | Furniro`,
    description: product.description?.slice(0, 160) || `Compra ${product.title} en Furniro.`,
    openGraph: {
      title: `${product.title} | Furniro`,
      description: product.description?.slice(0, 160) || `Compra ${product.title} en Furniro.`,
      url: `/product/${id}`,
      siteName: "Furniro",
      images: productImage
        ? [
            {
              url: productImage,
              width: 1200,
              height: 630,
              alt: product.title,
            },
          ]
        : undefined,
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}