import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cancelLogin = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login () {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Welcome');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel () {
    this.cancelLogin.emit(false);
  }

}
