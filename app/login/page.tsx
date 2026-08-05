'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';

interface AuthContextType {
  login?: (userData?: any) => void;
  isLogged?: boolean;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  

  // Extraemos la función login de tu AuthContext
  
  const { login } = useContext(AuthContext) as AuthContextType;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // 1. Ejecutamos la función de inicio de sesión del AuthContext

    if (login) {
      login({ email });
    }


    // 2. Redirigimos al usuario a la página de Perfil

    router.push('/profile');
  };

  return (
    <div className="bg-white font-sans min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-[#F9F1E7] border border-gray-200 p-8 rounded-2xl max-w-md w-full shadow-sm">
        <h1 className="text-2xl font-bold text-center text-black mb-6">Log In</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-black mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-black mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white text-sm outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B88E2F] text-white py-3 rounded-xl font-medium hover:bg-[#a07a27] transition-colors mt-2 cursor-pointer shadow-sm"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          <Link href="/" className="hover:underline">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}