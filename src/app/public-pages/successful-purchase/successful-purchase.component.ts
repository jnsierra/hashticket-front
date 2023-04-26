import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-successful-purchase',
  templateUrl: './successful-purchase.component.html',
  styleUrls: ['./successful-purchase.component.scss']
})
export class SuccessfulPurchaseComponent {
  public ticket: any

  constructor (private location: Location) {
    this.ticket = location.getState()
  }

}
