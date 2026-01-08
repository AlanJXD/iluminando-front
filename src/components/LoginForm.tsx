import { useState } from 'react';
import 'primereact/resources/themes/viva-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 800));

    // Login fake: admin/123
    if (username === 'admin' && password === '123') {
      localStorage.setItem('admin_logged_in', 'true');
      window.location.href = '/admin/inicio';
    } else {
      setError('Usuario o contraseña incorrectos');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
    }}>
      <div style={{ width: '100%', maxWidth: '28rem' }}>
        {/* Logo/Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            background: '#ffffff',
            marginBottom: '1rem'
          }}>
            <i className="pi pi-shield" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}></i>
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem', margin: 0 }}>
            Panel Administrativo
          </h1>
          <p style={{ color: '#9ca3af', margin: '0.5rem 0 0 0' }}>Iluminando</p>
        </div>

        {/* Card de Login */}
        <div style={{
          background: '#2d2d2d',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '2rem',
          border: '1px solid #404040'
        }}>
          <form onSubmit={handleLogin}>
            {/* Usuario */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="username" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#d1d5db',
                marginBottom: '0.5rem'
              }}>
                Usuario
              </label>
              <div style={{ position: 'relative', width: '100%' }}>
                <i className="pi pi-user" style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af',
                  zIndex: 1
                }}></i>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingresa tu usuario"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    background: '#1a1a1a',
                    border: '1px solid #404040',
                    borderRadius: '6px',
                    outline: 'none',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ffffff'}
                  onBlur={(e) => e.target.style.borderColor = '#404040'}
                />
              </div>
            </div>

            {/* Contraseña */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="password" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#d1d5db',
                marginBottom: '0.5rem'
              }}>
                Contraseña
              </label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.5rem 0.75rem 0.75rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    background: '#1a1a1a',
                    border: '1px solid #404040',
                    borderRadius: '6px',
                    outline: 'none',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ffffff'}
                  onBlur={(e) => e.target.style.borderColor = '#404040'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#9ca3af',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className={showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'} style={{ fontSize: '1rem' }}></i>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                marginBottom: '1.5rem',
                padding: '1rem',
                background: '#4a1a1a',
                border: '1px solid #ff4444',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="pi pi-exclamation-circle" style={{ color: '#ffcccc', fontSize: '1.25rem' }}></i>
                <span style={{ color: '#ffcccc', fontSize: '1rem' }}>{error}</span>
              </div>
            )}

            {/* Botón de Login */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem 1.25rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1a1a1a',
                background: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontFamily: 'inherit',
                opacity: loading ? 0.6 : 1
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = '#e5e5e5')}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.background = '#ffffff')}
            >
              {loading ? (
                <>
                  <i className="pi pi-spin pi-spinner"></i>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <i className="pi pi-sign-in"></i>
                  Iniciar Sesión
                </>
              )}
            </button>
          </form>

          {/* Hint para desarrollo */}
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: '#1a1a1a',
            borderRadius: '0.5rem',
            border: '1px solid #404040'
          }}>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', margin: 0 }}>
              <i className="pi pi-info-circle" style={{ marginRight: '0.5rem' }}></i>
              Credenciales de prueba: <span style={{ color: '#ffffff' }}>admin</span> / <span style={{ color: '#ffffff' }}>123</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
            © 2024 Iluminando - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
