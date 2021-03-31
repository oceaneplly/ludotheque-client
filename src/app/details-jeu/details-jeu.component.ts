import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Jeu} from '../_models/jeu';
import {JeuService} from '../_services/jeu.service';
import {ListeJeuxComponent} from '../liste-jeux/liste-jeux.component';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validateur} from '../Validateur';
import {environment} from '../../environments/environment';
import {ANONYMOUS_USER, AuthentificationService} from '../_services/authentification.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-details-jeu',
  templateUrl: './details-jeu.component.html',
  styleUrls: ['./details-jeu.component.css']
})
export class DetailsJeuComponent implements OnInit {
  @Input() jeu: Jeu;
  display = false;

  formulaire: FormGroup = new FormGroup({
      lieu: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      date_achat: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required])
      }
  );

  constructor(public authService: AuthentificationService, private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showDialog() {
    this.display = true;
  }

  // tslint:disable-next-line:typedef
  ajouterAchat() {
    return this.http.post<any>(`${environment.apiUrl}/users/${this.authService.userValue.id}/achat`, {
      lieu: this.formulaire.get('lieu').value,
      date_achat: this.formulaire.get('date_achat').value,
      prix: Number(this.formulaire.get('prix').value),
      jeu_id: +this.route.snapshot.paramMap.get('id')
    }).pipe(
        catchError(err => {
          console.log(err);
          return throwError('bug');
          // return of('');
        }));
  }

  // tslint:disable-next-line:typedef
  get lieu(){
    return this.formulaire.get('lieu');
  }

  // tslint:disable-next-line:typedef
  get date_achat(){
    return this.formulaire.get('date_achat');
  }

  // tslint:disable-next-line:typedef
  get prix(){
    return this.formulaire.get('prix');
  }

}
