import { Pet } from '../types/Pet';
import { pets as basePets } from '../data/pets';

const STORAGE_KEY = 'user_pets';

export const getBasePets = (): Pet[] => {
  return basePets;
};

export const getUserPets = (): Pet[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Error parsing user pets from localStorage', e);
    return [];
  }
};

export const getAllPets = (): Pet[] => {
  const userPets = getUserPets();
  // Combine base pets and user pets. 
  // User pets could be prepended to show them first, or appended.
  // Let's prepend them so the user sees their new pet immediately at the top.
  return [...userPets, ...basePets];
};

export const addUserPet = (pet: Pet): void => {
  const userPets = getUserPets();
  const updatedPets = [pet, ...userPets];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPets));
};
