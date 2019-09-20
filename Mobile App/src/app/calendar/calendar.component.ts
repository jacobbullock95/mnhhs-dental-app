import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NgModule } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from 'nativescript-cardview';



@Component({
    selector: "Calendar",
    moduleId: module.id,
    templateUrl: "./calendar.component.html",
    styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

    constructor(private page: Page) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
