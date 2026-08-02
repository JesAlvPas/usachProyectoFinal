'use client';

import Image from 'next/image';
import Link from 'next/link';

const mockProducts = [
  { id: 1, name: 'Syltherine', desc: 'Silla moderna de diseño', price: '$250.000', oldPrice: '$350.000', badge: '-30%', image: '/product1.jpg' },
  { id: 2, name: 'Leviosa', desc: 'Silla elegante para comedor', price: '$250.000', image: '/product2.jpg' },
  { id: 3, name: 'Lolito', desc: 'Sofá modular amplio', price: '$700.000', oldPrice: '$1.400.000', badge: '-50%', image: '/product3.jpg' },
  { id: 4, name: 'Respira', desc: 'Mesa y taburete para exterior', price: '$50.000', badge: 'Nuevo', badgeBg: 'bg-teal-500', image: '/product4.jpg' },
];

export default function Featured() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nuestros Productos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockProducts.map((prod) => (
          <div key={prod.id} className="bg-[#F4F5F7] group relative overflow-hidden rounded-lg">
            
            {/* Badge de Oferta o Nuevo */}
            {prod.badge && (
              <span className={`absolute top-5 right-5 z-10 w-12 h-12 rounded-full text-white text-xs font-bold flex items-center justify-center ${prod.badgeBg || 'bg-red-500'}`}>
                {prod.badge}
              </span>
            )}

            {/* Imagen */}
            <div className="relative w-full h-[300px]">
              <Image src={prod.image} alt={prod.name} fill className="object-cover" />
            </div>

            {/* Información */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-800">{prod.name}</h3>
              <p className="text-gray-500 my-1">{prod.desc}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-semibold text-gray-800 text-lg">{prod.price}</span>
                {prod.oldPrice && <span className="text-gray-400 line-through text-sm">{prod.oldPrice}</span>}
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4 z-20">
              <button className="bg-white text-[#B88E2F] font-bold px-8 py-3 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors">
                Añadir al carrito
              </button>
              <div className="flex items-center gap-4 text-white text-sm font-semibold">
                <span className="cursor-pointer hover:underline">Compartir</span>
                <span className="cursor-pointer hover:underline">Comparar</span>
                <span className="cursor-pointer hover:underline">Favorito</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Botón Ver Más */}
      <div className="text-center mt-12">
        <Link href="/productos" className="inline-block border border-[#B88E2F] text-[#B88E2F] font-bold px-12 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors rounded-md">
          Ver Todo
        </Link>
      </div>
    </section>
  );
}