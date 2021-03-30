import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {MessageService} from 'primeng/api';
import {Jeu} from '../_models/jeu';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class  JeuService{

  constructor(private http: HttpClient) {}
  // ajoutJeu(): Observable<Jeu> {
  //   return this.http.post(environment.apiUrl + '/jeux',
  //     {
  //       nom: 'Le jeu Catane',
  //       description: 'À vous les joies et les peines de l\'exploration de l\'île de Catane. Prenez le contrôle d\'un maximum de territoires en construisant villages, villes, ports et routes. Profitez au mieux des ressources de cette île si accueillante tout en commerçant avec vos voisins. Mais faites attention au brigand noir. La présence de ce terrible chevalier hante l\'île et peut freiner vos ardeurs de colonisateurs.',
  //       theme: 7,
  //       editeur: 25,
  //       langue: 'Francais',
  //       age: '12',
  //       poids: 4.8,
  //       nombre_joueurs: 8,
  //       categorie: 'Jeux de cartes',
  //       duree: '1 heure 15mns',
  //       regles: '<html><head></head><body><p>C\'est le jeu</p></body></html>'
  //
  //   }, httpOptions)
  //     .pipe(
  //       map(rep => rep.data.item),
  //       catchError(err => throwError(err))
  //     );
  // }

  getJeuHttp(): Observable<Jeu> {
    const url = 'http://localhost:8000/jeux';
    // tslint:disable-next-line:no-shadowed-variable
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }
}
