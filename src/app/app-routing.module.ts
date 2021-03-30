import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LpSolverTestComponent} from './lp-solver-test/lp-solver-test.component';
import {HomeComponent} from './home/home.component';
import {ListeJeuxComponent} from './liste-jeux/liste-jeux.component';
import {DetailsJeuComponent} from './details-jeu/details-jeu.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'jeux', component: ListeJeuxComponent},
  {path: 'jeux/:id', component:  DetailsJeuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ro', component: LpSolverTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
