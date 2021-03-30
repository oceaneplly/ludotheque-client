import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LpSolverTestComponent} from './lp-solver-test/lp-solver-test.component';
import {NewUserComponent} from "./new-user/new-user.component";
import {HomeComponent} from './home/home.component';
import {ListeJeuxComponent} from './liste-jeux/liste-jeux.component';
import {DetailsJeuComponent} from './details-jeu/details-jeu.component';
import {AjoutJeuxComponent} from './ajout-jeux/ajout-jeux.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'jeux', component: ListeJeuxComponent},
  {path: 'jeux/:id', component: DetailsJeuComponent},
  {path: 'ajoutJeu', component: AjoutJeuxComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'new_user', component: NewUserComponent},
  {path: 'ro', component: LpSolverTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
