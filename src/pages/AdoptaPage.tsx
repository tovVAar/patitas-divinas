import React, { useState, useMemo } from 'react';
import PetCard from '../components/PetCard';
import PetFilters from '../components/PetFilters';
import BottomNav from '../components/BottomNav';
import { pets } from '../data/pets';
import './AdoptaPage.css';

const AdoptaPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('Todos');
  const [genderFilter, setGenderFilter] = useState('Todos');
  const [locationFilter, setLocationFilter] = useState('Todas');

  // Extract unique locations for the filter
  const locations = useMemo(() => {
    const locs = new Set(pets.map(p => p.location.split(' - ')[0])); // Get city part
    return Array.from(locs).sort();
  }, []);

  const filteredPets = useMemo(() => {
    return pets.filter(pet => {
      // Text search
      const matchesSearch = 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Species filter
      const matchesSpecies = speciesFilter === 'Todos' || pet.species === speciesFilter;
      
      // Gender filter
      const matchesGender = genderFilter === 'Todos' || pet.gender === genderFilter;
      
      // Location filter
      const matchesLocation = locationFilter === 'Todas' || pet.location.startsWith(locationFilter);

      return matchesSearch && matchesSpecies && matchesGender && matchesLocation;
    });
  }, [searchTerm, speciesFilter, genderFilter, locationFilter]);

  return (
    <div className="adopta-page">
      <header className="adopta-header">
        <h1 className="adopta-title">Adopta una mascota</h1>
        <p className="adopta-subtitle">Filtra y encuentra tu nuevo compañero</p>
      </header>

      <div className="adopta-content">
        <PetFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          speciesFilter={speciesFilter}
          setSpeciesFilter={setSpeciesFilter}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          locations={locations}
        />

        {filteredPets.length > 0 ? (
          <div className="pets-grid">
            {filteredPets.map(pet => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🐾</div>
            <p>No encontramos mascotas con esos filtros. Prueba cambiarlos.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default AdoptaPage;
