import React from 'react';
import { Link } from 'react-router-dom';
import { Pet } from '../types/Pet';
import './PetCard.css';

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Link to={`/mascota/${pet.id}`} className="pet-card-link">
      <div className={`pet-card ${pet.isAdopted ? 'adopted' : ''}`}>
        <div className="pet-image-container">
          {pet.imageUrl ? (
            <img src={pet.imageUrl} alt={pet.name} className="pet-image-img" />
          ) : (
            <div className="pet-image-placeholder">
              {pet.species === 'perro' ? '🐕' : '🐈'}
            </div>
          )}
          {pet.isAdopted && <span className="adopted-badge">Adoptado</span>}
        </div>
        
        <div className="pet-info">
          <h3 className="pet-name">{pet.name}</h3>
          
          <div className="pet-chips">
            <span className="pet-chip species">{pet.species}</span>
            <span className="pet-chip gender">{pet.gender}</span>
            <span className="pet-chip size">{pet.size}</span>
          </div>
          
          <div className="pet-location">
            📍 {pet.location}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
