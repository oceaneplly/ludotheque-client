import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {UserInfo} from '../_models/user-info';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Jeu} from '../_models/jeu';
import {JeuService} from '../_services/jeu.service';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  jeuSelectionne: Jeu;
  loading: boolean;
  user: UserInfo;
  jeux: Array<Jeu>;

  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private messageService: MessageService, private router: Router, private scroll: ViewportScroller) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getProfile().subscribe(
      user => {
        this.user = {...this.user, ...user};
        this.loading = false;
      },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'impossible d\'obtenir le profil de l\'utilisateur' , key: 'main'});
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    );
  }

  onRowSelect(jeu: Jeu) {
    this.jeuSelectionne = jeu;
    this.scroll.scrollToPosition([0, 100]);
  }

  onRowUnselect() {
    // tslint:disable-next-line:no-unused-expression
    this.jeuSelectionne = undefined;
  }

}
