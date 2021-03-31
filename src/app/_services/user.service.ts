import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {UserInfo} from '../_models/user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Jeu} from '../_models/jeu';
import {AuthentificationService} from './authentification.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public authService: AuthentificationService, private http: HttpClient) {
  }

  getJeux(): Observable<Array<Jeu>> {
    return this.http.get<any>(`${environment.apiUrl}/users/${this.authService.userValue.id}`, {

      }).pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }

  getProfile(): Observable<UserInfo> {
    return this.http.get<any>(environment.apiUrl + '/auth/user-profile', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }
}
