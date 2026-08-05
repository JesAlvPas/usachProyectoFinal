'use client';

import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-end py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      

      {/* Imagen de fondo */}

      <Image 
        src="/hero.avif"
        alt="International logistics and shipping warehouse"
        fill
        className="object-cover -z-10"
        priority
      />


      {/* Capa oscura */}

      <div className="absolute inset-0 bg-black/20 -z-10" />


      {/* Contenido / Tarjeta de texto */}

    
      <div className="max-w-7xl mx-auto w-full flex justify-end">
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full">
          <span className="uppercase text-xs font-bold tracking-wider text-gray-500">
            International Shipping
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-[#B88E2F] leading-tight">
            Discover Our<br />New Collection
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            We connect countries with guaranteed quality products and fast air logistics right to your doorstep or business.
          </p>
          
          <Link 
            href="/product" 
            className="inline-block w-full sm:w-auto bg-[#B88E2F] hover:bg-[#a07a27] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center cursor-pointer"
          >
            BUY NOW
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Hero;