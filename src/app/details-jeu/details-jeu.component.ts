import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Jeu} from "../_models/jeu";
import {JeuService} from "../_services/jeu.service";
import {ListeJeuxComponent} from "../liste-jeux/liste-jeux.component";

@Component({
  selector: 'app-details-jeu',
  templateUrl: './details-jeu.component.html',
  styleUrls: ['./details-jeu.component.css']
})
export class DetailsJeuComponent implements OnInit {
  jeu:Jeu;

  constructor(private route: ActivatedRoute, private jeuService: JeuService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.jeu);
  }

}
