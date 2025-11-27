import React, { useState } from 'react';
import logoImage from '../assets/logo.png';
import './Header.css';

const Header: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <header className="header">
        <div className="brand-container">
          <img src={logoImage} alt="Patitas Divinas" className="logo-img" />
          <div className="brand-text">
            <div className="brand-title-row">
              <h1 className="brand-title">Patitas Divinas</h1>
              <div className="beta-pill">BETA</div>
            </div>
            <p className="brand-tagline">Tu nuevo amigo te espera</p>
          </div>
        </div>
        <button className="help-button" onClick={() => setShowHelp(true)} aria-label="Información del proyecto">
          ❓
        </button>
      </header>

      {/* INFO MODAL */}
      {showHelp && (
        <div className="modal-overlay" onClick={() => setShowHelp(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Sobre el proyecto</h2>
              <button className="modal-close-icon" onClick={() => setShowHelp(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>Esta aplicación fue desarrollada como parte de un proyecto académico para la clase de Administración de proyectos de TIC 2025-2.</p> 
              <p>El objetivo es facilitar la adopción de mascotas y promover el bienestar animal a través de una plataforma amigable y accesible.</p>
              <p><strong>Institución:</strong> <a href='https://infotec.mx/'>INFOTEC</a></p>
              <p><strong>Nombre de la clase:</strong> Administración de proyectos de TIC 2025-2</p>
              <p><strong>Integrantes del equipo:</strong></p>
              <p><strong>Nombre de la Actividad:</strong> 5A. Presentación final del proyecto</p>
              <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                <li>Claudia Lourdes Velasco Marcos</li>
                <li>Francisco Sánchez Torres</li>
                <li>Sheila Magdalena Tirado Arauz</li>
                <li>Erick José Antonio Tovar Marmolejo</li>
              </ul>
              <div className="modal-footer-note">🐾 Patitas Divinas 2025</div>
            </div>
            <button className="modal-action-btn" onClick={() => setShowHelp(false)}>
              ¡Entendido!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
