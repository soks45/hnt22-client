import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '@services/messages.service';

interface NewRequest {
  vehicleId: number;
}

@Component({
  selector: 'hnt22-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.scss']
})
export class NewRequestFormComponent {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  isLoading = false;
  constructor(
    private messages: MessagesService,
  ) {

    this.formGroup1 = new FormGroup({
      vehicleId: new FormControl(null, { validators: [Validators.required] }),
    });

    this.formGroup2 = new FormGroup({
      organization: new FormControl(null),
      vehicleNumber: new FormControl(null),
      subOrganization: new FormControl(null),
      serviceType: new FormControl(null),
      ownershipType: new FormControl(null),
    });

    this.formGroup3 = new FormGroup({
      model: new FormControl(null),
      vehicleType: new FormControl(null),
      vehicleTypeExt: new FormControl(null),
      vehicleChars: new FormControl(null),
      country: new FormControl(null),
      fuelType: new FormControl(null),
    });
  }

  private checkForm(fg: FormGroup): boolean {
    fg.updateValueAndValidity();
    fg.markAsTouched();

    return fg.valid;
  }

  onSubmit() {

  }
}
