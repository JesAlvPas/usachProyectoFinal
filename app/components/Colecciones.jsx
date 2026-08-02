'use client';

import Image from 'next/image';

const collections = [
  { name: 'Comedor', image: '/dining.jpg' },
  { name: 'Sala de Estar', image: '/living.jpg' },
  { name: 'Dormitorio', image: '/bedroom.jpg' },
];

export default function Colecciones() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">Nuestras Colecciones</h2>
      <p className="text-gray-500 mt-2 mb-10">
        Diseños pensados para inspirar cada rincón de tu hogar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}