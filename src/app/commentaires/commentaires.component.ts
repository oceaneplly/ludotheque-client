import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";
import {AuthentificationService} from "../_services/authentification.service";
import {ListeJeuxComponent} from "../liste-jeux/liste-jeux.component";
import { DatePipe } from '@angular/common'
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  val1: number;
  iduser:number;
  idjeu:number;
  value:string='';
  date: Date;
  datenum: number;
  // tslint:disable-next-line:variable-name
  commentaire_text:string;

  constructor(private http: HttpClient, public userService: UserService, public authentificationService: AuthentificationService, public  composant : ListeJeuxComponent) { }

  ngOnInit(): void {
    this.val1 = 0;
    this.iduser = this.authentificationService.userValue.id;
    this.idjeu = this.composant.jeuSelectionne.id;
  }



  onKey(event:any) {
    this.value = event.target.value;
    console.log(this.val1);
    console.log(this.value);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    return this.http.post<any>(`${environment.apiUrl}/commentaires`, {
      note: this.val1,
      commentaire: this.value,
      jeu_id: this.idjeu
      }, httpOptions).subscribe(data => {
      console.log(data);
    });
  }

}
