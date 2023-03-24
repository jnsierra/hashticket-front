import { Component } from '@angular/core';
import { Presentation } from 'src/app/entities/presentation';
import { PresentationService } from 'src/app/service/presentation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-presentation-edit',
  templateUrl: './presentation-edit.component.html',
  styleUrls: ['./presentation-edit.component.scss']
})
export class PresentationEditComponent {
  presentation: Presentation;

  constructor(private _presentationService: PresentationService) {
    this.presentation = new Presentation();
  }

  executeAction(f: NgForm){
    if( f.invalid){
      alert('No funciona');
      return 
    }
    this._presentationService.insert(this.presentation).subscribe(resp => {
      console.log(resp);
    });
    alert('Envia el formulario');
  }
}
