interface ServicioCardProps {
  titulo: string;
  subtitulo: string;
  imagen?: string;
  descripcion: string;
  duracion?: string;
  precio?: string;
}

export default function ServicioCard({
  titulo,
  subtitulo,
  imagen = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  descripcion,
  duracion,
  precio
}: ServicioCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-hard transition-all duration-300 hover:-translate-y-2">
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {titulo}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-3">
          {descripcion}
        </p>

        {/* Botón */}
        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 cursor-pointer">
          Más Información
        </button>
      </div>
    </div>
  );
}