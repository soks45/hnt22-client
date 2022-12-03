import { ChangeDetectorRef, Directive, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Constructor } from '@mixins/mixins';

export type ControlsOf<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends Record<any, any> ? FormGroup<ControlsOf<T[K]>> : FormControl<T[K]>;
};

export function FormMixin<TBase extends Constructor, T extends Record<string, any>>(Base: TBase) {
    @Directive()
    abstract class FormMixinClass extends Base {
        abstract formGroup: FormGroup<ControlsOf<T>>;
        abstract onSubmit(): void;

        protected constructor(...args: any[]) {
            super(args);
        }

        protected checkForm(): boolean {
            this.formGroup.updateValueAndValidity();
            this.formGroup.markAsTouched();

            return this.formGroup.valid;
        }
    }

    return FormMixinClass;
}
