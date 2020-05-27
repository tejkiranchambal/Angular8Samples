import {AbstractControl} from "@angular/forms";

/*
This function is to validate whether password and confirm password fields matches or not.
The passwordValidator function accepts one parameter which is Form Control of type AbstractControl and returns an error object
where the key is of type string and the value is of type boolean, if the validation fails or null if it passes.
The control parameter does not refers a single Form Control value instead it refers the whole registrationForm FormGroup
*/

export function passwordValidator( control: AbstractControl ) : {[key: string]: boolean}| null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if(password.pristine || confirmPassword.pristine) return null;
  return ((password && confirmPassword && password.value != confirmPassword.value) ? {'misMatch': true}: null);
}
