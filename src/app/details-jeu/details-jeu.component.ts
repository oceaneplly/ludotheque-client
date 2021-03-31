import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Jeu} from "../_models/jeu";
import {JeuService} from "../_services/jeu.service";
import {ListeJeuxComponent} from "../liste-jeux/liste-jeux.component";
import {AuthentificationService} from "../_services/authentification.service";

@Component({
  selector: 'app-details-jeu',
  templateUrl: './details-jeu.component.html',
  styleUrls: ['./details-jeu.component.css']
})
export class DetailsJeuComponent implements OnInit {
  @Input() jeu: Jeu;

  constructor(public authService: AuthentificationService, public component: ListeJeuxComponent) {
  }

  ngOnInit(): void {
  }

}
