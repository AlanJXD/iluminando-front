import { useState } from 'react';

interface TallerCardProps {
  titulo: string;
  categoria: string;
  imagen: string;
  palabrasClave: string[];
}

export default function TallerCard({
  titulo,
  categoria,
  imagen,
  palabrasClave
}: TallerCardProps) {
  const [hover, setHover] = useState(false);

  const getCategoriaIcon = () => {
    switch (categoria) {
      case 'Sublimación':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'Letreros':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:border-[#ffbb01] hover:shadow-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Imagen del taller */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <div
          className="w-full h-full bg-gray-100 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${imagen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Imagen de placeholder si no hay imagen */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffbb01]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#ffbb01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-[#ffbb01] font-bold">ILUMINANDO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Categoría con icono */}
        <div className="flex items-center gap-2 mb-3 text-[#ffbb01]">
          {getCategoriaIcon()}
          <span className="text-sm font-semibold uppercase tracking-wide">{categoria}</span>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ffbb01] transition-colors duration-300">
          {titulo}
        </h3>

        {/* Badges de palabras clave */}
        <div className="flex flex-wrap gap-2 mb-6">
          {palabrasClave.map((palabra, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-xs rounded-full hover:border-[#ffbb01] hover:text-[#ffbb01] transition-colors duration-300"
            >
              {palabra}
            </span>
          ))}
        </div>

        {/* Botón Empezar */}
        <div className="relative overflow-hidden">
          <a
            href="#empezar"
            className="block w-full text-center bg-[#ffbb01] text-gray-900 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-amber-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            Empezar
          </a>

          {/* Efecto de brillo */}
          {hover && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></div>
          )}
        </div>
      </div>

      {/* Efecto de borde brillante */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffbb01]/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}
