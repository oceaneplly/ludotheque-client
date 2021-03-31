import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jeu} from '../_models/jeu';
// import {JeuxService} from '../jeux.service';
import {Observable} from 'rxjs';
import {JeuService} from '../_services/jeu.service';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.css']
})
export class ListeJeuxComponent implements OnInit {
  jeu: Jeu = {
    id: 0,
    nombre_joueurs: 0,
    note: 0,
    mecaniques: undefined,
    editeur_id: undefined,
    age: 0,
    url: '',
    categorie: '',
    description: '',
    duree: '',
    langue: '',
    nom: '',
    poids: 0,
    regles: '',
    theme_id: undefined,
    commentaires: undefined
  };
  jeux: Array<Jeu>;
  jeuSelectionne: Jeu;
  tri: string;
  tableauJeu: Array<Jeu>;

  tableauNombre = [];
  selectNombre = [];
  tableauTheme = [];
  selectTheme = [];
  tableauEditeur = [];
  selectEditeur = [];
  tableauAge = [];
  selectAge = [];

  filtrage: boolean;
  constructor(public jeuxService: JeuService, private scroll: ViewportScroller) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.jeuxService.getAll().subscribe(res => {
      // @ts-ignore
      this.jeux = res;
      console.log(res);
      res.forEach((x: Jeu) => {

        // if (x.theme_id.nom !== undefined && !this.contenirTheme(x.theme_id.nom)){
        //   this.tableauTheme.push({name: x.theme_id.nom, code: x.theme_id.nom});
        // }
        if (x.age !== undefined && !this.contenirAge(x.age)){
          this.tableauAge.push({name: x.age, code: x.age});
        }

      });
    });
    this.tri = '';
    this.filtrage = false;
    this.tableauJeu = [];
  }

  // tslint:disable-next-line:typedef
  public getListe() {
    return this.jeux;
  }

  // tslint:disable-next-line:typedef
  onRowSelect(jeu: Jeu) {
      this.jeuSelectionne = jeu;
      this.scroll.scrollToPosition([0, 100]);
  }

  onTri(): void {
    if (this.tri === 'pi pi-sort-numeric-down') {
      this.tri = 'pi pi-sort-alpha-up';
      this.jeux.sort(function(a, b) {
        const nameA = a.nom.toUpperCase();
        const nameB = b.nom.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

      });
    }
    else {
      this.jeux.sort((a, b) => a.id - b.id);
      this.tri = 'pi pi-sort-numeric-down';
    }
  }

  contenirAge(id: any): boolean {
    let verif = false;
    this.tableauAge.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirAge1(id: any): boolean {
    let verif = false;
    this.selectAge.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirTheme(id: any): boolean {
    let verif = false;
    this.tableauTheme.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirTheme1(id: any): boolean {
    let verif = false;
    this.selectTheme.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  filtrageCoursAge(): void {
    if (this.selectAge.length == 0 && this.selectTheme.length == 0 && this.selectNombre.length == 0 && this.selectEditeur.length == 0) {
      this.filtrage = false;
    }
    else {
      this.tableauJeu = [];
      this.jeux.forEach((x: Jeu) => {
        this.filtrage = true;
        if (this.contenirAge1(x.age)) {
          this.tableauJeu.push(x);
        }
        }
      );
    }}

  filtrageCoursTheme(): void {
    if (this.selectAge.length == 0 && this.selectTheme.length == 0) {
      this.filtrage = false;
    }
    else {
      this.tableauJeu = [];
      this.jeux.forEach((x: Jeu) => {
          this.filtrage = true;
          // if (this.contenirTheme1(x.theme_id.nom)) {
          //   this.tableauJeu.push(x);
          // }
        }
      );
    }}

  // tslint:disable-next-line:typedef
    onRowUnselect() {
      // tslint:disable-next-line:no-unused-expression
      this.jeuSelectionne = undefined;
    }

    // getMecaniques(): string {
    //   for
    // }
}
