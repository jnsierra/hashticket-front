import { Component, OnInit } from '@angular/core';
import { MusicBand } from 'src/app/entities/music-band';
import { MusicBandService } from 'src/app/service/music-band.service';
import { NgForm } from '@angular/forms';
import { Presentation } from 'src/app/entities/presentation';
import { PresentationService } from 'src/app/service/presentation.service';

@Component({
  selector: 'app-music-band-edit',
  templateUrl: './music-band-edit.component.html',
  styleUrls: ['./music-band-edit.component.scss']
})
export class MusicBandEditComponent {
  musicBand: MusicBand;
  presentation: Presentation[];

  constructor(private _musicBandService: MusicBandService, private _presentationService: PresentationService) {
    this.musicBand = new MusicBand();
    this.presentation = [];
  }

  ngOnInit(): void {
    this.findPresentations();
  }
  findPresentations(){
    this._presentationService.getAll().subscribe(resp => {
      this.presentation = resp;
    });
  }
  ejecutarAccion(f: NgForm){
    if( f.invalid){
      alert('No funciona');
      return 
    }
    this._musicBandService.insert(this.musicBand).subscribe(resp => {
      console.log(resp);
    });
    alert('Envia el formulario');
  }
}
