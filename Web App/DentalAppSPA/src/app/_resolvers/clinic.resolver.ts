import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { Clinic } from '../_models/clinic';
import { ClinicService } from '../_services/clinic.service';

@Injectable()
export class ClinicResolver implements Resolve<Clinic[]> {
    constructor(private authService: AuthService, private clinicService: ClinicService,
        private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Clinic[]> {
        return this.clinicService.getClinics().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
