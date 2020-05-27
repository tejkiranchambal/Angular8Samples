import {AbstractControl, ValidatorFn} from "@angular/forms";

/*
This function is to validate forbidden values.
The forbiddenNameValidator function accepts one parameter which is Form Control of type AbstractControl and returns an error
object where the key is of type string and the value is of type any, if the validation fails or null if it passes.
The control parameter refers to a single Form Control value, So we have defined another function using factory method which
accepts a string as a regular expression and returns a validator function, which can perform validation for multiple form control
values .
*/

/*export function forbiddenNameValidator( control: AbstractControl ):{[ key: string]: any}| null{
  const forbidden = /admin|test/.test(control.value.toLowerCase());
  return forbidden ? {'forbiddenName': { value : control.value }}: null;
}*/

export function forbiddenNameValidator( forbiddenName: RegExp ): ValidatorFn{
  return (( control: AbstractControl ):{[ key: string]: any}| null => {
    const forbidden = forbiddenName.test(control.value.toLowerCase());
    return forbidden ? {'forbiddenName': { value : control.value }}: null;
  });
}
