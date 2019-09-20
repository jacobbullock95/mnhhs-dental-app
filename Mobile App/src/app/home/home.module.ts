import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeWidgetComponent } from '../home-widget/home-widget.component';
import { registerElement } from 'nativescript-angular/element-registry';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        
    ],
    declarations: [
        HomeComponent,
        HomeWidgetComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { 
    
}
