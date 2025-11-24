export interface Pet {
  id: string;
  name: string;
  species: "perro" | "gato";
  breed: string;
  gender: "macho" | "hembra";
  color: string;
  age: string;
  size: "pequeño" | "mediano" | "grande";
  location: string;
  isAdopted: boolean;
  imageUrl: string;
  description: string;
  tags?: string[];
  emoji?: string;
}
