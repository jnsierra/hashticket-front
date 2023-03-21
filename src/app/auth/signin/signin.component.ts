import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../service/signin.service';
import { User } from 'src/app/entities/user';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user: User;
  rememberme: boolean;
  hide = true;

  constructor(
    private router: Router,
    private SigninService: SigninService,
    private _snackBar: MatSnackBar
  ) {
    this.user = new User();
    this.rememberme = true;
  }

  ngOnInit() {
    // if (this.rememberme) {
    //   this.user.email = localStorage.getItem('email');
    // }
  }

  // ingresar(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   Swal.fire({
  //     allowOutsideClick: false,
  //     type: 'info',
  //     text: 'Espere por favor...',
  //     onBeforeOpen: () => {
  //       Swal.showLoading();
  //     },
  //   });
  //   if (this.rememberme) {
  //     localStorage.setItem('email', this.user.email);
  //   }
  //   this.SigninService.loginUser(this.user).subscribe(
  //     (resp) => {
  //       Swal.close();
  //       localStorage.removeItem('cerrandoapp');
  //       localStorage.setItem('email', this.user.email);
  //       this.consultarUsuarioAutenticado(this.user.email);
  //     },
  //     (catchError) => {
  //       if (catchError.status === 401) {
  //         let mensaje = '';
  //         if ('USER_BLOKED' === catchError.error.mensaje) {
  //           mensaje = 'Usuario bloqueado, por favor contacte al administrador';
  //         } else if ('PASSWORD_INCORRECT' === catchError.error.mensaje) {
  //           mensaje = 'Usuario o pasword Incorrecto';
  //         } else if ('USER_NOT_FOUND' === catchError.error.mensaje) {
  //           mensaje = 'Usuario no encontrado, por favor registrate!';
  //         }
  //         Swal.close();
  //         Swal.fire({
  //           type: 'error',
  //           text: mensaje,
  //           title: 'Autenticacion',
  //         });
  //       } else {
  //         Swal.fire({
  //           type: 'error',
  //           text: 'Error en el sistema contacte al administrador',
  //           title: 'Error',
  //         });
  //       }
  //     }
  //   );
  // }
}
