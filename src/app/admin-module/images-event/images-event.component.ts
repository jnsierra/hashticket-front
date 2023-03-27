import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images-event',
  templateUrl: './images-event.component.html',
  styleUrls: ['./images-event.component.scss']
})
export class ImagesEventComponent {
  idEvent:number;
  constructor(private activatedRoute: ActivatedRoute){
    this.idEvent = 0;
    this.activatedRoute.params.subscribe(params => {
      this.idEvent = params['id'] as number;
    });
  }
}
