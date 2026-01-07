import { useState } from 'react';

interface TarjetaCursoProps {
  titulo: string;
  subtitulo: string;
  imagen: string;
  duracion: string;
  nivel: string;
}

export default function TarjetaCurso({ 
  titulo, 
  subtitulo, 
  imagen, 
  duracion, 
  nivel 
}: TarjetaCursoProps) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black transition-all duration-500 hover:border-[#ffbb01] hover:shadow-[0_0_30px_rgba(255,187,1,0.3)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Imagen del curso */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <div 
          className="w-full h-full bg-zinc-900 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${imagen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Imagen de placeholder si no hay imagen */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
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
        
        {/* Badge de duración */}
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-[#ffbb01] text-black px-3 py-1 rounded-full text-sm font-bold">
            {duracion}
          </span>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffbb01] transition-colors duration-300">
            {titulo}
          </h3>
          <p className="text-gray-400 text-sm">
            {subtitulo}
          </p>
        </div>

        {/* Nivel */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${nivel.includes('Principiante') ? 'bg-green-500' : nivel.includes('Intermedio') ? 'bg-[#ffbb01]' : 'bg-purple-500'}`}></span>
            <span className="text-gray-300 text-sm">{nivel}</span>
          </span>
        </div>

        {/* Botón */}
        <div className="relative overflow-hidden">
          <a 
            href="#inscribirse"
            className="block w-full text-center border-2 border-[#ffbb01] text-[#ffbb01] py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-[#ffbb01] hover:text-black transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,187,1,0.5)]"
          >
            Más Información
          </a>
          
          {/* Efecto de brillo */}
          {hover && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffbb01]/20 to-transparent animate-shimmer"></div>
          )}
        </div>
      </div>

      {/* Efecto de borde brillante */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffbb01]/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}