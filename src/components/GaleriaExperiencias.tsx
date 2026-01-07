import { useState, useEffect } from 'react';

interface MediaItem {
  tipo: 'imagen' | 'video';
  url: string;
  titulo: string;
  descripcion: string;
}

export default function GaleriaExperiencias() {
  const [mediaSeleccionado, setMediaSeleccionado] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

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

  // Función para cerrar el modal con animación
  const cerrarModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMediaSeleccionado(null);
      setIsClosing(false);
    }, 300); // Duración de la animación
  };

  // Animación al abrir/cambiar modal
  useEffect(() => {
    if (mediaSeleccionado !== null && !isClosing) {
      // Resetear a estado inicial
      setIsOpening(true);
      setImageLoaded(false);

      // Esperar un tick para que el DOM se actualice, luego iniciar la transición
      const timer = setTimeout(() => {
        setIsOpening(false);
        setImageLoaded(true);
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [mediaSeleccionado, isClosing]);

  // Navegación con teclado y bloqueo de scroll
  useEffect(() => {
    if (mediaSeleccionado === null) return;

    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cerrarModal();
      } else if (e.key === 'ArrowLeft' && mediaSeleccionado > 0) {
        setMediaSeleccionado(mediaSeleccionado - 1);
      } else if (e.key === 'ArrowRight' && mediaSeleccionado < mediaItems.length - 1) {
        setMediaSeleccionado(mediaSeleccionado + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mediaSeleccionado, mediaItems.length]);

  return (
    <div className="space-y-8">
      {/* Grid de Galería */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setIsOpening(true);
              setMediaSeleccionado(index);
            }}
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
          </div>
        ))}
      </div>

      {/* Botón cargar más */}
      <div className="text-center pt-8">
        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black hover:shadow-xl transition-all duration-300 cursor-pointer">
          Cargar Más Experiencias
        </button>
      </div>

      {/* Modal Lightbox */}
      {mediaSeleccionado !== null && (
        <div
          className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : isOpening ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={cerrarModal}
        >
          {/* Botón Cerrar */}
          <button
            onClick={cerrarModal}
            className="absolute top-4 right-4 text-white hover:text-[#ffbb01] transition-colors duration-300 cursor-pointer z-[60]"
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Botón Anterior */}
          {mediaSeleccionado > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMediaSeleccionado(mediaSeleccionado - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#ffbb01] text-white hover:text-gray-900 p-4 rounded-full transition-all duration-300 cursor-pointer z-[60] shadow-xl"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Botón Siguiente */}
          {mediaSeleccionado < mediaItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMediaSeleccionado(mediaSeleccionado + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#ffbb01] text-white hover:text-gray-900 p-4 rounded-full transition-all duration-300 cursor-pointer z-[60] shadow-xl"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Contenido del Media */}
          <div
            className={`relative w-full max-w-6xl transition-all duration-300 ${
              isClosing ? 'scale-95 opacity-0' : isOpening ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Imagen */}
              <div className="relative w-full max-h-[70vh] flex items-center justify-center bg-black">
                <img
                  src={mediaItems[mediaSeleccionado].url}
                  alt={mediaItems[mediaSeleccionado].titulo}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              </div>

              {/* Información */}
              <div
                className={`p-6 bg-gray-900 transition-all duration-300 ${
                  imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {mediaItems[mediaSeleccionado].titulo}
                </h3>
                <p className="text-gray-300">
                  {mediaItems[mediaSeleccionado].descripcion}
                </p>
                <p className="text-gray-500 text-sm mt-4">
                  {mediaSeleccionado + 1} / {mediaItems.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
