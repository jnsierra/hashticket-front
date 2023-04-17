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
  emailRegexp: RegExp;
  passwordRegExp: RegExp;

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
    this.emailRegexp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    this.passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    this.userValidation = false;
    this.title.setTitle('CompraBoletas - Crear cuenta');
    this.meta.updateTag({ name: 'description', content: "Página para creación de cuenta" })
  }
  sendForm(f: NgForm) {
    if (this.loginEntity.name != '') {
      if (this.emailRegexp.test(this.loginEntity.email)) {
        if (this.passwordRegExp.test(this.loginEntity.password)) {
          if (this.password == this.loginEntity.password) {
            this.userValidation = true;
            this.createUser();
          } else {
            this.msn = 'Contraseña no concuerda';
          }
        } else {
          this.msn = 'Contraseña debe tener mínimo 8 carácteres, al menos una letra mayúscula, una minuscula, un número y un carácter especial';
        }
      } else {
        this.msn = 'Correo no valido';
      }
    } else {
      this.msn = 'Nombre no puede estar vacío';
    }
    this.openSnackbar();
  }
  createUser() {
    this._authService.signUp(this.loginEntity).subscribe({
      next: (resp) => {
        if (resp.status == 200 && resp.body?.state == 'ACTIVE') {
          this.sendLogin();
        }
      },
      error: (e) => {
        this.userValidation = false;
        this.msn = 'Correo ya registrado';
        this.openSnackbar();
      }
    });
  }
  sendLogin() {
    this.router.navigateByUrl('/signin');
  }
  openSnackbar() {
    if (this.userValidation == false) {
      this._snackBar.open(this.msn, 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
        verticalPosition: 'top'
      });
    }
  }
}
