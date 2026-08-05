'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="bg-white font-sans text-gray-800 w-full min-h-screen">


      {/* BANNER SUPERIOR */}

      <div className="relative h-60 w-full flex flex-col items-center justify-center bg-[#F9F1E7]">
        <div className="relative z-10 text-center">
          <div className="text-3xl text-[#B88E2F] mb-1 font-bold">☖</div>
          <h1 className="text-4xl font-semibold text-black">Contact</h1>
          <p className="mt-2 text-sm text-gray-600">
            <Link href="/" className="font-bold text-black hover:underline">Home</Link> &gt;{' '}
            <span className="text-gray-500">Contact</span>
          </p>
        </div>
      </div>


      {/* CONTENIDO PRINCIPAL */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-black mb-3">Get In Touch With Us</h2>
          <p className="text-gray-500 text-sm">
            For more information about our products and services, please feel free to send us a message. Our team will be happy to help you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">


          {/* Detalles de contacto */}

          <div className="space-y-10 pl-4 sm:pl-10">
            <div className="flex items-start gap-4">
              <span className="text-xl text-black mt-1">📍</span>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Address</h3>
                <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
                  Providencia 745, Santiago, Chile
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl text-black mt-1">📞</span>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Phone</h3>
                <p className="text-sm text-gray-600">Mobile: +56 9 8765 4321</p>
                <p className="text-sm text-gray-600">Hotline: +56 2 2345 6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl text-black mt-1">⏰</span>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Working Time</h3>
                <p className="text-sm text-gray-600">Monday-Friday: 9:00 - 20:00</p>
                <p className="text-sm text-gray-600">Saturday-Sunday: 10:00 - 18:00</p>
              </div>
            </div>
          </div>


          {/* Formulario */}

          <div className="bg-white p-2">
            {submitted ? (
              <div className="bg-[#F9F1E7] border border-[#B88E2F] p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-black mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                  onClick={handleReset}
                  className="mt-6 bg-[#B88E2F] text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-[#a07a27] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-black text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-black text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="This is optional"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-black text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi! I'd like to ask about..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-black text-sm bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#B88E2F] hover:bg-[#a07a27] text-white font-medium px-12 py-3.5 rounded-md transition-colors text-sm shadow-sm cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}