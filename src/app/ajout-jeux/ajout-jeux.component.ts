import { Component, OnInit } from '@angular/core';
import { JeuService} from '../_services/jeu.service'  ;
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Jeu} from '../_models/jeu';

interface Theme {
  nom: string;
}

interface Editeur {
  nom: string;
}

interface Mecanique {
  nom: string;
}

@Component({
  selector: 'app-ajout-jeux',
  templateUrl: './ajout-jeux.component.html',
  styleUrls: ['./ajout-jeux.component.css']
})
export class AjoutJeuxComponent implements OnInit {
  jeu: Jeu = {id:0, age: 0, categorie: '', description: '', duree: '', langue: '', nom: '', poids: 0, regles: '', theme: ''};
  themes: Theme[] = [ {nom: 'Abstrait, lettres & mots'}, {nom: 'Animaux & Nature'}, {nom: 'Autres'}, {nom: 'Cartoon & Dessin'},
    {nom: 'Enfance & Contes'}, {nom: 'Fantastique & Héroïc Fantasy'}, {nom: 'Histoire & Antiquité'}, {nom: 'Horreur & Post-Apocalytique'},
    {nom: 'Loisirs & Voyage'}, {nom: 'Moderne & Réaliste'}, {nom: 'Pirates & Cow-boys'}, {nom: 'Science Fiction & Future' }];

  editeurs: Editeur[] = [ {nom: '1-2-3-Games'}, {nom: '1A Games'}, {nom: '2d Sans Faces'}, {nom: '404 Editions'},
    {nom: '4Dados'}, {nom: '7ème Cercle'}, {nom: 'Abacus Spiele'}, {nom: 'Horreur & Post-Apocalytique'},
    {nom: 'Loisirs & Voyage'}, {nom: 'Moderne & Réaliste'}, {nom: 'Pirates & Cow-boys'}, {nom: 'Science Fiction & Future' }];

  mecaniques: Mecanique[] = [ {nom: 'Abstrait'}, {nom: 'Humour'}, {nom: 'Jeu de plateau'}, {nom: 'Enquêtes & Mystères'},
    {nom: 'Antiquité'}, {nom: 'Western'}, {nom: 'Jeu de Cartes'}, {nom: 'Connaissances'},
    {nom: 'jeu de tuiles'}, {nom: 'Lettres'}, {nom: 'Politique'}, {nom: 'Dessin' }, {nom: 'Mime'},
    {nom: 'Zombies'}, {nom: 'Contes' }, {nom: 'Observation'}, {nom: 'Bande dessinée'}, {nom: 'Animaux' }, {nom: 'Affrontement'},
    {nom: 'Commerce'}, {nom: 'Jeu de rôle' }, {nom: 'Chance & Hasard'}, {nom: 'Cuisine'}, {nom: 'Bourse & finances' }, {nom: 'Divers'},
    {nom: 'Histoire'}, {nom: 'choix multiples' }, {nom: 'Jeu d\'Ambiance'}, {nom: 'Chiffres'}, {nom: 'Lettres & chiffres' }];

  formulaire = new FormGroup({
    nom: new FormControl(''),
    description: new FormControl(''),
    theme: new FormControl(''),
    editeur: new FormControl(''),
    langue: new FormControl(''),
    age : new FormControl(''),
    poids : new FormControl(''),
    nombre_joueurs : new FormControl(''),
    categorie : new FormControl(''),
    duree : new FormControl(''),
    regles : new FormControl('')
  });
  constructor(public jeuService: JeuService) { }

  ngOnInit(): void {
  }
  ajoutJeu(): void {
    const form = this.formulaire.value;
    this.jeuService.ajoutJeu(this.jeu).subscribe(res => { console.log(res);  });
  }

}
