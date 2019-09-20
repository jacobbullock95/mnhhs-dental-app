import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router, private alertify: AlertifyService) {}
  canActivate(): boolean {
    if (this.authService.guestLoggedIn() || this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('Sign In or Continue as a Guest for Access');
    this.router.navigate(['/home']);
    return false;
  }
}
