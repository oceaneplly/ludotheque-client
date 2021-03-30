import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {MessageService} from 'primeng/api';
import {AuthentificationService} from './_services/authentification.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ludotheque-client';
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActiveOptions: { exact: true }
      },

      {
        label: 'Se connecter',
        icon: 'pi pi-user',
        routerLink: '/login',
        routerLinkActiveOptions: { exact: true }
      },

      {
        label: 'S\'enregistrer',
        icon: 'pi pi-user-plus',
        routerLink: '',
        routerLinkActiveOptions: { exact: true }
      },
    ];
  }

  constructor(public messageService: MessageService, public authService: AuthentificationService) {
  }

  show(): void {
    const now = moment().format('LL');
    this.messageService.add({
      key: 'main',
      severity: 'info',
      detail: `${this.title}, ${now}`,
    });
  }

  logout(): void {
    this.authService.logout();
  }


}
