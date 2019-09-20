import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { GetStartedComponent } from './getStarted/getStarted.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { RecordsComponent } from './records/records.component';
import { FamilyComponent } from './family/family.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  
  { path: '', component: GetStartedComponent },
  {path: 'auth', loadChildren: '~/app/auth/auth.module#AuthModule'},
  {path: 'home', component: HomeComponent},
  
  {
    path: 'challenges',
    loadChildren: '~/app/challenges/challenges.module#ChallengesModule'
  },
  {
    path: 'info',
    loadChildren: '~/app/info/info.module#InfoModule'
  },
  {
    path: 'clinics',
    loadChildren: '~/app/clinics/clinics.module#ClinicsModule'
    // children: [
    //   {path: 'clinic-search', component: ClinicSearchComponent, outlet: 'clinic-search'},
    //   {path: 'clinic-list', component: ClinicListComponent, outlet: 'clinic-list'}
    // ]
  },
  {
    path: 'forms',
    loadChildren: '~/app/forms/forms.module#FormsModule'
  },

  {
    path: 'calendar',
    loadChildren: '~/app/calendar/calendar.module#CalendarModule'
  },

  {
    path: 'emergencyInformation',
    loadChildren: '~/app/emergencyInformation/emergencyInformation.module#EmergencyInformationModule'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'help',
    loadChildren: '~/app/help/help.module#HelpModule'
  },

  {
    path: 'settings',
    loadChildren: '~/app/settings/settings.module#SettingsModule'
  },
  {
    path: 'account-nav',
    component: AccountNavComponent
  },
  {
    path: 'account', 
    component: AccountComponent
  },
  {
    path: 'records', 
    component: RecordsComponent
  },
  {
    path: 'family', 
    component: FamilyComponent
  }
  
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
