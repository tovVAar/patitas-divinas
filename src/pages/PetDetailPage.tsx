import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pets } from '../data/pets';
import BottomNav from '../components/BottomNav';
import './PetDetailPage.css';

const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
      <div className="pet-detail-page error">
        <div className="error-content">
          <span className="error-icon">😕</span>
          <h2>Mascota no encontrada</h2>
          <button className="back-button" onClick={() => navigate('/adopta')}>
            Volver a la lista
          </button>
        </div>
        <BottomNav />
      </div>
    );
  }

  const handleAdoptClick = () => {
    alert(`¡Gracias por tu interés en ${pet.name}! Esta es una versión de prueba (MVP).`);
  };

  return (
    <div className="pet-detail-page">
      <div className="detail-header">
        <button className="back-icon-btn" onClick={() => navigate('/adopta')}>
          ←
        </button>
        <span className="header-title">{pet.name}</span>
        <div style={{ width: 40 }}></div> {/* Spacer for centering */}
      </div>

      <div className="pet-hero-image">
        {pet.imageUrl ? (
          <img src={pet.imageUrl} alt={pet.name} />
        ) : (
          <div className="placeholder-hero">
            {pet.species === 'perro' ? '🐕' : '🐈'}
          </div>
        )}
        {pet.isAdopted && <div className="detail-adopted-badge">Ya adoptado</div>}
      </div>

      <div className="detail-content">
        <div className="detail-main-info">
          <h1 className="detail-name">{pet.name}</h1>
          <div className="detail-location">📍 {pet.location}</div>
        </div>

        <div className="detail-tags-row">
          <div className="detail-tag-item">
            <span className="tag-label">Especie</span>
            <span className="tag-value">{pet.species}</span>
          </div>
          <div className="detail-tag-item">
            <span className="tag-label">Raza</span>
            <span className="tag-value">{pet.breed}</span>
          </div>
          <div className="detail-tag-item">
            <span className="tag-label">Edad</span>
            <span className="tag-value">{pet.age}</span>
          </div>
          <div className="detail-tag-item">
            <span className="tag-label">Sexo</span>
            <span className="tag-value">{pet.gender}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3 className="section-heading">Sobre {pet.name}</h3>
          <p className="detail-description">{pet.description}</p>
        </div>

        {pet.tags && pet.tags.length > 0 && (
          <div className="detail-section">
            <h3 className="section-heading">Personalidad</h3>
            <div className="personality-tags">
              {pet.tags.map(tag => (
                <span key={tag} className="personality-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        <div className="action-buttons">
          <button 
            className="adopt-btn" 
            onClick={handleAdoptClick}
            disabled={pet.isAdopted}
          >
            {pet.isAdopted ? 'Ya ha sido adoptado' : 'Quiero adoptar'}
          </button>
          <button className="secondary-btn" onClick={() => navigate('/adopta')}>
            Volver a la lista
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PetDetailPage;
