import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { EventImages } from 'src/app/entities/event-images';
import { EventImageService } from '../../service/event-image.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {
  event:Event;
  constructor(private activatedRoute: ActivatedRoute){
    this.event = new Event();
    this.activatedRoute.params.subscribe((params) => {
      this.event.id = params['id'] as number;
    });
  }

}
