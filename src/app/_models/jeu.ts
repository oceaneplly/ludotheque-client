import {Theme} from './theme';
import {Editeur} from './editeur';
import {Mecanique} from "./mecanique";

export interface Jeu {
  id: number;
  mecanique: Mecanique;
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
  editeur_id: Editeur;
  note: number;
  nombre_joueurs: number;
}
