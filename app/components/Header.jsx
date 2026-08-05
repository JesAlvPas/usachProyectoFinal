'use client';

import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isLogged } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = cart ? cart.reduce((acc, item) => acc + (item.count || 1), 0) : 0;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">


          {/* LOGO */}

          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
            <Image
              src="/img/Navbar/Logo.svg"
              alt="Company Logo"
              width={150}
              height={40}
              priority
            />
          </Link>


          {/* NAVEGACIÓN DESKTOP */}

          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/product" className="hover:text-black transition-colors">Products</Link>
            <Link href="/nosotros" className="hover:text-black transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          </nav>


          {/* ICONOS Y ACCIONES */}

          <div className="flex items-center space-x-6">
            <Link href={isLogged ? "/profile" : "/login"} className="text-xl text-gray-700 hover:text-black" title="User Account">
              <Image
                src="/img/Navbar/icons/login.svg"
                alt="User Icon"
                width={24}
                height={22}
                priority
              />
            </Link>

            <Link href="/cart" className="relative text-xl text-gray-700 hover:text-black" title="Shopping Cart">
              <Image
                src="/img/Navbar/icons/carrito.svg"
                alt="Cart Icon"
                width={24}
                height={22}
                priority
              />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>


            {/* BOTÓN */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none text-2xl cursor-pointer"
            >
              ☰
            </button>
          </div>
        </div>


        {/* NAVEGACIÓN MÓVIL */}

        {isOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2 border-t border-gray-100">
            <Link href="/" className="block py-1 text-gray-700 hover:text-black">Home</Link>
            <Link href="/product" className="block py-1 text-gray-700 hover:text-black">Products</Link>
            <Link href="/nosotros" className="block py-1 text-gray-700 hover:text-black">About Us</Link>
            <Link href="/contact" className="block py-1 text-gray-700 hover:text-black">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;