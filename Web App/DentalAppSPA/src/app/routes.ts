import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './accounts_group/account/account.component';
import { HomeComponent } from './home/home.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { AuthGuard } from './_guards/auth.guard';
import { GuestGuard } from './_guards/guest.guard';
import { AccountDetailComponent } from './accounts_group/account-detail/account-detail.component';
import { AccountDetailResolver } from './_resolvers/account-detail.resolver';
import { AccountResolver } from './_resolvers/account.resolver';
import { AccountEditComponent } from './accounts_group/account-edit/account-edit.component';
import { AccountEditResolver } from './_resolvers/account-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ClinicResolver } from './_resolvers/clinic.resolver';
import { ClinicDetailResolver } from './_resolvers/clinic-detail.resolver';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'information', component: InfoComponent, canActivate: [GuestGuard]},
    {path: 'clinics', component: ClinicsComponent, canActivate: [GuestGuard], resolve: {clinics: ClinicResolver}},
    {path: 'clinics/:id', component: ClinicDetailComponent, canActivate: [GuestGuard], resolve: {clinic: ClinicDetailResolver}},

    // {path: 'account', component: AccountComponent, canActivate: [AuthGuard], resolve: {users: AccountResolver}},

    {path: 'account', redirectTo: 'account/edit', pathMatch: 'full'},

    {path: 'myaccount', component: AccountEditComponent,
    canActivate: [AuthGuard], resolve: {user: AccountEditResolver}, canDeactivate: [PreventUnsavedChanges]},


    // {path: 'account/:id', component: AccountDetailComponent, canActivate: [AuthGuard], resolve: {user: AccountDetailResolver}},
    {path: 'account/:id', redirectTo: 'account/edit', pathMatch: 'full'},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
