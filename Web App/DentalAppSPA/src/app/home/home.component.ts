import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  loginMode = false;


  constructor(public authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }


  registerToggle () {
    this.registerMode = true;
  }

  loginToggle () {
    this.loginMode = true;
  }

  guestToggle () {
    this.authService.guestLogin();
  }

  cancelRegisterMode (registerMode: boolean) {
    this.registerMode = registerMode;
  }

  cancelLoginMode (loginMode: boolean) {
    this.loginMode = loginMode;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  guestLoggedIn() {
    return this.authService.guestLoggedIn();
  }

}
