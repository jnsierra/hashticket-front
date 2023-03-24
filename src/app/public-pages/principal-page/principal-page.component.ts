import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/public-event.service';
import { Event } from 'src/app/entities/event';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent implements OnInit {
  eventos: Event[];
  slides = [
    { image: '/assets/images/AndresCepeda.jpg'},
    { image: '/assets/images/NataliaJimenez.jpg'},
    { image: '/assets/images/GloriaTrevi.jpg'},
    { image: '/assets/images/Reik.jpeg'},
    { image: '/assets/images/Gusi.jpg'}
  ];

  constructor(private _events: EventService) {
    this.eventos = [];
  }

  ngOnInit(): void {
    this._events.getActiveEvents().subscribe((resp) => {
      this.eventos = resp;
    });
  }
}
