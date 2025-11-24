import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { addUserPet } from '../store/petsStore';
import { Pet } from '../types/Pet';
import './GiveAdoptionPage.css';

const DOG_EMOJIS = ['🐶', '🐕', '🐕‍🦺', '🐩'];
const CAT_EMOJIS = ['🐱', '🐈', '🐈‍⬛', '😺'];

interface FormData {
  name: string;
  species: 'perro' | 'gato';
  breed: string;
  gender: 'macho' | 'hembra';
  color: string;
  age: string;
  size: 'pequeño' | 'mediano' | 'grande';
  location: string;
  imageUrl: string;
  description: string;
  tags: string;
  emoji: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  species: 'perro',
  breed: '',
  gender: 'macho',
  color: '',
  age: '',
  size: 'mediano',
  location: '',
  imageUrl: '',
  description: '',
  tags: '',
  emoji: DOG_EMOJIS[0]
};

const GiveAdoptionPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // Update emoji options when species changes
  useEffect(() => {
    const currentEmojis = form.species === 'perro' ? DOG_EMOJIS : CAT_EMOJIS;
    if (!currentEmojis.includes(form.emoji)) {
      setForm(prev => ({ ...prev, emoji: currentEmojis[0] }));
    }
  }, [form.species, form.emoji]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    const requiredFields: (keyof FormData)[] = [
      'name', 'species', 'breed', 'gender', 'color', 
      'age', 'size', 'location', 'imageUrl', 'description', 'tags'
    ];

    requiredFields.forEach(field => {
      if (!form[field].trim()) {
        newErrors[field] = 'Este campo es obligatorio';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    const tagsArray = form.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    
    // Fallback image if URL seems broken or empty (though validation checks empty)
    const finalImageUrl = form.imageUrl.trim() || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=60';

    const newPet: Pet = {
      id: Date.now().toString(),
      name: form.name.trim(),
      species: form.species,
      breed: form.breed.trim(),
      gender: form.gender,
      color: form.color.trim(),
      age: form.age.trim(),
      size: form.size,
      location: form.location.trim(),
      isAdopted: false,
      imageUrl: finalImageUrl,
      description: form.description.trim(),
      tags: tagsArray,
      emoji: form.emoji
    };

    addUserPet(newPet);
    
    // Optional: Show success message or toast here
    // For now, just redirect
    navigate('/adopta');
  };

  const currentEmojis = form.species === 'perro' ? DOG_EMOJIS : CAT_EMOJIS;

  return (
    <div className="give-adoption-page">
      <header className="give-adoption-header">
        <h1 className="give-adoption-title">Dar en adopción</h1>
        <p className="give-adoption-subtitle">Completa los datos de tu mascota para que alguien pueda adoptarla</p>
      </header>

      <form className="adoption-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input 
            type="text" 
            name="name" 
            className="form-input" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Ej. Firulais"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Especie</label>
          <select name="species" className="form-select" value={form.species} onChange={handleChange}>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Emoji</label>
          <select name="emoji" className="form-select" value={form.emoji} onChange={handleChange}>
            {currentEmojis.map(emoji => (
              <option key={emoji} value={emoji}>{emoji}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Raza</label>
          <input 
            type="text" 
            name="breed" 
            className="form-input" 
            value={form.breed} 
            onChange={handleChange} 
            placeholder="Ej. Mestizo, Labrador..."
          />
          {errors.breed && <span className="error-message">{errors.breed}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Sexo</label>
          <select name="gender" className="form-select" value={form.gender} onChange={handleChange}>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Color</label>
          <input 
            type="text" 
            name="color" 
            className="form-input" 
            value={form.color} 
            onChange={handleChange} 
            placeholder="Ej. Negro, Blanco con manchas..."
          />
          {errors.color && <span className="error-message">{errors.color}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Edad</label>
          <input 
            type="text" 
            name="age" 
            className="form-input" 
            value={form.age} 
            onChange={handleChange} 
            placeholder="Ej. 3 meses, 2 años..."
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Tamaño</label>
          <select name="size" className="form-select" value={form.size} onChange={handleChange}>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Ubicación</label>
          <input 
            type="text" 
            name="location" 
            className="form-input" 
            value={form.location} 
            onChange={handleChange} 
            placeholder="Ej. CDMX - Narvarte"
          />
          {errors.location && <span className="error-message">{errors.location}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">URL de Foto</label>
          <input 
            type="text" 
            name="imageUrl" 
            className="form-input" 
            value={form.imageUrl} 
            onChange={handleChange} 
            placeholder="https://..."
          />
          {errors.imageUrl && <span className="error-message">{errors.imageUrl}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Descripción</label>
          <textarea 
            name="description" 
            className="form-textarea" 
            value={form.description} 
            onChange={handleChange} 
            placeholder="Cuéntanos sobre su personalidad, historia, etc."
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Tags (separados por coma)</label>
          <input 
            type="text" 
            name="tags" 
            className="form-input" 
            value={form.tags} 
            onChange={handleChange} 
            placeholder="Ej. Juguetón, Cariñoso, Vacunado"
          />
          {errors.tags && <span className="error-message">{errors.tags}</span>}
        </div>

        <button type="submit" className="submit-btn">Publicar mascota</button>
      </form>

      <BottomNav />
    </div>
  );
};

export default GiveAdoptionPage;
