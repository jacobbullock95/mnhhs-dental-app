import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService , private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  guestLoggedIn() {
    return this.authService.guestLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.success('Logged Out');
    this.router.navigate(['/home']);
  }

}
