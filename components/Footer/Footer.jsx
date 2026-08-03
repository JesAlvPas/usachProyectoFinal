import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-8">

          {/* Información */}
          <div>
            <h3 className="mb-3 text-3xl font-bold">
              <img src="img/Navbar/Logo.svg" alt="Logo de la empresa" />
            </h3>

            <p className="text-gray-500">
              Región Metropolitana - Santiago de Chile
            </p>
          </div>

          {/* Links */}
          <div>
            <h6 className="mb-3 font-bold text-gray-500">
              Links
            </h6>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 hover:text-amber-500 transition"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/productos"
                  className="text-gray-900 hover:text-amber-500 transition"
                >
                  Productos
                </Link>
              </li>

              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-900 hover:text-amber-500 transition"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="/contacto"
                  className="text-gray-900 hover:text-amber-500 transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-300" />

        <p className="text-sm text-gray-500">
          © 2026 MARCA. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}