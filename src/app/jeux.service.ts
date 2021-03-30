import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Jeux} from './jeux';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(private http: HttpClient) { }
  getJeuHttp(): Observable<Jeux[]> {
    const url = 'http://localhost:8000/jeux';
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
