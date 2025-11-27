import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import { pets } from './data/pets';
import heroImage from './assets/hero.png';
import './home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Select 3 random pets for the featured section
  const featuredPets = useMemo(() => {
    const shuffled = [...pets].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="home-container">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-illustration">
          <img src={heroImage} alt="Mascotas felices" className="hero-img" />
        </div>
        <h1 className="hero-title">Patitas Divinas</h1>
        <p className="hero-subtitle">Tu nuevo amigo te espera 🐾</p>
      </section>

      {/* CTA BUTTONS */}
      <section className="cta-section">
        <button className="cta-button cta-adopt" onClick={() => navigate('/adopta')}>
          <span className="cta-main-text">🐶 Quiero adoptar</span>
          <span className="cta-sub-text">Explora mascotas cerca de ti</span>
        </button>
        
        <button className="cta-button cta-give" onClick={() => navigate('/dar-en-adopcion')}>
          <span className="cta-main-text">🏡 Dar en adopción</span>
          <span className="cta-sub-text">Busca un nuevo hogar para tu mascota</span>
        </button>
      </section>

      {/* DESTACADOS */}
      <section className="featured-section">
        <h2 className="section-title">Amigos que buscan hogar</h2>
        <div className="carousel">
          {featuredPets.map(pet => (
            <div key={pet.id} className="pet-card" onClick={() => navigate(`/mascota/${pet.id}`)}>
              <div className="pet-image">{pet.emoji || (pet.species === 'perro' ? '🐕' : '🐈')}</div>
              <h3 className="pet-name">{pet.name}</h3>
              <div className="pet-tags">
                {pet.tags?.slice(0, 2).map(tag => (
                  <span key={tag} className="pet-tag">{tag}</span>
                ))}
              </div>
              <button className="pet-button">Ver más</button>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM NAV */}
      <BottomNav />
    </div>
  );
};

export default Home;
