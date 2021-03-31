import {Theme} from "./theme";

export interface Jeu {
  id: number;
  mecanique: string;
  nom: string;
  url: string;
  description: string;
  theme_id: Theme;
  langue: string;
  age: number;
  poids: number;
  categorie: string;
  duree: string;
  regles: string;
  editeur: string;
  note: number;
  nombrejoueurs: number;
}
