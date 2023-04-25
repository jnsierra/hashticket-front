import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful-purchase',
  templateUrl: './successful-purchase.component.html',
  styleUrls: ['./successful-purchase.component.scss']
})
export class SuccessfulPurchaseComponent {
  public qrCode: string;

  constructor (private activatedRoute: ActivatedRoute,) {

    this.activatedRoute.params.subscribe((params) => {
      this.qrCode = params['data'] as string;
    });
  }

}
