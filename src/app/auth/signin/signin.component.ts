import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/entities/login';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  loginEntity: Login;

  constructor(private _authService: AuthService){
    this.loginEntity = new Login();
  }

  sendLogin(){
    this._authService.login(this.loginEntity).subscribe( resp => {
      console.log(resp);
    });
  }

  generarLogin( f:NgForm ){
    console.log('Llego');
    console.log(this.loginEntity);
    console.log(f);
    this.sendLogin();
  }
}
