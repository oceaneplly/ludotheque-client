import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Jeu} from "../_models/jeu";
import {JeuService} from "../_services/jeu.service";
import {ListeJeuxComponent} from "../liste-jeux/liste-jeux.component";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validateur} from '../Validateur';
import {environment} from "../../environments/environment";
import {AuthentificationService} from "../_services/authentification.service";

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

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showDialog() {
    this.display = true;
  }

  // tslint:disable-next-line:typedef
  ajouetAchat() {
    // @ts-ignore
    return this.http.post<any>(`${environment.apiUrl}/auth/users/{id}/achat`, {
      lieu: this.formulaire.get('lieu').value,
      date_achat: this.formulaire.get('date_achat').value,
      prix: this.formulaire.get('prix').value,
    }, this.authService.userValue.id);
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
