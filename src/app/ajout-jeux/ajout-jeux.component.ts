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
  // tslint:disable-next-line:max-line-length
  jeu: Jeu = {id: 0, nombrejoueurs: 0, note:0,url: '', editeur: '', mecanique: '', age: 0, categorie: '', description: '', duree: '', langue: '', nom: '', poids: 0, regles: '', theme: ''};
  constructor(private messageService: MessageService, public jeuService: JeuService) { }

  ngOnInit(): void {

      this.formulaire = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      description: new FormControl('', Validators.required),
      theme: new FormControl(1, Validators.required),
      editeur: new FormControl(1, Validators.required),
      mecanique: new FormControl(1, Validators.required),
      url_media: new FormControl(''),
      categorie: new FormControl('', Validators.required),
      regle: new FormControl('', Validators.required),
      langue: new FormControl('', Validators.required),
      nombre_joueur: new FormControl(2, [Validators.required, Validators.min(2), Validators.max(8)]),
      age: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(16)]),
      poids: new FormControl(0.1, [Validators.required, Validators.min(0.1), Validators.max(5.00)]),
      duree: new FormControl(0, Validators.required)
    });



      this.jeuService.getThemes().subscribe(
      themes => {
        this.themes = themes;
      },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'impossible d\'obtenir la liste des jeux' , key: 'main'});
      }
    );
      this.jeuService.getEditeurs().subscribe(
      editeurs => {
        this.editeurs = editeurs;
      },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'impossible d\'obtenir la liste des jeux' , key: 'main'});
      }
    );
      this.jeuService.getMecaniques().subscribe(
      mecaniques => {
        this.mecaniques = mecaniques;
      },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'impossible d\'obtenir la liste des jeux' , key: 'main'});
      }
    );
  }
  ajoutJeu(): void {
    this.jeu = {
     ...this.jeu, ...this.formulaire.value


    };
    this.jeuService.ajoutJeu(this.jeu).subscribe(res => { console.log(res);  });
  }

}
