import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-top">
            <div className="logo-icon">🐾</div>
            <div className="beta-pill">BETA</div>
          </div>
          <div className="logo-tagline">Encuentra un hogar, regala amor</div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-illustration">
          {/* Placeholder for illustration */}
        </div>
        <h1 className="hero-title">Adopta o ayuda con una donación</h1>
        <p className="hero-subtitle">Todo para darles una segunda oportunidad 🐾</p>
      </section>

      {/* CTA BUTTONS */}
      <section className="cta-section">
        <button className="cta-button cta-adopt">
          <span className="cta-main-text">🐶 Quiero adoptar</span>
          <span className="cta-sub-text">Explora mascotas cerca de ti</span>
        </button>
        
        <button className="cta-button cta-give">
          <span className="cta-main-text">🏡 Dar en adopción</span>
          <span className="cta-sub-text">Busca un nuevo hogar para tu mascota</span>
        </button>
      </section>

      {/* DESTACADOS */}
      <section className="featured-section">
        <h2 className="section-title">Amigos que buscan hogar</h2>
        <div className="carousel">
          {/* Card 1 */}
          <div className="pet-card">
            <div className="pet-image">🐕</div>
            <h3 className="pet-name">Luna</h3>
            <div className="pet-tags">
              <span className="pet-tag">Cachorro</span>
              <span className="pet-tag">Juguetona</span>
            </div>
            <button className="pet-button">Ver más</button>
          </div>

          {/* Card 2 */}
          <div className="pet-card">
            <div className="pet-image">🐈</div>
            <h3 className="pet-name">Max</h3>
            <div className="pet-tags">
              <span className="pet-tag">Tranquilo</span>
              <span className="pet-tag">Cariñoso</span>
            </div>
            <button className="pet-button">Ver más</button>
          </div>

          {/* Card 3 */}
          <div className="pet-card">
            <div className="pet-image">🐕</div>
            <h3 className="pet-name">Rocky</h3>
            <div className="pet-tags">
              <span className="pet-tag">Mediano</span>
              <span className="pet-tag">Protector</span>
            </div>
            <button className="pet-button">Ver más</button>
          </div>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span>Inicio</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">🐾</span>
          <span>Adopta</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">🏡</span>
          <span>Dar en adopción</span>
        </div>
      </nav>
    </div>
  );
};

export default Home;
