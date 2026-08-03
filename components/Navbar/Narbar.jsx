import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-black"
        >
          <img src="img/Navbar/Logo.svg" alt="Logo de la empresa" />
        </Link>

        {/* Menú */}
        <div className="hidden items-center gap-8 font-medium lg:flex">
          <Link
            href="/"
            className="text-black/80 transition hover:text-amber-400"
          >
            Inicio
          </Link>

          <Link
            href="/product"
            className="text-black/80 transition hover:text-amber-400"
          >
            Productos
          </Link>

          <Link
            href="/nosotros"
            className="text-black/80 transition hover:text-amber-400"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="text-black/80 transition hover:text-amber-400"
          >
            Contacto
          </Link>
        </div>

        {/* Iconos */}
        <div className="flex items-center gap-6 text-2xl">
          <Link
            href="/login"
            className="text-black transition hover:text-amber-400"
          >
            <img src="img/Navbar/icons/lupa.svg" alt="icono de lupa" />
          </Link>

          <Link
            href="/carrito"
            className="relative text-white transition hover:text-amber-400"
          >
            <img src="img/Navbar/icons/carrito.svg" alt="icono carrito de compra" />

          </Link>
        </div>

      </nav>
    </header>
  );
}