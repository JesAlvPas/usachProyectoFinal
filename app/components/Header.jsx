'use client';

import { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isLogged } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart ? cart.reduce((acc, item) => acc + item.count, 0) : 0;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
            MARCA
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
            <Link href="/productos" className="hover:text-black transition-colors">Productos</Link>
            <Link href="/nosotros" className="hover:text-black transition-colors">Nosotros</Link>
            <Link href="/contacto" className="hover:text-black transition-colors">Contacto</Link>
          </nav>

          {/* Iconos (Perfil y Carrito) */}
          <div className="flex items-center space-x-6">
            <Link href={isLogged ? "/profile" : "/login"} className="text-xl text-gray-700 hover:text-black">
              👤
            </Link>

            <Link href="/carrito" className="relative text-xl text-gray-700 hover:text-black">
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Botón Hamburguesa Móvil */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Desplegable Móvil */}
        {isOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2 border-t border-gray-100">
            <Link href="/" className="block py-1 text-gray-700 hover:text-black">Inicio</Link>
            <Link href="/productos" className="block py-1 text-gray-700 hover:text-black">Productos</Link>
            <Link href="/nosotros" className="block py-1 text-gray-700 hover:text-black">Nosotros</Link>
            <Link href="/contacto" className="block py-1 text-gray-700 hover:text-black">Contacto</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;