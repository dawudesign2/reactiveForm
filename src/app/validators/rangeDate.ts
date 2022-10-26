import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDate(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const year = control.value;
    if (year < min || year > max) {
      return { rangeDate: { min, max }  };
    }
    return null;
  };
}