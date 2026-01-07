import { useState } from 'react';

interface MediaItem {
  tipo: 'imagen' | 'video';
  url: string;
  titulo: string;
  descripcion: string;
}

export default function GaleriaExperiencias() {
  const [categoriaActiva, setCategoriaActiva] = useState<'todas' | 'sublimacion' | 'neon'>('todas');

  // Datos de ejemplo - En producción vendrían de una API o CMS
  const mediaItems: MediaItem[] = [
    {
      tipo: 'imagen',
      url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
      titulo: 'Taller de Sublimación',
      descripcion: 'Estudiantes creando sus primeros diseños'
    },
    {
      tipo: 'imagen',
      url: 'https://images.unsplash.com/photo-1551650993-c0d0a97ec69d?w=800&q=80',
      titulo: 'Neón LED Creativo',
      descripcion: 'Proceso de diseño de letreros luminosos'
    },
    {
      tipo: 'imagen',
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
      titulo: 'Proyectos Terminados',
      descripcion: 'Galería de trabajos de nuestros estudiantes'
    },
    {
      tipo: 'imagen',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      titulo: 'Ambiente de Aprendizaje',
      descripcion: 'Grupos colaborativos en acción'
    },
    {
      tipo: 'imagen',
      url: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=800&q=80',
      titulo: 'Técnicas Avanzadas',
      descripcion: 'Masterclass de sublimación profesional'
    },
    {
      tipo: 'imagen',
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
      titulo: 'Certificación',
      descripcion: 'Entrega de certificados a graduados'
    },
  ];

  const categorias = [
    { id: 'todas', nombre: 'Todas' },
    { id: 'sublimacion', nombre: 'Sublimación' },
    { id: 'neon', nombre: 'Neón LED' },
  ];

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => setCategoriaActiva(categoria.id as any)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              categoriaActiva === categoria.id
                ? 'bg-[#ffbb01] text-gray-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {categoria.nombre}
          </button>
        ))}
      </div>

      {/* Grid de Galería */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-hard transition-all duration-300 cursor-pointer bg-white"
          >
            {/* Imagen */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.url}
                alt={item.titulo}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Overlay con información */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-2">{item.titulo}</h3>
              <p className="text-gray-200 text-sm">{item.descripcion}</p>

              {/* Ícono de play para videos */}
              {item.tipo === 'video' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-[#ffbb01] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Badge de tipo */}
            <div className="absolute top-4 right-4 bg-[#ffbb01] text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {item.tipo === 'video' ? 'Video' : 'Foto'}
            </div>
          </div>
        ))}
      </div>

      {/* Botón cargar más */}
      <div className="text-center pt-8">
        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black hover:shadow-xl transition-all duration-300">
          Cargar Más Experiencias
        </button>
      </div>
    </div>
  );
}
