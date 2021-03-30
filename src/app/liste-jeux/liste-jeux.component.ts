import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {JeuxService} from '../jeux.service';
import {Jeu} from '../_models/jeu';
import {Observable} from 'rxjs';
import {JeuService} from '../_services/jeu.service';

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.css']
})
export class ListeJeuxComponent implements OnInit {
  jeux: Observable<Jeu>;
  constructor(public jeuxService: JeuService) {
    this.jeux = this.jeuxService.getJeux();
  }

  ngOnInit(): void {
    console.log(this.jeux);
  }

}
