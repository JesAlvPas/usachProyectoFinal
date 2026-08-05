'use client'

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ProductGridSkeleton } from './ProductCardSkeleton';

export default function ProductGrid({ productList }) {
    const [isAllLoaded, setIsAllLoaded] = useState(false);

    useEffect(() => {
        if (!productList || productList.length === 0) {
            setIsAllLoaded(true);
            return;
        }

        setIsAllLoaded(false);

        const imagePromises = productList.map((product) => {
            return new Promise((resolve) => {
                if (!product.thumbnail) {
                    resolve();
                    return;
                }
                const img = new Image();
                img.src = product.thumbnail;
                img.onload = () => resolve();
                img.onerror = () => resolve();
            });
        });

        Promise.all(imagePromises).then(() => {
            setIsAllLoaded(true);
        });
    }, [productList]);

    if (!isAllLoaded) {
        return <ProductGridSkeleton count={productList?.length || 12} />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
            {productList.map((product, index) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.title}
                    imageUrl={product.thumbnail}
                    subtitle={product.category}
                    price={product.price}
                    priority={index < 4}
                />
            ))}
        </div>
    );
}