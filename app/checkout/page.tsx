'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart } = useContext(CartContext) as any;
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const subtotal = cart?.reduce(
    (acc: number, item: any) => acc + item.price * (item.count || item.quantity || 1),
    0
  ) || 0;

  return (
    <div className="bg-white font-sans text-gray-800 w-full">
      

      {/*HERO*/}

      <div className="relative h-60 w-full flex flex-col items-center justify-center bg-[url('/hero.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <div className="text-3xl text-[#B88E2F] mb-1 font-bold">☖</div>
          <h1 className="text-4xl font-semibold text-black">Checkout</h1>
          <p className="mt-2 text-sm text-gray-600">
            <Link href="/" className="font-bold text-black hover:underline">Home</Link> &gt;{' '}
            <span className="text-gray-500">Checkout</span>
          </p>
        </div>
      </div>


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-16">
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="w-full">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-black mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Pedro"
                    className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-black mb-2">Apellido</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Perez"
                    className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-2">Región</label>
                <select className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm">
                  <option value="RM">Metropolitana de Santiago</option>
                  <option value="AP">Arica y Parinacota</option>
                  <option value="TA">Tarapacá</option>
                  <option value="AN">Antofagasta</option>
                  <option value="AT">Atacama</option>
                  <option value="CO">Coquimbo</option>
                  <option value="VA">Valparaíso</option>
                  <option value="NB">Ñuble</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-2">Dirección</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Santiago centro, calle portugal 888 Depto 502"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-2">Código Postal</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: 7750000"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-2">Teléfono</label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: +56 999999999"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Ej: usuario@correo.com"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Ej: Comentario Adicional (opcional)"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black bg-white text-sm mt-2"
                />
              </div>
            </div>
          </div>


          {/* PAGO */}

          <div className="w-full pt-1">
            <div className="flex justify-between font-bold text-lg text-black mb-4">
              <span>Producto</span>
              <span>Subtotal</span>
            </div>

            <div className="space-y-3 mb-4">
              {cart && cart.length > 0 ? (
                cart.map((item: any) => {
                  const qty = item.count || item.quantity || 1;
                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        <span className="text-gray-700 font-medium">{item.title || item.name}</span>{' '}
                        <span className="text-black font-bold">⨉ {qty}</span>
                      </span>
                      <span className="text-black font-medium">
                        CLP. {(item.price * qty * 1000).toLocaleString('es-CL')}
                      </span>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-400 text-sm italic">Tu carrito está vacío.</p>
              )}
            </div>


            {/* TOTAL */}

            <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between text-sm">
                <span className="font-normal text-black">Subtotal</span>
                <span className="text-gray-500 font-medium">
                  CLP. {(subtotal * 1000).toLocaleString('es-CL')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-normal text-black">Total</span>
                <span className="text-[#B88E2F] text-xl font-bold">
                  CLP. {(subtotal * 1000).toLocaleString('es-CL')}
                </span>
              </div>
            </div>


            {/* METODO DE PAGO */}

            <div className="space-y-3 mb-6 text-sm">
              <div>
                <label className="flex items-center gap-3 cursor-pointer font-medium text-black mb-1">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="accent-black w-3.5 h-3.5"
                  />
                  Transferencia Bancaria Directa
                </label>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer font-medium text-gray-500">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-black w-3.5 h-3.5"
                  />
                  Efectivo
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full sm:w-3/4 py-3.5 border border-black rounded-xl text-black font-medium text-sm hover:bg-black hover:text-white transition-colors text-center"
              >
                Realizar pedido
              </button>
            </div>

          </div>

        </form>
      </div>

    </div>
  );
}