import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NgModule } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from 'nativescript-cardview';
import { AuthService } from "../auth/auth.service";
import { ToastService } from "../toast.service";
import { RouterExtensions } from "nativescript-angular/router";
import { UIService } from '../shared/ui.service';


class AccountSettings {
    constructor(public name: string) { }
}

let accountSettings = ["My Account", "Logout", "Delete Account"];

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ['./settings.component.css'],
})

export class SettingsComponent implements OnInit {
    confirmDelete = false;
    public accountSettings: Array<AccountSettings>;
    public loggedIn;

    constructor(private page: Page, private auth: AuthService, private toast: ToastService, private router: RouterExtensions, private uiService: UIService) {
        this.page.actionBarHidden = true;

        this.accountSettings = [];

        this.loggedIn = auth.checkLogin();

        for (let i = 0; i < accountSettings.length; i++) {
            this.accountSettings.push(new AccountSettings(accountSettings[i]));
        }
    }

    ngDoCheck() {
        this.loggedIn = this.auth.checkLogin();
      }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
        if(accountSettings[args.index] == "My Account") this.navigateToPage('account-nav')
        if(accountSettings[args.index] == "Logout") this.onLogout();
        if(accountSettings[args.index] == "Delete Account") this.onDelete();
    }

    ngOnInit(): void {
        this.confirmDelete = false;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onDelete(){
        this.confirmDelete = true;
    }

    onLogout() {
        //this.uiService.toggleDrawer();
        this.auth.logout();
        this.toast.displayToast('Logged Out');
      }

    confirmDeleteAccount(){
        this.auth.deleteAccount();
        this.auth.logout();
        this.router.navigate(['/auth']);
        this.toast.displayToast('Account & Data Deleted');

    }

    public navigateToPage(route){
        var routeConcat = "/".concat(route);
        this.router.navigate([routeConcat], { clearHistory: true });
    }


}
