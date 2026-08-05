'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isLogged?: boolean;
  logout?: () => void;
}

export default function ProfilePage() {
  const { logout } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();


  // Datos de ejemplo

  const [userData, setUserData] = useState({
    name: 'Carlos Mendoza',
    email: 'carlos.mendoza@ejemplo.cl',
    phone: '+56 9 5555 4321',
    region: 'Metropolitan Region',
    address: 'Av. Las Condes 1234, Apt 402'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    if (logout) logout();
    router.push('/login');
  };

  return (
    <div className="bg-white font-sans text-gray-800 w-full min-h-screen">


      {/* BANNER SUPERIOR */}

      <div className="relative h-48 w-full flex flex-col items-center justify-center bg-[#F9F1E7]">
        <div className="relative z-10 text-center">
          <div className="text-3xl text-[#B88E2F] mb-1 font-bold">👤</div>
          <h1 className="text-3xl font-semibold text-black">My Account</h1>
          <p className="mt-1 text-sm text-gray-600">
            <Link href="/" className="font-bold text-black hover:underline">Home</Link> &gt; <span className="text-gray-500">Profile</span>
          </p>
        </div>
      </div>


      {/* CONTENIDO DEL PERFIL */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#F9F1E7] border border-gray-200 rounded-2xl p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#B88E2F] text-white flex items-center justify-center text-3xl font-bold shadow">
                {userData.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">{userData.name}</h2>
                <p className="text-gray-500 text-sm">{userData.email}</p>
                <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  Active Session
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors cursor-pointer"
            >
              Log Out
            </button>
          </div>


          {/* DETALLES DE LA CUENTA */}

          <div className="pt-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-black">Personal Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm font-semibold text-[#B88E2F] hover:underline cursor-pointer"
              >
                {isEditing ? 'Cancel' : 'Edit Information'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white text-sm disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Email Address</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white text-sm disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Phone Number</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white text-sm disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Region / Location</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={userData.region}
                  onChange={(e) => setUserData({ ...userData, region: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white text-sm disabled:bg-gray-100 disabled:text-gray-500 outline-none focus:border-black"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-[#B88E2F] hover:bg-[#a07a27] text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-colors cursor-pointer shadow"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>


          {/* ACCESO RÁPIDO */}
          
          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-between">
            <Link
              href="/product"
              className="bg-white border border-gray-300 hover:border-black text-black px-6 py-3 rounded-xl font-medium text-sm transition-colors text-center flex-1"
            >
              🛍️ View Products
            </Link>
            <Link
              href="/cart"
              className="bg-white border border-gray-300 hover:border-black text-black px-6 py-3 rounded-xl font-medium text-sm transition-colors text-center flex-1"
            >
              🛒 Go to Cart
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}