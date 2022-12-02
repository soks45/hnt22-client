import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hnt22-check-qr-code-page',
  templateUrl: './check-qr-code-page.component.html',
  styleUrls: ['./check-qr-code-page.component.scss']
})
export class CheckQrCodePageComponent {
  isOk?: boolean;
  constructor(private activateRoute: ActivatedRoute) {
    this.isOk = this.activateRoute.snapshot.data['isOk'];
  }
}
