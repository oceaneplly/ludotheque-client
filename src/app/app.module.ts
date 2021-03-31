import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthentificationService} from './_services/authentification.service';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import {MomentModule} from 'ngx-moment';
import 'moment/locale/fr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from './_services/jwt-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './_services/user.service';
import { LpSolverTestComponent } from './lp-solver-test/lp-solver-test.component';
import {MarkdownModule} from 'ngx-markdown';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { TableModule } from 'primeng/table';
import {JeuService} from './_services/jeu.service';
import {DetailsJeuComponent} from './details-jeu/details-jeu.component';
import {AjoutJeuxComponent} from './ajout-jeux/ajout-jeux.component';
import {Button, ButtonModule} from 'primeng/button';
import {Ripple, RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { NewUserComponent } from './new-user/new-user.component';
import {Card, CardModule} from 'primeng/card';
import {Rating, RatingModule} from 'primeng/rating';
import {MultiSelectModule} from 'primeng/multiselect';
import {SplitButton, SplitButtonModule} from 'primeng/splitbutton';
import { DatePipe } from '@angular/common';




registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LpSolverTestComponent,
    HomeComponent,
    ListeJeuxComponent,
    DetailsJeuComponent,
    ListeJeuxComponent,
    AjoutJeuxComponent,
    LpSolverTestComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    MomentModule,
    MessagesModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    ReactiveFormsModule,
    MenubarModule,
    MenuModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    RatingModule,
    FormsModule,
    MultiSelectModule
  ],
  providers: [AuthentificationService, MessageService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    UserService, JeuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
