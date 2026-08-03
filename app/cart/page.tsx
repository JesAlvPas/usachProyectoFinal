'use client';

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext) as any;

  // Cálculo del subtotal y total
  const subtotal = cart?.reduce(
    (acc: number, item: any) => acc + item.price * (item.count || item.quantity || 1),
    0
  ) || 0;

  return (
    <div className="bg-white font-sans text-gray-800 w-full">
      
      {/* 1. BANNER SUPERIOR */}
      <div className="relative h-48 w-full flex flex-col items-center justify-center bg-[url('/hero.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <div className="text-3xl text-[#B88E2F] mb-1 font-bold">☖</div>
          <h1 className="text-3xl font-semibold text-black">Cart</h1>
          <p className="mt-1 text-sm text-gray-600">
            <Link href="/" className="font-bold text-black hover:underline">Home</Link> &gt; <span className="text-gray-500">Cart</span>
          </p>
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL DEL CARRITO (ESPACIADO COMPACTO DE PY-6) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-10">
        {!cart || cart.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl my-2">
            <p className="text-2xl font-semibold text-gray-600 mb-2">Tu carrito está vacío 🛒</p>
            <p className="text-gray-400 mb-6">Aún no has agregado ningún producto a tu lista.</p>
            <Link
              href="/product"
              className="inline-block border border-[#B88E2F] text-[#B88E2F] font-bold px-8 py-3 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors"
            >
              Ir a la tienda
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* TABLA DE PRODUCTOS */}
            <div className="lg:col-span-2 overflow-x-auto">
              <div className="bg-[#F9F1E7] grid grid-cols-12 gap-4 py-3 px-6 font-semibold text-sm text-black rounded-sm mb-4 text-center">
                <span className="col-span-5 text-left">Product</span>
                <span className="col-span-2">Price</span>
                <span className="col-span-2">Quantity</span>
                <span className="col-span-2">Subtotal</span>
                <span className="col-span-1"></span>
              </div>

              <div className="space-y-4">
                {cart.map((item: any) => {
                  const qty = item.count || item.quantity || 1;
                  const itemSubtotal = item.price * qty;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 gap-4 items-center px-2 py-2 text-sm text-gray-500 text-center"
                    >
                      {/* Imagen y Nombre */}
                      <div className="col-span-5 flex items-center gap-4 text-left">
                        <div className="relative w-16 h-16 bg-[#F9F1E7] rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.thumbnail || item.image || '/placeholder.png'}
                            alt={item.title || item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-gray-500 font-medium">{item.title || item.name}</span>
                      </div>

                      {/* Precio Unitario */}
                      <span className="col-span-2 text-gray-500">
                        ${item.price.toLocaleString()}
                      </span>

                      {/* CONTADOR DE CANTIDAD (+ / -) */}
                      <div className="col-span-2 flex justify-center items-center">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => updateQuantity && updateQuantity(item.id, -1)}
                            className="w-7 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors select-none"
                            title="Disminuir"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-black font-semibold text-sm">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQuantity && updateQuantity(item.id, 1)}
                            className="w-7 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors select-none"
                            title="Aumentar"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <span className="col-span-2 text-black font-semibold">
                        ${itemSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>

                      {/* Papelera */}
                      <div className="col-span-1 flex justify-center">
                        <button
                          onClick={() => removeFromCart && removeFromCart(item.id)}
                          className="text-[#B88E2F] hover:text-red-600 transition-colors"
                          title="Eliminar producto"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RESUMEN (CART TOTALS) */}
            <div className="bg-[#F9F1E7] p-6 rounded-md text-center">
              <h2 className="text-2xl font-bold text-black mb-6">Cart Totals</h2>

              <div className="flex justify-between items-center mb-4 px-2 text-sm">
                <span className="font-medium text-black">Subtotal</span>
                <span className="text-gray-500 font-medium">${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>

              <div className="flex justify-between items-center mb-6 px-2">
                <span className="font-medium text-black">Total</span>
                <span className="text-[#B88E2F] text-xl font-bold">${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>

              <Link
                href="/checkout"
                className="inline-block w-full py-3 border border-black rounded-xl text-black font-semibold hover:bg-black hover:text-white transition-colors text-center cursor-pointer"
              >
                Check Out
              </Link>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}