import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NgModule } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from 'nativescript-cardview';
import { Account } from "../account/account.model";
import { Subscription } from "rxjs";
import { AccountService } from "../account/account.service";
import { AuthService } from '../auth/auth.service';

registerElement("CardView", () => CardView);


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    hasName = false;
    currentAccount: Account;
    private curAccountSub: Subscription;
    isLoading = false;
    private loggedIn;

    constructor(private page: Page, private routerExtensions: RouterExtensions, private accountService: AccountService, private authService: AuthService) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = true;
        this.loggedIn = authService.checkLogin();
    }

    ngOnInit(): void {
      this.hasName = false;
        this.isLoading = true;
        this.accountService.fetchAccount().subscribe(res => {
            console.log('Fetched Account...');
            
            this.loadAccount();
            
      
          }, err => {
            console.log(err);
            
            this.loadAccount();


      
          });
          
          
    }

    private loadAccount() {
      setTimeout(() => {
        this.curAccountSub = this.accountService.currentAccount.subscribe(account => {
          if(account){
            this.currentAccount = account;
            console.log("1");
            if(account.firstName !== ''){
              this.hasName = true;
            }
          }
          else{
            console.log("2");
            this.accountService.createNewAccount('','','','','','');
          }
          
        });
      },50);
      setTimeout(() => {
        this.isLoading = false;
      },150);
      
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    navigateToPage(route){
        var routeConcat = "/".concat(route);
        this.routerExtensions.navigate([routeConcat], { clearHistory: true });

    }
}
