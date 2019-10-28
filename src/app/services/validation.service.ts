import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

    public static readonly reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      const config = {
        required: 'Required',
        invalidEmailAddress: 'Invalid email address',
        minlength: `Minimum length ${validatorValue.requiredLength}`
      };

      let response = config[validatorName];
      if (!response) {
        response = 'Wrong data';
      }
      return response;
    }

    static validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }

    static emailValidator(control) {
      // RFC 2822 compliant regex
      // tslint:disable-next-line: max-line-length
      if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }

    // static passwordValidator(control) {
    //   // {6,100}           - Assert password is between 6 and 100 characters
    //   // (?=.*[0-9])       - Assert a string has at least one number
    //   if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
    //     return null;
    //   } else {
    //     return { invalidPassword: true };
    //   }
    // }
  }
