import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Constructor } from '@mixins/mixins';


export function SimpleFormMixin<TBase extends Constructor>(Base: TBase) {
  @Directive()
  abstract class SimpleFormMixinClass extends Base {
    abstract formGroup: FormGroup;
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

  return SimpleFormMixinClass;
}
