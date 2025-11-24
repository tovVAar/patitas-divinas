import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      <div 
        className={`nav-item ${isActive('/') ? 'active' : ''}`}
        onClick={() => navigate('/')}
      >
        <span className="nav-icon">🏠</span>
        <span>Inicio</span>
      </div>
      <div 
        className={`nav-item ${isActive('/adopta') || isActive('/mascota') ? 'active' : ''}`}
        onClick={() => navigate('/adopta')}
      >
        <span className="nav-icon">🐾</span>
        <span>Adopta</span>
      </div>
      <div 
        className={`nav-item ${isActive('/dar-en-adopcion') ? 'active' : ''}`}
        onClick={() => navigate('/dar-en-adopcion')}
      >
        <span className="nav-icon">💖</span>
        <span>Dar en adopción</span>
      </div>
    </nav>
  );
};

export default BottomNav;
