import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validateur} from '../Validateur';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {ANONYMOUS_USER} from '../_services/authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  formulaire: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    pseudonyme: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    mail: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),

    password: new FormGroup({
      mdp: new FormControl('', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*\\d).{8,}')]),
      confirmMdp: new FormControl('')
    }, [Validateur.passwordConfirming])
    }
  );

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  addUser(){
    // @ts-ignore
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, {
      nom: this.formulaire.get("nom").value,
      prenom: this.formulaire.get("prenom").value,
      pseudo: this.formulaire.get("pseudonyme").value,
      email: this.formulaire.get("mail").value,
      password: this.formulaire.get("password").get("mdp").value,
    }, httpOptions).subscribe(data => {
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    // tslint:disable-next-line:no-console
    console.info(this.formulaire.value);
  }

  // tslint:disable-next-line:typedef
  get nom(){
    return this.formulaire.get('nom');
  }
  // tslint:disable-next-line:typedef
  get prenom(){
    return this.formulaire.get('prenom');
  }
  // tslint:disable-next-line:typedef
  get pseudonyme(){
    return this.formulaire.get('pseudonyme');
  }
  // tslint:disable-next-line:typedef
  get mail(){
    return this.formulaire.get('mail');
  }
  // tslint:disable-next-line:typedef
  get mdp(): AbstractControl{
    return this.formulaire.get('password').get('mdp');
  }
  // tslint:disable-next-line:typedef
  get confirmMdp(): AbstractControl{
    return this.formulaire.get('password').get('confirmMdp');
  }

  get password(): AbstractControl{
    return this.formulaire.get('password');
  }
}

