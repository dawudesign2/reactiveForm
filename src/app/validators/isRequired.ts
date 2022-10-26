import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function isRequired(identifiant?: string, title?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const identifiant = control.value;
    const title = control.value;
    if (identifiant === '' || title === '') {
      return { isRequired: true };
    }
    return null;
  };
}
