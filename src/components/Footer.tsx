export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ILUMINANDO</h3>
            <p className="text-gray-600 text-sm">
              Aprende las mejores técnicas de neón y sublimación con expertos apasionados por enseñar.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Cursos y Talleres</h4>
            <ul className="space-y-2">
              <li><a href="#cursos" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Sublimación Básica</a></li>
              <li><a href="#cursos" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Neón LED Flex</a></li>
              <li><a href="#cursos" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Sublimación Avanzada</a></li>
              <li><a href="#cursos" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Ver Todos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Inicio</a></li>
              <li><a href="#cursos" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Cursos y Talleres</a></li>
              <li><a href="#trabajos" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Trabajos Realizados</a></li>
              <li><a href="#nosotros" className="text-gray-600 hover:text-[#ffbb01] transition-colors cursor-pointer">Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Juan Manuel 204, Guadalajara, Jalisco, México 44100</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>33 2535 8437</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>iluminando.gdlmx@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun-Vie: 9am - 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-500">© 2024 Iluminando. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
