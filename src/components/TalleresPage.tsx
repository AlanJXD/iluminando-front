import { useState, useMemo } from 'react';
import TallerCard from './TallerCard';

interface Taller {
  id: number;
  titulo: string;
  categoria: 'Sublimación' | 'Letreros' | 'Todas';
  imagen: string;
  palabrasClave: string[];
}

const talleresData: Taller[] = [
  {
    id: 1,
    titulo: 'Sublimación en Textiles',
    categoria: 'Sublimación',
    imagen: '/images/taller-textiles.jpg',
    palabrasClave: ['Principiante', 'Textiles', 'Camisetas']
  },
  {
    id: 2,
    titulo: 'Sublimación en Tazas',
    categoria: 'Sublimación',
    imagen: '/images/taller-tazas.jpg',
    palabrasClave: ['Principiante', 'Tazas', 'Cerámica']
  },
  {
    id: 3,
    titulo: 'Letreros Neón LED',
    categoria: 'Letreros',
    imagen: '/images/taller-neon.jpg',
    palabrasClave: ['Intermedio', 'Neón', 'LED']
  },
  {
    id: 4,
    titulo: 'Letreros de Madera',
    categoria: 'Letreros',
    imagen: '/images/taller-madera.jpg',
    palabrasClave: ['Principiante', 'Madera', 'Rústico']
  },
  {
    id: 5,
    titulo: 'Sublimación Avanzada',
    categoria: 'Sublimación',
    imagen: '/images/taller-avanzado.jpg',
    palabrasClave: ['Avanzado', 'Técnicas', 'Profesional']
  },
  {
    id: 6,
    titulo: 'Letreros Corporativos',
    categoria: 'Letreros',
    imagen: '/images/taller-corporativo.jpg',
    palabrasClave: ['Intermedio', 'Negocios', 'Branding']
  }
];

export default function TalleresPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<'Todas' | 'Sublimación' | 'Letreros'>('Todas');
  const [busqueda, setBusqueda] = useState('');
  const [ordenamiento, setOrdenamiento] = useState<'recientes' | 'alfabetico' | 'categoria'>('recientes');

  const talleresFiltrados = useMemo(() => {
    let resultado = [...talleresData];

    // Filtrar por categoría
    if (categoriaActiva !== 'Todas') {
      resultado = resultado.filter(taller => taller.categoria === categoriaActiva);
    }

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      const busquedaLower = busqueda.toLowerCase();
      resultado = resultado.filter(taller =>
        taller.titulo.toLowerCase().includes(busquedaLower) ||
        taller.palabrasClave.some(palabra => palabra.toLowerCase().includes(busquedaLower))
      );
    }

    // Ordenar
    switch (ordenamiento) {
      case 'alfabetico':
        resultado.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case 'categoria':
        resultado.sort((a, b) => a.categoria.localeCompare(b.categoria));
        break;
      case 'recientes':
      default:
        resultado.sort((a, b) => b.id - a.id);
        break;
    }

    return resultado;
  }, [categoriaActiva, busqueda, ordenamiento]);

  return (
    <div>
      {/* Filtros */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4">
          {/* Badges de categorías */}
          <div className="flex gap-2">
            {(['Todas', 'Sublimación', 'Letreros'] as const).map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  categoriaActiva === categoria
                    ? 'bg-[#ffbb01] text-gray-900 shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#ffbb01] hover:text-[#ffbb01]'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Separador vertical */}
          <div className="hidden md:block w-px h-8 bg-gray-300"></div>

          {/* Búsqueda */}
          <div className="flex-1 min-w-[200px] max-w-md">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar talleres..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ffbb01] transition-colors duration-300"
              />
            </div>
          </div>

          {/* Ordenar por */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm whitespace-nowrap">Ordenar por:</span>
            <select
              value={ordenamiento}
              onChange={(e) => setOrdenamiento(e.target.value as any)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#ffbb01] transition-colors duration-300 cursor-pointer"
            >
              <option value="recientes">Recientes</option>
              <option value="alfabetico">A-Z</option>
              <option value="categoria">Categoría</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm">
          {talleresFiltrados.length === 0
            ? 'No se encontraron talleres'
            : `${talleresFiltrados.length} ${talleresFiltrados.length === 1 ? 'taller encontrado' : 'talleres encontrados'}`}
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {talleresFiltrados.map((taller) => (
          <TallerCard
            key={taller.id}
            titulo={taller.titulo}
            categoria={taller.categoria}
            imagen={taller.imagen}
            palabrasClave={taller.palabrasClave}
          />
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {talleresFiltrados.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron talleres</h3>
          <p className="text-gray-600">
            Intenta con otros términos de búsqueda o selecciona otra categoría
          </p>
        </div>
      )}
    </div>
  );
}
