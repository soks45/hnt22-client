import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrierRequest } from '@models/request';

@Component({
  selector: 'hnt22-check-qr-code-page',
  templateUrl: './check-qr-code-page.component.html',
  styleUrls: ['./check-qr-code-page.component.scss']
})
export class CheckQrCodePageComponent implements OnInit {
  result: CarrierRequest;
  ok: boolean = false;
  constructor(private activateRoute: ActivatedRoute) {
    this.result = this.activateRoute.snapshot.data['request'];
  }

  ngOnInit() {
    this.ok = !!this.result;
  }
}
