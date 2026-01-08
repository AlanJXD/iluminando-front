import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { useState } from 'react';
import 'primereact/resources/themes/viva-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function AdminDashboard() {
  const [chartData] = useState({
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Talleres Impartidos',
        data: [12, 15, 18, 14, 20, 22],
        backgroundColor: 'rgba(255, 187, 1, 0.2)',
        borderColor: '#ffbb01',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  });

  const [chartOptions] = useState({
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#9ca3af'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        ticks: {
          color: '#9ca3af'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  });

  const recentTalleres = [
    { id: 1, nombre: 'Sublimación Básica', fecha: '2024-01-15', estudiantes: 12, estado: 'Completado' },
    { id: 2, nombre: 'Neón LED Avanzado', fecha: '2024-01-18', estudiantes: 8, estado: 'En Curso' },
    { id: 3, nombre: 'Sublimación Textiles', fecha: '2024-01-20', estudiantes: 15, estado: 'Programado' },
    { id: 4, nombre: 'Letreros Personalizados', fecha: '2024-01-22', estudiantes: 10, estado: 'Programado' }
  ];

  const estadoTemplate = (rowData: any) => {
    const severity = rowData.estado === 'Completado' ? 'success' : rowData.estado === 'En Curso' ? 'warning' : 'info';
    return <Tag value={rowData.estado} severity={severity} />;
  };

  const StatCard = ({ title, value, change, icon, iconBg, iconColor }: any) => (
    <Card style={{ background: '#1a1a1a', border: '1px solid #1f2937' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>{value}</p>
          <p style={{ color: '#10b981', fontSize: '0.75rem', marginTop: '0.5rem', margin: 0 }}>
            <i className="pi pi-arrow-up" style={{ marginRight: '0.25rem' }}></i>
            {change}
          </p>
        </div>
        <div style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          background: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className={icon} style={{ fontSize: '1.5rem', color: iconColor }}></i>
        </div>
      </div>
    </Card>
  );

  const ActivityItem = ({ icon, iconBg, iconColor, title, subtitle, time }: any) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
      <div style={{
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        background: iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <i className={icon} style={{ color: iconColor }}></i>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ color: '#fff', fontSize: '0.875rem', fontWeight: '600', margin: 0 }}>{title}</p>
        <p style={{ color: '#9ca3af', fontSize: '0.75rem', margin: 0 }}>{subtitle}</p>
        <p style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.25rem', margin: 0 }}>{time}</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <StatCard
          title="Total Talleres"
          value="156"
          change="+12% este mes"
          icon="pi pi-book"
          iconBg="rgba(255, 187, 1, 0.2)"
          iconColor="#ffbb01"
        />
        <StatCard
          title="Estudiantes"
          value="1,247"
          change="+8% este mes"
          icon="pi pi-users"
          iconBg="rgba(59, 130, 246, 0.2)"
          iconColor="#3b82f6"
        />
        <StatCard
          title="Trabajos"
          value="342"
          change="+15% este mes"
          icon="pi pi-images"
          iconBg="rgba(168, 85, 247, 0.2)"
          iconColor="#a855f7"
        />
        <StatCard
          title="Satisfacción"
          value="98%"
          change="+2% este mes"
          icon="pi pi-star"
          iconBg="rgba(16, 185, 129, 0.2)"
          iconColor="#10b981"
        />
      </div>

      {/* Chart y Actividad */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          {/* Chart */}
          <Card title="Talleres por Mes" style={{ background: '#1a1a1a', border: '1px solid #1f2937' }}>
            <div style={{ height: '300px' }}>
              <Chart type="line" data={chartData} options={chartOptions} />
            </div>
          </Card>

          {/* Actividad */}
          <Card title="Actividad Reciente" style={{ background: '#1a1a1a', border: '1px solid #1f2937' }}>
            <ActivityItem
              icon="pi pi-user-plus"
              iconBg="rgba(255, 187, 1, 0.2)"
              iconColor="#ffbb01"
              title="Nuevo estudiante"
              subtitle="María se inscribió al taller"
              time="Hace 5 minutos"
            />
            <ActivityItem
              icon="pi pi-check"
              iconBg="rgba(16, 185, 129, 0.2)"
              iconColor="#10b981"
              title="Taller completado"
              subtitle="Sublimación Básica finalizado"
              time="Hace 1 hora"
            />
            <ActivityItem
              icon="pi pi-image"
              iconBg="rgba(59, 130, 246, 0.2)"
              iconColor="#3b82f6"
              title="Nuevo trabajo publicado"
              subtitle="Letrero neón agregado"
              time="Hace 2 horas"
            />
            <ActivityItem
              icon="pi pi-star"
              iconBg="rgba(168, 85, 247, 0.2)"
              iconColor="#a855f7"
              title="Nueva reseña"
              subtitle="5 estrellas de Juan P."
              time="Hace 3 horas"
            />
          </Card>
        </div>
      </div>

      {/* Tabla */}
      <Card title="Talleres Recientes" style={{ background: '#1a1a1a', border: '1px solid #1f2937' }}>
        <DataTable
          value={recentTalleres}
          paginator
          rows={5}
          style={{ background: '#1a1a1a' }}
        >
          <Column field="nombre" header="Nombre del Taller" />
          <Column field="fecha" header="Fecha" />
          <Column field="estudiantes" header="Estudiantes" />
          <Column field="estado" header="Estado" body={estadoTemplate} />
        </DataTable>
      </Card>
    </div>
  );
}
