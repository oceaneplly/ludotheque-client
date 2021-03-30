import {AbstractControl} from '@angular/forms';


// tslint:disable-next-line:class-name
export class validateur {
  static passwordConfirming(c: AbstractControl): { [s: string]: boolean } {
    if (c.get('mdp').value !== c.get('confirmMdp').value) {
      return {invalid: true};
    }
  }
}



