'use client';

import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-end py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Imagen local hero.avif */}
      <Image 
        src="/hero.avif"
        alt="Almacén de logística y envíos internacionales"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Capa oscura para dar legibilidad si la foto es muy clara */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Contenido / Tarjeta de texto */}
      <div className="max-w-7xl mx-auto w-full flex justify-end">
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full">
          <span className="uppercase text-xs font-bold tracking-wider text-gray-500">
            Envíos Internacionales
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-[#B88E2F] leading-tight">
            Descubre Nuestra<br />Nueva Colección
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Conectamos países con productos de calidad garantizada y logística aérea rápida hasta la puerta de tu hogar o empresa.
          </p>
          
          <Link 
            href="/product" 
            className="inline-block w-full sm:w-auto bg-[#B88E2F] hover:bg-[#a07a27] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center"
          >
            COMPRAR AHORA
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Hero;