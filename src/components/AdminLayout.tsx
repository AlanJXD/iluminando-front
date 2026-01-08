import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import 'primereact/resources/themes/viva-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title = 'Dashboard' }: AdminLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar autenticación
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (!isLoggedIn) {
      window.location.href = '/admin';
    }

    // Detectar móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    window.location.href = '/admin';
  };

  const menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      command: () => { window.location.href = '/admin/inicio'; }
    },
    {
      label: 'Talleres',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Ver Talleres',
          icon: 'pi pi-list',
        },
        {
          label: 'Agregar Taller',
          icon: 'pi pi-plus',
        }
      ]
    },
    {
      label: 'Trabajos',
      icon: 'pi pi-images',
      items: [
        {
          label: 'Galería',
          icon: 'pi pi-image',
        },
        {
          label: 'Subir Trabajo',
          icon: 'pi pi-upload',
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
    },
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-sign-out',
      command: handleLogout
    }
  ];

  const SidebarContent = () => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#1a1a1a' }}>
      {/* Logo */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid #374151' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.5rem',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className="pi pi-bolt" style={{ fontSize: '1.25rem', color: '#1a1a1a' }}></i>
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>Iluminando</h2>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>Panel Admin</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
        <Menu
          model={menuItems}
          style={{ background: 'transparent', color: '#fff', border: 'none', width: '100%' }}
        />
      </div>

      {/* User Info */}
      <div style={{ padding: '1rem', borderTop: '1px solid #374151' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Avatar
            icon="pi pi-user"
            shape="circle"
            style={{ background: '#ffffff', color: '#1a1a1a' }}
          />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#fff', margin: 0 }}>Administrador</p>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>admin</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f' }}>
      {/* Sidebar para Desktop */}
      {!isMobile && (
        <div style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: '16rem',
          borderRight: '1px solid #1f2937',
          background: '#1a1a1a'
        }}>
          <SidebarContent />
        </div>
      )}

      {/* Sidebar móvil */}
      {isMobile && (
        <Sidebar
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
          style={{ background: '#1a1a1a', width: '16rem' }}
        >
          <SidebarContent />
        </Sidebar>
      )}

      {/* Main Content */}
      <div style={{ marginLeft: isMobile ? 0 : '16rem' }}>
        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          borderBottom: '1px solid #1f2937',
          background: '#1a1a1a'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {isMobile && (
                <Button
                  icon="pi pi-bars"
                  onClick={() => setSidebarVisible(true)}
                  className="p-button-text"
                  style={{ color: '#fff' }}
                />
              )}
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>{title}</h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Button
                icon="pi pi-bell"
                className="p-button-rounded p-button-text"
                style={{ color: '#fff' }}
              />
              <Button
                icon="pi pi-sign-out"
                label="Salir"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div style={{ padding: '1.5rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
