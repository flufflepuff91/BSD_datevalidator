import {AbstractControl, ValidatorFn} from '@angular/forms';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = new Date(control.value);

    if (isNaN(selectedDate.getTime())) {
      // Invalid date
      return {'invalidDate': true};
    }

    const currentDate = new Date();

    if (selectedDate < currentDate) {
      // Date is not in the future
      return {'notFutureDate': true};
    }

    return null; // Date is valid and in the future
  };
}
