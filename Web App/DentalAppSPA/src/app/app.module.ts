import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { ClinicService } from './_services/clinic.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './accounts_group/account/account.component';
import { AccountEditComponent } from './accounts_group/account-edit/account-edit.component';


import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { AccountCardComponent } from './accounts_group/account-card/account-card.component';
import { AccountDetailComponent } from './accounts_group/account-detail/account-detail.component';
import { AccountDetailResolver } from './_resolvers/account-detail.resolver';
import { AccountResolver } from './_resolvers/account.resolver';
import { AccountEditResolver } from './_resolvers/account-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ClinicResolver } from './_resolvers/clinic.resolver';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { ClinicDetailResolver } from './_resolvers/clinic-detail.resolver';


export function tokenGetter() {
    return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ClinicsComponent,
      LoginComponent,
      InfoComponent,
      AccountComponent,
      AccountCardComponent,
      AccountDetailComponent,
      AccountEditComponent,
      ClinicDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
    ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      ClinicService,
      AccountDetailResolver,
      AccountResolver,
      AccountEditResolver,
      ClinicResolver,
      ClinicDetailResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
