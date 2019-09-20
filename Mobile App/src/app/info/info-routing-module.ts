import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { InfoTabsComponent } from "./info-tabs/info-tabs.component";
import { InfoFullComponent } from "./info-full/info-full.component";
import { InfoSummaryComponent } from "./info-summary/info-summary.component";
//import { InfoDetailComponent } from "./info-detail/info-detail.component";

//Individual Information Pages
import { InfoHealthyTeethComponent } from "./info-healthyTeeth/info-healthyTeeth.component";
import { InfoEmergencyInformationComponent } from "./info-emergencyInformation/info-emergencyInformation.component";
import { InfoMedicareComponent } from "./info-medicare/info-medicare.component";
import { InfoMoreInfoComponent } from "./info-moreInfo/info-moreInfo.component";

const routes: Routes = [
    { 
        path: 'tabs', 
        component: InfoTabsComponent, 
        children: [
          { path: 'info-summary', component: InfoSummaryComponent, outlet: 'infoSummary' },
          {
            path: 'info-full',
            component: InfoFullComponent,
            outlet: 'infoFull'
          }
        ]
      },
      { path: '', redirectTo: '/info/tabs', pathMatch: 'full'},
      //{ path: 'info-detail/:pageData', component: InfoDetailComponent },
      { path: 'info-healthyTeeth', component: InfoHealthyTeethComponent },
      { path: 'info-emergencyInformation', component: InfoEmergencyInformationComponent },
      { path: 'info-medicare', component: InfoMedicareComponent },
      { path: 'info-moreInfo', component: InfoMoreInfoComponent },

]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class InfoRoutingModule {}