import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/**
 * checks if the control input agrees with the pattern
 */
export function enforcePatternValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const pass = nameRe.test(control.value);
        return pass ? null : { 'testNotPassed': { value: control.value } };
    };
}

@Directive({
    selector: '[appEnforcePasswordPolicy]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EnforcePasswordPolicyDirective, multi: true }]
})
export class EnforcePasswordPolicyDirective implements Validator {
    passwordPatterns = [
        {
            pattern: '^(?=.*[a-z])(?=.*[A-Z]).',
            message: 'mixedLetters'
        },
        {
            pattern: '^(?=.*[0-9]).',
            message: 'numericValues'
        },
        {
            pattern: '^(?=.*[^a-zA-Z0-9_\s]).',
            message: 'specialChars'
        }
    ];

    validate(control: AbstractControl): { [key: string]: any } {

        const msgs = {};
        let errors = 0;
        for (const pat of this.passwordPatterns) {
            const check = enforcePatternValidator(new RegExp(pat.pattern, 'i'))(control);
            if (check !== null) {
                errors++;
                msgs[pat.message] = check.testNotPassed;
            }
        }

        return errors === 0 ? null : msgs;
    }
}
