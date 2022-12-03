import { F } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseObject } from '@mixins/mixins';
import { SimpleFormMixin } from '@mixins/simple-form.mixin';
import { CarrierRequest, REQUEST_STATUSES, RequestStatus } from '@models/request';
import { RequestsService } from '@services/requests.service';
import { finalize } from 'rxjs/operators';

interface UpdateRequestStatus {
  status: RequestStatus
}
export interface UpdateRequestStatusDialogData {
  request: CarrierRequest
}
@Component({
  selector: 'hnt22-update-request-status-dialog',
  templateUrl: './update-request-status-dialog.component.html',
  styleUrls: ['./update-request-status-dialog.component.scss']
})
export class UpdateRequestStatusDialogComponent extends SimpleFormMixin(BaseObject) implements OnInit {
  isLoading = false;
  formGroup: FormGroup;
  statuses = REQUEST_STATUSES;
  constructor(
    private dr: MatDialogRef<boolean>,
    @Inject(MAT_DIALOG_DATA) private data: UpdateRequestStatusDialogData,
    private requestsService: RequestsService
    ) {
    super();

    this.formGroup = new FormGroup({
      status: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.formGroup.patchValue(this.data.request);
  }

  onSubmit(): void {
    if (this.checkForm()) {
      return;
    }

    this.isLoading = true;
    this.data.request.status = this.formGroup.value.status;

    this.requestsService.updateRequest(this.data.request).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(() => this.dr.close(true));
  }
}
