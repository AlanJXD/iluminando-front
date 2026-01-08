interface EstadisticaCardProps {
  titulo: string;
  valor: string;
  descripcion: string;
  tendencia?: 'up' | 'down' | 'neutral';
}

export default function EstadisticaCard({ 
  titulo, 
  valor, 
  descripcion,
  tendencia = 'up' 
}: EstadisticaCardProps) {
  const tendenciaColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  };

  const tendenciaIcono = {
    up: '↗',
    down: '↘',
    neutral: '→'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-lg font-bold text-gray-900">{titulo}</h4>
        <span className={`text-sm font-medium ${tendenciaColor[tendencia]}`}>
          {tendenciaIcono[tendencia]}
        </span>
      </div>
      
      <div className="text-3xl font-bold text-gray-900 mb-2">{valor}</div>
      
      <p className="text-sm text-gray-600">{descripcion}</p>
      
      {/* Barra de progreso */}
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${tendencia === 'up' ? 'bg-[#ffbb01]' : 'bg-gray-400'}`}
          style={{ width: tendencia === 'up' ? '75%' : tendencia === 'down' ? '40%' : '60%' }}
        />
      </div>
    </div>
  );
}