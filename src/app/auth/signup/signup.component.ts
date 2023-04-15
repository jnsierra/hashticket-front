import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth.service';
import { Login } from 'src/app/entities/login';
import { Meta, Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  loginEntity: Login;
  password: string;
  msn: string;
  userValidation: boolean;

  constructor(
    private _authService: AuthService,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private _snackBar: MatSnackBar
  ) {
    this.loginEntity = new Login();
    this.password = '';
    this.msn = '';
    this.userValidation = true;
    title.setTitle('CompraBoletas - Crear cuenta');
    meta.updateTag({ name: 'description', content: "Página para creación de cuenta" })
  }
  sendForm(f: NgForm) {
    if (this.loginEntity.email.includes('@')) {
      if (this.loginEntity.password != '') {
        if (this.password == this.loginEntity.password) {
          this.userValidation = true;
          this.createUser();
        } else {
          this.userValidation = false;
          this.msn = 'Contraseña no concuerda';
        }
      } else {
        this.userValidation = false;
        this.msn = 'Contraseña no puede estar vacía';
      }
    } else {
      this.userValidation = false;
      this.msn = 'Correo incorrecto';
    }
    this.openSnackbar();
  }
  createUser() {
    this._authService.signUp(this.loginEntity).subscribe(resp => {
      console.log(resp);
      if (resp.state == 'ACTIVE') {
        this.sendLogin();
      } else {
        this.msn = 'Error en creación de usuario';
        this.userValidation = false;
        this.openSnackbar();
      }
    });
  }
  sendLogin() {
    this.router.navigateByUrl('/signin');
  }
  openSnackbar(){
    if (this.userValidation == false) {
      this._snackBar.open(this.msn, 'Cerrar', {
        duration: 1500,
        panelClass: ['red-snackbar'],
      });
    }
  }
}
