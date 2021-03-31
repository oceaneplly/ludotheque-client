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
    nombrejoueurs: 0,
    note: 0,
    mecanique: '',
    editeur: '',
    age: 0,
    url: '',
    categorie: '',
    description: '',
    duree: '',
    langue: '',
    nom: '',
    poids: 0,
    regles: '',
    theme: ''
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
      res.forEach((x : Jeu) => {
        if (x.nombrejoueurs !== undefined && !this.contenirNombres(x.nombrejoueurs)){
          this.tableauNombre.push({name: x.nombrejoueurs, code: x.nombrejoueurs});
        }
        if (x.theme !== undefined && !this.contenirTheme(x.theme)){
          this.tableauTheme.push({name: x.theme, code: x.theme});
        }
        if (x.editeur !== undefined && !this.contenirEditeur(x.editeur)){
          this.tableauEditeur.push({name: x.editeur, code: x.editeur});
        }
        if (x.age !== undefined && !this.contenirAge(x.age)){
          this.tableauAge.push({name: x.age, code: x.age});
        }

      });
    });
    this.tri = '';
    this.filtrage=false;
    this.tableauJeu=[];
  }

  // tslint:disable-next-line:typedef
  public getListe() {
    return this.jeux;
  }

  // tslint:disable-next-line:typedef
  onRowSelect(jeu: Jeu) {
      this.jeuSelectionne = jeu;
      this.scroll.scrollToPosition([0, 300]);
  }

  onTri(): void {
    if (this.tri === 'pi pi-sort-numeric-down') {
      console.log('coucou');
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

  onTri1(): void {
    if (this.tri === 'pi pi-sort-numeric-down') {
      console.log('coucou');
      this.tri = 'pi pi-sort-alpha-up';
      this.tableauJeu.sort(function(a, b) {
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
      this.tableauJeu.sort((a, b) => a.id - b.id);
      this.tri = 'pi pi-sort-numeric-down';
    }
  }

  contenirAge(id: any): boolean {
    let verif: boolean = false;
    this.tableauAge.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirAge1(id: any): boolean {
    let verif: boolean = false;
    this.selectAge.forEach((x: any) => {
      if (x.name === id) {
        console.log(this.selectAge);
        verif = true;
      }
    });
    return verif;
  }

  contenirEditeur(id: any): boolean {
    let verif: boolean = false;
    this.tableauEditeur.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirEditeur1(id: any): boolean {
    let verif: boolean = false;
    this.selectEditeur.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirNombres(id: any): boolean {
    let verif: boolean = false;
    this.tableauNombre.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirNombres1(id: any): boolean {
    let verif: boolean = false;
    this.selectNombre.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirTheme(id: any): boolean {
    let verif: boolean = false;
    this.tableauTheme.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  contenirTheme1(id: any): boolean {
    let verif: boolean = false;
    this.selectTheme.forEach((x: any) => {
      if (x.name === id) {
        verif = true;
      }
    });
    return verif;
  }

  filtrageCoursAge(): void {
    if(this.selectAge.length==0 && this.selectTheme.length==0 && this.selectNombre.length==0 && this.selectEditeur.length==0) {
      this.filtrage=false;
    }
    else {
      this.tableauJeu=[];
      this.jeux.forEach((x: Jeu) => {
        this.filtrage = true;
        if (this.contenirAge1(x.age))
          this.tableauJeu.push(x);
        }
      );
    }}

  filtrageCoursEditeur(): void {
    if(this.selectAge.length==0 && this.selectTheme.length==0 && this.selectNombre.length==0 && this.selectEditeur.length==0) {
      this.filtrage=false;
    }
    else {
      this.tableauJeu=[];
      this.jeux.forEach((x: Jeu) => {
          this.filtrage = true;
          if (this.contenirEditeur1(x.editeur))
            this.tableauJeu.push(x);
        }
      );
    }}

  filtrageCoursNombre(): void {
    if(this.selectAge.length==0 && this.selectTheme.length==0 && this.selectNombre.length==0 && this.selectEditeur.length==0) {
      this.filtrage=false;
    }
    else {
      this.tableauJeu=[];
      this.jeux.forEach((x: Jeu) => {
          this.filtrage = true;
          if (this.contenirNombres1(x.editeur))
            this.tableauJeu.push(x);
        }
      );
    }}

  filtrageCoursTheme(): void {
    if(this.selectAge.length==0 && this.selectTheme.length==0 && this.selectNombre.length==0 && this.selectEditeur.length==0) {
      this.filtrage=false;
    }
    else {
      this.tableauJeu=[];
      this.jeux.forEach((x: Jeu) => {
          this.filtrage = true;
          if (this.contenirTheme1(x.theme))
            this.tableauJeu.push(x);
        }
      );
    }}

  // tslint:disable-next-line:typedef
    onRowUnselect() {
      // tslint:disable-next-line:no-unused-expression
      this.jeuSelectionne = undefined;
    }
}
