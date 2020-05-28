import {AbstractControl} from "@angular/forms";

export function emailDomainValidator( control: AbstractControl){
  if(control.value) {
    const email = /@chambal.com/.test(control.value.toLowerCase());
    return !email ? {'chambalDomain': {value: control.value}} : null;
  }
  return null;
}

