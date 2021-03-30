import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {Jeu} from '../_models/jeu';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class  JeuService{
  jeux: Jeu[];
  url = 'http://localhost:8000/jeux/';
  map: Map<number, Jeu>;

  constructor(private http: HttpClient) {
    this.map = new Map();
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
    return this.http.post<any>(environment.apiUrl + '/jeux',
      jeu, httpOptions);
  }

  getAll(): Observable<Array<Jeu>> {
    return this.http.get<any>(environment.apiUrl + '/jeux', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
    }

  }
