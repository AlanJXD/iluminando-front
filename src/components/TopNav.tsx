import { useState } from 'react';

interface NavLink {
  name: string;
  href: string;
}

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Cursos y Talleres', href: 'cursos' },
    { name: 'Trabajos Realizados', href: 'trabajos' },
    { name: 'Nosotros', href: 'nosotros' },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-0 cursor-pointer group">
            <img
              src="/img/rayo.png"
              alt="Rayo"
              className="h-23 w-auto logo-neon-glow transition-transform duration-300 group-hover:scale-110"
            />
            <img
              src="/img/luminando-blanco.png"
              alt="Iluminando"
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Menu Centrado */}
          <div className="hidden md:flex md:items-center md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-[#ffbb01] transition-colors duration-300 font-medium text-sm uppercase tracking-wide group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffbb01] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#ffbb01] transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#ffbb01] hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}