'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Categorías

const collectionCategories = [
  { name: 'Dining', category: 'kitchen-accessories' },
  { name: 'Living Room', category: 'furniture' },
  { name: 'Bedroom', category: 'home-decoration' },
];

export default function Colecciones() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const data = await Promise.all(
          collectionCategories.map(async (col) => {
            const res = await fetch(`https://dummyjson.com/products/category/${col.category}?limit=1`);
            const json = await res.json();
            return {
              name: col.name,
              category: col.category,
              image: json.products?.[0]?.thumbnail || '',
            };
          })
        );
        setCollections(data);
      } catch (error) {
        console.error('Error cargando imágenes de la API:', error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);


  // Estado de carga (Loading)...

  if (loading) {
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Collections</h2>
        <p className="text-gray-500 mt-2">Loading collections...</p>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Collections</h2>
      <p className="text-gray-500 mt-2 mb-10">
        Designs crafted to inspire every corner of your home.
      </p>


      {/*COLECCION */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <Link 
            key={index} 
            href={`/product?category=${item.category}`}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02] bg-gray-100">
              {item.image && (
                <Image 
                   src={item.image} 
                   alt={item.name} 
                   fill 
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                   className="object-cover group-hover:opacity-90 transition-opacity" 
                />
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-[#B88E2F] transition-colors">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}