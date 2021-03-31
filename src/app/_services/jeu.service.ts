import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {Jeu} from '../_models/jeu';
import {Editeur} from '../_models/editeur';
import {Theme} from '../_models/theme';
import {Mecanique} from '../_models/mecanique';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class  JeuService{
  map: Map<number, Jeu>;
  mapTheme: Map<number, string>;

  constructor(private http: HttpClient) {

  }
  getMecaniques(): Observable<Mecanique[]> {
    return this.http.get<any>(environment.apiUrl + '/mecanics', httpOptions)
      .pipe(
        map(rep => rep.data.items),
        catchError(err => throwError(err))
      );
  }

  getEditeurs(): Observable<Editeur[]> {
    return this.http.get<any>(environment.apiUrl + '/editeurs', httpOptions)
      .pipe(
        map(rep => rep.data.items),
        catchError(err => throwError(err))
      );
  }

  getTheme(id: number): string{
    return this.mapTheme.get(id) as string;
  }

  getThemes(): Observable<Theme[]> {
    return this.http.get<any>(environment.apiUrl + '/themes', httpOptions)
      .pipe(
        map(rep => rep.data.items),
        catchError(err => throwError(err))
      );
  }

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

  ajoutJeu(jeu: Jeu): Observable<Jeu> {
    console.log(jeu.editeur_id);
    console.log(jeu.theme_id);
    return this.http.post<any>(environment.apiUrl + '/jeux',
      {
        nom : jeu.nom,
        description : jeu.description,
        theme : jeu.theme_id,
        editeur : jeu.editeur_id,
        mecaniques : jeu.mecaniques,
        url : jeu.url,
        categorie : jeu.categorie,
        regle : jeu.regles,
        langue : jeu.langue,
        nombre_joueurs : jeu.nombre_joueurs,
        age : jeu.age,
        poids : jeu.poids,
        duree : jeu.duree
      }, httpOptions).pipe(
      catchError(err => {
        console.log(err);
        return throwError('bug');
        // return of('');
      }));
  }


  getAll(): Observable<Array<Jeu>> {
    return this.http.get<any>(environment.apiUrl + '/jeux', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
    }
  }
