import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jeu} from '../_models/jeu';
// import {JeuxService} from '../jeux.service';
import {Observable} from 'rxjs';
import {JeuService} from '../_services/jeu.service';

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.css']
})
export class ListeJeuxComponent implements OnInit {
  jeu: Jeu = {id:0, mecanique:"", editeur:"", age: 0, url:"", categorie: "", description: "", duree: "", langue: "", nom: "", poids: 0, regles: "", theme: ""};
  jeu: Jeu = {id: 0, age: 0, url: '', categorie: '', description: '', duree: '', langue: '', nom: '', poids: 0, regles: '', theme: ''};
  jeux: Array<Jeu>;
  jeuSelectionne: Jeu;

  constructor(public jeuxService: JeuService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.jeuxService.getAll().subscribe(res => {
      // @ts-ignore
      this.jeux = res;
    });
  }

  // tslint:disable-next-line:typedef
  public getListe() {
    return this.jeux;
  }

  onRowSelect(jeu: Jeu) {
    if (this.jeuSelectionne===jeu) {
      this.jeuSelectionne=undefined;
      console.log(this.jeuSelectionne);
    }
    else {
      this.jeuSelectionne = jeu;
      console.log(this.jeuSelectionne);
    }
  }

}
