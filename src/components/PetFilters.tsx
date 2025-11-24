import React from 'react';
import './PetFilters.css';

interface PetFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  speciesFilter: string;
  setSpeciesFilter: (species: string) => void;
  genderFilter: string;
  setGenderFilter: (gender: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  locations: string[];
}

const PetFilters: React.FC<PetFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  speciesFilter,
  setSpeciesFilter,
  genderFilter,
  setGenderFilter,
  locationFilter,
  setLocationFilter,
  locations
}) => {
  return (
    <div className="pet-filters">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar por nombre o raza"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filters-row">
        <select 
          value={speciesFilter} 
          onChange={(e) => setSpeciesFilter(e.target.value)}
          className="filter-select"
        >
          <option value="Todos">Especie: Todos</option>
          <option value="perro">Perros</option>
          <option value="gato">Gatos</option>
        </select>

        <select 
          value={genderFilter} 
          onChange={(e) => setGenderFilter(e.target.value)}
          className="filter-select"
        >
          <option value="Todos">Género: Todos</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>

        <select 
          value={locationFilter} 
          onChange={(e) => setLocationFilter(e.target.value)}
          className="filter-select"
        >
          <option value="Todas">Ubicación: Todas</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PetFilters;
