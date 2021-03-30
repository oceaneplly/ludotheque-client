import {AbstractControl} from '@angular/forms';

export class Validateur {
  static passwordConfirming(c: AbstractControl): { [s: string]: boolean } {
    if (c.get('mdp').value !== c.get('confirmMdp').value) {
      return {invalid: true};
    }
    return null;
  }
}



