import { Component, OnInit } from '@angular/core';
import { JeuService} from '../_services/jeu.service'  ;
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Jeu} from '../_models/jeu';

@Component({
  selector: 'app-ajout-jeux',
  templateUrl: './ajout-jeux.component.html',
  styleUrls: ['./ajout-jeux.component.css']
})
export class AjoutJeuxComponent implements OnInit {
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
  constructor(public jeuService : JeuService) { }

  ngOnInit(): void {
  }
  ajoutJeu(): void {
    const form = this.formulaire.value;
    this.jeuService.ajoutJeu(form.nom, form.description, form.theme , form.editeur, form.langue, form.age, form.poids, form.nombre_joueurs, form.categorie , form.duree, form.regles);



  }
}
