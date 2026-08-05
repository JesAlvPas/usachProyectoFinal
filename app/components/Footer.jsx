'use client';

import Link from 'next/link';
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center items-start">


          {/*LOGO Y UBICACIÓN */}

          <div className="flex flex-col items-center">
            <Image
              src="/img/Navbar/Logo.svg"
              alt="Company logo"
              width={150}
              height={40}
              priority
            />
            <p className="text-gray-500 mt-2 text-sm">
              Santiago Metropolitan Region, Chile
            </p>
          </div>


          {/* ENLACES */}

          <div className="flex flex-col items-center">
            <h6 className="text-gray-400 font-bold mb-3 text-sm uppercase tracking-wider">
              Links
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-700 hover:text-black transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-200" />


        {/* DERECHOS DE AUTOR */}

        <p className="text-gray-500 text-sm text-center">
          2026 BRAND. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;