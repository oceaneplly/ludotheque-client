import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JeuxService} from '../jeux.service';
import {Jeux} from '../jeux';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.css']
})
export class ListeJeuxComponent implements OnInit {
  jeux: Observable<Jeux[]>;
  constructor(public jeuxService: JeuxService) {
    this.jeux = this.jeuxService.getJeuHttp();
  }

  ngOnInit(): void {}

}
