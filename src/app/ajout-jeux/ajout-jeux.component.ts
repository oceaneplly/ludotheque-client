import { Component, OnInit } from '@angular/core';
import { JeuService} from '../_services/jeu.service'  ;
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Jeu} from '../_models/jeu';
import {Editeur} from '../_models/editeur';
import {Theme} from '../_models/theme';
import {Mecanique} from '../_models/mecanique';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-ajout-jeux',
  templateUrl: './ajout-jeux.component.html',
  styleUrls: ['./ajout-jeux.component.css']
})
export class AjoutJeuxComponent implements OnInit {
  formulaire: FormGroup;
  themes: Theme[];
  mecaniques: Mecanique[];
  editeurs: Editeur[];
  jeu: Jeu;


  constructor(private messageService: MessageService, public jeuService: JeuService) {
  }

  ngOnInit(): void {

    this.formulaire = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      description: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
      theme: new FormControl(1, Validators.required),
      editeur: new FormControl(1, Validators.required),
      mecanique: new FormControl(1, Validators.required),
      url_media: new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]),
      categorie: new FormControl('', Validators.required),
      regle: new FormControl('', [ Validators.minLength(0), Validators.maxLength(1000)]),
      langue: new FormControl('', Validators.required),
      nb_player: new FormControl(2, [Validators.required, Validators.min(2), Validators.max(12)]),
      age: new FormControl(1, [Validators.min(4), Validators.max(18)]),
      poids: new FormControl(1, [Validators.min(0), Validators.max(50)]),
      duree: new FormControl(1, [Validators.min(5), Validators.max(300)])
    });


    this.jeuService.getThemes().subscribe(
      themes => {
        this.themes = themes;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'impossible d\'obtenir la liste des jeux',
          key: 'main'
        });
      }
    );

    this.jeuService.getEditeurs().subscribe(
      editeurs => {
        this.editeurs = editeurs;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'impossible d\'obtenir la liste des jeux',
          key: 'main'
        });
      }
    );

    this.jeuService.getMecaniques().subscribe(
      mecaniques => {
        this.mecaniques = mecaniques;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'impossible d\'obtenir la liste des jeux',
          key: 'main'
        });
      }
    );
  }

  ajoutJeu(): void {
    this.jeu = {
      ...this.jeu, ...this.formulaire.value
    };
    console.log('jeu ', this.jeu);
    this.jeuService.ajoutJeu(this.jeu).subscribe(res => {
      console.log(res);
    });


  }
}
