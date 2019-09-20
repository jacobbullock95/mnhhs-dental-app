import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ClinicsTabsComponent } from "./clinics-tabs/clinics-tabs.component";
import { ClinicSearchComponent } from "./clinic-search/clinic-search.component";
import { ClinicListComponent } from "./clinic-list/clinic-list.component";
import { ClinicSummaryComponent } from "./clinic-summary/clinic-summary.component";
import { ClinicMapComponent } from "./clinic-map/clinic-map.component";
import { ClinicCurrentLocationComponent } from "./clinic-currentLocation/clinic-currentLocation.component";
import { ClinicSearchByNameComponent } from "./clinic-searchByName/clinic-searchByName.component";


const routes: Routes = [
    { 
        path: 'tabs', 
        component: ClinicsTabsComponent, 
        children: [
          { path: 'clinic-search', component: ClinicSearchComponent, outlet: 'clinicSearch' },
          {
            path: 'clinic-list',
            component: ClinicListComponent,
            outlet: 'clinicList'
          }
        ]
      },
      { path: '', redirectTo: '/clinics/tabs', pathMatch: 'full'},
      { path: 'clinic-summary/:clinic', component: ClinicSummaryComponent},
      { path: 'clinic-map/:useCurrentLocation', component: ClinicMapComponent},
      { path: 'clinic-currentLocation/:dentalLocationData', component: ClinicCurrentLocationComponent},
      { path: 'clinic-searchByName/:dentalLocationData', component: ClinicSearchByNameComponent}

]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class ClinicsRoutingModule {}