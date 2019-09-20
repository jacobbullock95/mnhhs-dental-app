import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FormsComponent } from "./forms.component"; //parent
import { FormsSummaryComponent } from "./formsSummary/formsSummary.component";
import { ParentConsentFormComponent } from './parentConsentForm/parentConsentForm.component';


const routes: Routes = [
/*{ path: "", component: FormsSummaryComponent},*/
  { path: "", component: ParentConsentFormComponent}, 


]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class FormsRoutingModule {}