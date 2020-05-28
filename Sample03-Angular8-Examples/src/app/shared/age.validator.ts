import {AbstractControl, ValidatorFn} from "@angular/forms";

export function ageValidator (control : AbstractControl): {[key: string]: boolean}| null {
  const diff_ms = Math.abs(Date.now() - Date.parse(control.value));
  /*const age_dt = new Date(diff_ms);
  const age = Math.abs(age_dt.getUTCFullYear() - 1970);*/
  const age = Math.floor((diff_ms/(1000*3600*24))/365);
  return (age < 18) ? {'notValidAge': true }: null;
}
