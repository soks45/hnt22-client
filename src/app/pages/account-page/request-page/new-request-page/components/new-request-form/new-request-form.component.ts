import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlsOf, FormMixin } from '@mixins/form.mixin';
import { BaseObject, Constructor } from '@mixins/mixins';
import { MessagesService } from '@services/messages.service';

interface NewRequest {
  vehicleId: number;
}

@Component({
  selector: 'hnt22-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.scss']
})
export class NewRequestFormComponent extends FormMixin<Constructor, NewRequest>(BaseObject) {
  formGroup: FormGroup<ControlsOf<NewRequest>>;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,

    private messages: MessagesService,
  ) {
    super();

    // @ts-ignore
    this.formGroup = this.formBuilder.group({
      vehicleId: new FormControl(null, {
        initialValueIsDefault: true,
        validators: [Validators.required]
      }),
    });
  }

  onSubmit(): void {
    if (!this.checkForm()) {
      return;
    }
  }
}
