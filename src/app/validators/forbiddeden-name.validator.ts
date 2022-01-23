import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        // console.log(control.value);
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: true} : null;
    };
}
