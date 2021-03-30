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
  jeu: Jeu = {id:0,nombrejoueurs:0,note: 0, mecanique:"", editeur:"", age: 0, url:"", categorie: "", description: "", duree: "", langue: "", nom: "", poids: 0, regles: "", theme: ""};
  jeux: Array<Jeu>;
  jeuSelectionne: Jeu;
  tri: string;

  tableauNombre = [];
  selectNombre = [];
  tableauTheme = [];
  selectTheme = [];
  tableauEditeur = [];
  selectEditeur = [];
  tableauAge = [];
  selectAge = [];

  constructor(public jeuxService: JeuService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.jeuxService.getAll().subscribe(res => {
      // @ts-ignore
      this.jeux = res;
      console.log(res);
      res.forEach((x : Jeu) => {
        if (x.nombrejoueurs !== undefined) {
          this.tableauNombre.push(x.nombrejoueurs);
        }
        if (x.theme !== undefined) {
          this.tableauTheme.push(x.theme);
        }
        if (x.editeur !== undefined) {
          this.tableauEditeur.push(x.editeur);
        }

      });
    });
    this.tri = 'pi pi-sort-alpha-up';
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

  onTri():void {
    if (this.tri === 'pi pi-sort-numeric-down') {
      console.log("coucou");
      this.tri = 'pi pi-sort-alpha-up';
      this.jeux.sort(function(a, b){
        let nameA = a.nom.toUpperCase();
        let nameB = b.nom.toUpperCase();
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }

      });
    }
    else {
      this.jeux.sort((a, b) => a.id - b.id);
      this.tri = 'pi pi-sort-numeric-down';
    }
  }


}
