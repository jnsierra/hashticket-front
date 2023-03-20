import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Event } from 'src/app/entities/event';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent implements OnInit {
  eventos: Event[];
  slides = [
    { image: '/assets/images/Misty1.jpg' },
    { image: '/assets/images/MistyNayla1.JPG' },
    { image: '/assets/images/MistyNayla2.jpg' },
  ];
  
  calcGridColumns(size: any) {
    switch (size) {
      case 'xl': return 8;
      case 'lg': return 8;
      case 'md': return 6;
      case 'sm': return 4;
      case 'xs': return 3;
      default: return 3;
    }
  }
  constructor(private _events: EventService) {this.eventos = []}

  ngOnInit(): void {
    this._events.getActiveEvents().subscribe((resp) => {
      this.eventos = resp;
      console.log(resp);
    });
    
  }
}
