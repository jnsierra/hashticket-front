import { Component } from '@angular/core';
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

  constructor(private _authService: AuthService, private router: Router, private title: Title, private meta: Meta) {
    this.loginEntity = new Login();
    title.setTitle('Crear cuenta');
    meta.updateTag({ name: 'description', content: "Página para creación de cuenta" })
  }
  generarLogin(f: NgForm) {
    this.createUser();
  }
  createUser() {
    this._authService.signup(this.loginEntity).subscribe(resp => {
      if (resp.state == 'ACTIVE') {
        this.sendLogin();
      }
    });
  }
  sendLogin() {
    this.router.navigateByUrl('/signin');
  }
}
