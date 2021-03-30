import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map, shareReplay, tap} from "rxjs/operators";
import {ANONYMOUS_USER} from "../_services/authentification.service";

@Component({
  selector: 'app-ajout-jeu',
  templateUrl: './ajout-jeu.component.html',
  styleUrls: ['./ajout-jeu.component.css']
})
export class AjoutJeuComponent implements OnInit {
  name = 'Nom';
  urlAPI = 'http://127.0.0.1:8000/';
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }
  ajouterJeu(): void {
    this.httpClient.

  }

}
