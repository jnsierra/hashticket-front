import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from '../../service/url-service.service';
import { EventServiceService } from '../service/event-service.service';
import {
  MatCarousel,
  MatCarouselComponent,
  MatCarouselSlide,
  MatCarouselSlideComponent,
} from '@magloft/material-carousel';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css'],
})
export class PrincipalPageComponent implements OnInit {
  slides = [
    { image: '/assets/images/Misty1.jpg' },
    { image: '/assets/images/MistyNayla1.JPG' },
    { image: '/assets/images/MistyNayla2.jpg' },
  ];

  constructor(private _eventService: EventServiceService) {}

  ngOnInit(): void {
    this._eventService.getActiveEvents().subscribe((resp) => {
      console.log(resp);
    });
  }
}
