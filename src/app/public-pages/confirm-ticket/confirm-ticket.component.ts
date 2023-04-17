import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-ticket',
  templateUrl: './confirm-ticket.component.html',
  styleUrls: ['./confirm-ticket.component.scss']
})
export class ConfirmTicketComponent {

  zone: string;
  quantity: string;
  totalValue: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.zone = data.zone;
    this.quantity = data.quantity;
    this.totalValue = data.totalValue;
  }
}
