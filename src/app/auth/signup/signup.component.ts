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
    if(f.invalid){
      return ;
    }
    this.createUser();
  }
  createUser() {
    this._authService.signUp(this.loginEntity).subscribe({
      next: (resp) => {
        if (resp.status == 200 && resp.body === true) {
          this._snackBar.open('Se ha enviado un mail con tu contraseña temporal.', 'Cerrar', {
            duration: 20000,
            panelClass: ['green-snackbar'],
            verticalPosition: 'top'
          }).afterDismissed().subscribe(info => {
            this.sendLogin();
          });
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
    console.log('Llego');
    console.trace();
    if (this.userValidation == false) {
      this._snackBar.open(this.msn, 'Cerrar', {
        duration: 2000,
        panelClass: ['red-snackbar'],
        verticalPosition: 'top'
      });
    }
  }
}
