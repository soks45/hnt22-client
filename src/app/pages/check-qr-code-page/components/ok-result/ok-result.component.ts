import { Component, Input } from '@angular/core';
import { CarrierRequest } from '@models/request';

@Component({
  selector: 'hnt22-ok-result',
  templateUrl: './ok-result.component.html',
  styleUrls: ['./ok-result.component.scss']
})
export class OkResultComponent {
  @Input() request!: CarrierRequest;
}
