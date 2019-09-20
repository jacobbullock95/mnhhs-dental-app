import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import {Slider} from "tns-core-modules/ui/slider";
import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { Image } from "tns-core-modules/ui/image";
import { AuthService } from "../auth/auth.service";
import { setString, getString, hasKey, remove } from 'tns-core-modules/application-settings';


//import { User } from "../shared/user.model";
//import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./getStarted.component.html",
    styleUrls: ['./getStarted.component.css']
})
export class GetStartedComponent implements OnInit {
    isLoggingIn = true;
    //user: User;
    processing = false;
    //@ViewChild("password") password: ElementRef;
    //@ViewChild("confirmPassword") confirmPassword: ElementRef;
    //constructor(private page: Page, private userService: UserService, private routerExtensions: RouterExtensions) {

    constructor(
        private page: Page, 
        private routerExtensions: RouterExtensions,
        private authService: AuthService) {
        this.page.actionBarHidden = true;
        /*this.user = new User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";*/
    }

    ngOnInit(){
        if(hasKey('getStarted')){
            this.login();
        }
    }

    getStarted(){
        this.viewGetStarted();
        this.routerExtensions.navigate(["/auth"], { clearHistory: true });
    }

    login(){
        this.viewGetStarted();
        this.authService.autoLogin().subscribe(success => {
            console.log("Auto Login:" + success);
            if(!success){
              this.authService.logout();
            }
            else{
                this.routerExtensions.navigate(["/home"], {clearHistory: true});
            }
          });
        //this.routerExtensions.navigate(["/auth"], { clearHistory: true });
    }

    continueAsGuest(){
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }

    private viewGetStarted(){
        setString('getStarted', 'viewed');
    }
}

