import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'hnt22-qr-code-page',
  templateUrl: './qr-code-page.component.html',
  styleUrls: ['./qr-code-page.component.scss']
})
export class QrCodePageComponent {

  qrCodeURL($event: SafeUrl) {
    console.log($event)
  }
}
