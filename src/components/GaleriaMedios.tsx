import { useState } from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
}

export default function GaleriaMedios() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      title: 'Sesión Práctica',
      description: 'Alumnos aplicando técnicas de sublimación',
      thumbnail: '/images/galeria1.jpg'
    },
    {
      id: 2,
      type: 'video',
      title: 'Creando Neón Personalizado',
      description: 'Proceso completo de fabricación',
      thumbnail: '/images/galeria2.jpg',
      videoUrl: 'https://www.youtube.com/embed/ejemplo'
    },
    {
      id: 3,
      type: 'image',
      title: 'Resultados Finales',
      description: 'Proyectos terminados por nuestros alumnos',
      thumbnail: '/images/galeria3.jpg'
    },
    {
      id: 4,
      type: 'video',
      title: 'Testimonio Alumno',
      description: 'Experiencia en nuestros talleres',
      thumbnail: '/images/galeria4.jpg',
      videoUrl: 'https://www.youtube.com/embed/ejemplo2'
    },
    {
      id: 5,
      type: 'image',
      title: 'Ambiente de Trabajo',
      description: 'Nuestro espacio creativo equipado',
      thumbnail: '/images/galeria5.jpg'
    },
    {
      id: 6,
      type: 'image',
      title: 'Materiales Premium',
      description: 'Insumos de alta calidad para tus proyectos',
      thumbnail: '/images/galeria6.jpg'
    }
  ];

  const openMedia = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      {/* Galería Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <div 
            key={item.id}
            className="group relative overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700 hover:border-[#ffbb01] transition-all duration-300 cursor-pointer"
            onClick={() => openMedia(item)}
          >
            {/* Thumbnail */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              
              {/* Placeholder con icono */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
                {item.type === 'video' ? (
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-[#ffbb01]/20 flex items-center justify-center group-hover:bg-[#ffbb01]/30 transition-all duration-300">
                      <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-white ml-1"></div>
                    </div>
                    <div className="absolute inset-0 animate-ping opacity-20">
                      <div className="w-20 h-20 rounded-full bg-[#ffbb01]"></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#ffbb01]/20 flex items-center justify-center group-hover:bg-[#ffbb01]/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-[#ffbb01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Badge de tipo */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.type === 'video' ? 'bg-red-600 text-white' : 'bg-[#ffbb01] text-black'}`}>
                  {item.type === 'video' ? 'VIDEO' : 'IMAGEN'}
                </span>
              </div>
            </div>

            {/* Información */}
            <div className="p-5">
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffbb01] transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </div>

            {/* Efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffbb01]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Modal para ver medios */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeMedia}
              className="absolute -top-12 right-0 text-white hover:text-[#ffbb01] transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-400 mb-6">{selectedMedia.description}</p>
                
                {selectedMedia.type === 'video' && selectedMedia.videoUrl ? (
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      src={selectedMedia.videoUrl}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allowFullScreen
                      title={selectedMedia.title}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-96 bg-zinc-800 rounded-lg">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#ffbb01]/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#ffbb01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-400">Imagen: {selectedMedia.title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}