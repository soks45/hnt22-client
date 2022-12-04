import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ShowQrDialogData {
  hash: string;
}
@Component({
  selector: 'hnt22-show-qr-dialog',
  templateUrl: './show-qr-dialog.component.html',
  styleUrls: ['./show-qr-dialog.component.scss']
})
export class ShowQrDialogComponent {
  hash: string;
  constructor( @Inject(MAT_DIALOG_DATA) private data: ShowQrDialogData) {
    this.hash = data.hash;
  }
}
