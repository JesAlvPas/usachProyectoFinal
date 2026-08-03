'use client';

import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CartContext } from '../context/CartContext';

export default function Featured() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { addToCart } = useContext(CartContext);


  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product);
    }

    router.push('/cart'); 
  };

  
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=4')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Nuestros Productos</h2>
        <p className="text-gray-500 mt-2">Cargando productos...</p>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Nuestros Productos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((prod) => (
          <div key={prod.id} className="bg-[#F4F5F7] group relative overflow-hidden rounded-lg">
            
            {prod.discountPercentage > 0 && (
              <span className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                -{Math.round(prod.discountPercentage)}%
              </span>
            )}

            <div className="relative w-full h-[300px]">
              <Image 
                src={prod.thumbnail} 
                alt={prod.title} 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 truncate">{prod.title}</h3>
              <p className="text-gray-500 text-sm my-1 truncate">{prod.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-semibold text-gray-800 text-lg">${prod.price}</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4 z-20">
              <button 
                onClick={() => handleAddToCart(prod)}
                className="bg-white text-[#B88E2F] font-bold px-8 py-3 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors"
              >
                Añadir al carrito
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/product" 
          className="inline-block border border-[#B88E2F] text-[#B88E2F] font-bold px-12 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors rounded-md"
        >
          Ver Todo
        </Link>
      </div>
    </section>
  );
}