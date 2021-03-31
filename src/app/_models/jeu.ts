import {Theme} from './theme';
import {Editeur} from './editeur';
import {Mecanique} from './mecanique';
import {Commentaire} from './commentaire';

export interface Jeu {
  id: number;
  mecaniques: Mecanique;
  nom: string;
  url: string;
  description: string;
  theme_id: number;
  langue: string;
  age: number;
  poids: number;
  categorie: string;
  duree: string;
  regles: string;
  editeur_id: number;
  note: number;
  nombre_joueurs: number;
  commentaires;
}
