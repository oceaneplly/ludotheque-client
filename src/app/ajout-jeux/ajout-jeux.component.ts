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
  jeu: Jeu = {id: 0, age: 0, categorie: '', description: '', duree: '', langue: '', nom: '', poids: 0, regles: '', theme: ''};
    formulaire: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    theme: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    editeur: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    url_media: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    langue: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    age : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    poids : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    nbJoueurs : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    categorie : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    duree : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    regles : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1000)])
  });
  constructor(public jeuService: JeuService) { }

  ngOnInit(): void {
  }
  ajoutJeu(): void {
    this.jeu =  {...this.jeu, ...this.formulaire.value};
    console.log(this.jeu);
    this.jeuService.ajoutJeu(this.jeu).subscribe(rep => console.log(rep));
  }

}
