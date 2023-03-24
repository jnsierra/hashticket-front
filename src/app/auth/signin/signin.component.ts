import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/entities/login';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit{
  loginEntity: Login;

  constructor(private _authService: AuthService, private router: Router){
    this.loginEntity = new Login();
  }
  ngOnInit(): void {
    if(this._authService.isAuthenticated()){
      this.sendHome();
    }
  }
  sendLogin(){
    this._authService.login(this.loginEntity).subscribe( resp => {
      if(resp.loginAction == 'SUCCESS'){
        this.sendHome();
      }
    });
  }
  generarLogin( f:NgForm ){
    this.sendLogin();
  }
  sendHome(){
    this.router.navigateByUrl('/homeAdmin');
  }
}