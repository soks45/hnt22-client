import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country, FuelType, OwnershipType, Vehicle } from '@models/vehicle';
import { MessagesService } from '@services/messages.service';
import { VehiclesService } from '@services/vehicles.service';
import { Observable, of } from 'rxjs';

interface NewRequest {
  vehicleId: number;
}

@Component({
  selector: 'hnt22-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.scss']
})
export class NewRequestFormComponent {
  vehicles$: Observable<Vehicle[]> = of([
    {
      organization: 'organization',
      vehicleNumber: 'vehicleNumber',
      model: 'model',
      code: 'code',
      serviceType: 'serviceType',
      vehicleType: 'vehicleType',
      vehicleTypeExt: 'vehicleTypeExt',
      vehicleChars: 'vehicleChars',
      country: Country.Russia,
      fuelType: FuelType.Diesel,
      subOrganization: true,
      ownershipType: OwnershipType.Leasing,
      vehicleId: 1,
      date: 'date',
      status: true,
    }
  ]); // TODO remove mock
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  isLoading = false;
  constructor(
    private messages: MessagesService,
    private vehiclesService: VehiclesService
  ) {

    this.formGroup1 = new FormGroup({
      vehicle: new FormControl(null, { validators: [Validators.required] }),
    });

    this.formGroup2 = new FormGroup({
      organization: new FormControl({ value: null, disabled: true}),
      vehicleNumber: new FormControl({ value: null, disabled: true}),
      model: new FormControl({ value: null, disabled: true}),
      subOrganization: new FormControl({ value: null, disabled: true}),
      serviceType: new FormControl({ value: null, disabled: true}),
    });

    this.formGroup3 = new FormGroup({
      vehicleType: new FormControl({ value: null, disabled: true}),
      vehicleTypeExt: new FormControl({ value: null, disabled: true}),
      vehicleChars: new FormControl({ value: null, disabled: true}),
      date: new FormControl({ value: null, disabled: true}),
      country: new FormControl({ value: null, disabled: true}),
      fuelType: new FormControl({ value: null, disabled: true}),
    });
  }

  private checkForm(fg: FormGroup): boolean {
    fg.updateValueAndValidity();
    fg.markAsTouched();

    return fg.valid;
  }

  onSubmit() {

  }

  setUpForm(vehicle: Vehicle) {
    this.formGroup2.patchValue(vehicle);
    this.formGroup3.patchValue(vehicle);
  }
}
