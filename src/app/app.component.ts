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
  items1: MenuItem[];
  isLogin: boolean;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Liste',
        icon: 'pi pi-list',
        routerLink: '/jeux',
        routerLinkActiveOptions: { exact: true }
      },

      {
        label: 'Se connecter',
        icon: 'pi pi-lock',
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

    this.items1 = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Liste',
        icon: 'pi pi-list',
        routerLink: '/jeux',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Ajout',
        icon: 'pi pi-plus',
        routerLink: '/ajoutJeu',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Se déconnecter',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActiveOptions: {exact: true},
        command: () => {
          this.logout();
        }
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        routerLink: '/profile',
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
    this.isLogin = false;
  }

  login(): void {
    this.isLogin = true;
  }
  getLogin(): boolean {
    return this.isLogin;
  }
}
