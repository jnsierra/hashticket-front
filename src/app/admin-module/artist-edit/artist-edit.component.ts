import { Component } from '@angular/core';
import { Artist } from 'src/app/entities/artist';
import { ArtistService } from 'src/app/service/artist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent {
  artist: Artist;
  id: string;
  insert: boolean;
  butonEnabled: boolean;
  msn: string;
  
  constructor(
    private _artistService: ArtistService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.artist = new Artist();
    this.id = '';
    this.msn = '';
    this.insert = true;
    this.butonEnabled = false;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] as string;
      if (this.id === undefined) {
        this.insert = true;
        this.msn = 'Artista creado exitosamente';
      } else {
        this.insert = false;
        this.msn = 'Artista actualizado exitosamente';
        this._artistService.getById(this.id).subscribe((resp) => {
          this.artist = resp;
        });
      }
    });
  }

  executeAction(f: NgForm) {
    if (f.invalid) {
      this._snackBar.open('Formulario Invalido', 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
      });
      return;
    }
    this._artistService.insert(this.artist).subscribe((resp) => {
      if (resp.id === undefined || resp.id === null) {
        this._snackBar.open('Error al crear artista', 'Cerrar', {
          duration: 2000,
          panelClass: ['red-snackbar'],
        });
      } else {
        this.butonEnabled = true;
        this._snackBar
          .open(this.msn, 'OK', {
            duration: 1500,
            panelClass: ['green-snackbar'],
          })
          .afterDismissed()
          .subscribe((resp) => {
            this.router.navigateByUrl('artist');
          });
      }
    });
  }
}
