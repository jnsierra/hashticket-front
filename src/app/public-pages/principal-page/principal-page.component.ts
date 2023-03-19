import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Event } from 'src/app/entities/event';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent implements OnInit {
  eventos: any=[];
  slides = [
    { image: '/assets/images/Misty1.jpg' },
    { image: '/assets/images/MistyNayla1.JPG' },
    { image: '/assets/images/MistyNayla2.jpg' },
  ];
  

  constructor(private _events: EventService) {this.eventos = []}

  ngOnInit(): void {
    this._events.getActiveEvents().subscribe((resp) => {
      this.eventos = resp;
      console.log(resp);
    });
  }
}
