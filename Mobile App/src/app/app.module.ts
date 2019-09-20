import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DayModalComponent } from './challenges/day-modal/day-modal.component';
import { SharedModule } from './shared/shared.module';
import { ChallengeActionsModule } from './challenges/challenge-actions/challenge-actions.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClinicsModule } from './clinics/clinics.module';
import { InfoModule } from './info/info.module';
import { HomeComponent } from './home/home.component';
import { HomeWidgetComponent } from './home-widget/home-widget.component';
import {GetStartedComponent} from './getStarted/getStarted.component';
import { DatabaseService } from "./database/sqlite.service";




// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AccountComponent } from './account/account.component';
import { AccountNavComponent } from './account-nav/account-nav.component';

import { FamilyComponent } from './family/family.component';
import { RecordsComponent } from './records/records.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
    SharedModule,
    ChallengeActionsModule,
    ReactiveFormsModule,
    ClinicsModule,
    InfoModule,
    
  ],
  declarations: [
    AppComponent,
    DayModalComponent,
    HomeComponent,
    HomeWidgetComponent,
    GetStartedComponent,
    AccountComponent,
    AccountNavComponent,
    FamilyComponent,
    RecordsComponent,
    ContactComponent,
    FeedbackComponent
  ],
  providers: [DatabaseService],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DayModalComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
