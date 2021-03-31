import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

declare var solver: any;

@Component({
  selector: 'app-lp-solver-test',
  templateUrl: './lp-solver-test.component.html',
  styleUrls: ['./lp-solver-test.component.css']
})
export class LpSolverTestComponent implements OnInit {


  readonly sacAdos = {
    variables: {
      o1: {
        p: 12,
        benefice: 10
      },
      o2: {
        p: 11,
        benefice: 10
      },
      o3: {
        p: 7,
        benefice: 15
      },
      o4: {
        p: 25,
        benefice: 32
      },
      o5: {
        p: 10,
        benefice: 7
      },
      o6: {
        p: 5,
        benefice: 7
      },
    },
    ints: {},
    binaries: {o1 : 1, o2: 1, o3: 1, o4: 1, o5: 1, o6: 1},
    constraints: {
      p : {max: 40}
    },
    opType: 'max',
    optimize: 'benefice'
  };

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  resolutionProbleme(): void {
    const resultat = solver.Solve(this.sacAdos);
    console.log(resultat);

    let affiche = `Solution : `;
    if (resultat.o1 !== undefined){
      affiche += 'o1,  ' ;
    }
    if (resultat.o2 !== undefined){
      affiche += 'o2,  '  ;
    }
    if (resultat.o3 !== undefined){
      affiche += 'o3,  '  ;
    }
    if (resultat.o4 !== undefined){
      affiche += 'o4,  '  ;
    }
    if (resultat.o5 !== undefined){
      affiche += 'o5,  '  ;
    }
    if (resultat.o6 !== undefined){
      affiche += 'o6,  ' ;
    }
    const beneficeTotal = resultat.result;
    affiche += `Bénéfice : ${beneficeTotal}`;
    this.messageService.add({
      key: 'main',
      severity: 'info',
      detail: `${affiche}`,
    });
  }

}
