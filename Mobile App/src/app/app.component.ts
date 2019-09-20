import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { UIService } from './shared/ui.service';

import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import { DatabaseService } from "./database/sqlite.service";
import { setOrientation } from 'nativescript-orientation';
import { AuthService } from './auth/auth.service';
import { ToastService } from './toast.service';
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';





@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//const viewModel = new Observable();

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
  activeChallenge = '';
  private drawerSub: Subscription;
  private drawer: RadSideDrawer;
  private latitude: number;
  private longitude: number;
  public loggedIn;

  constructor(
    private uiService: UIService,
    private changeDetectionRef: ChangeDetectorRef,
    private vcRef: ViewContainerRef,
    private database: DatabaseService,
    private authService: AuthService,
    private toast: ToastService
  ) {
    setOrientation("portrait");
    this.loggedIn = this.authService.checkLogin();

  }

  ngDoCheck() {
    this.loggedIn = this.authService.checkLogin();
  }

  ngOnInit() {


    /*viewModel.set("loggedIn", this.authService.checkLogin());
    
    viewModel.set("loggedIn", (args) => {
      // args is of type EventData
      console.log("SOMETHING HAPPENED");
  });*/
  


    //console.log("Logged In:" + this.authService.checkLogin());
    this.drawerSub = this.uiService.drawerState.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    });
    this.uiService.setRootVCRef(this.vcRef);
    

    this.setupLocation();
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;

    this.changeDetectionRef.detectChanges();
  }

  onChallengeInput(challengeDescription: string) {
    this.activeChallenge = challengeDescription;
    console.log('onChallengeInput: ', challengeDescription);
  }

  onLogout() {
    this.loggedIn = this.authService.checkLogin();
    this.uiService.toggleDrawer();
    this.authService.logout();
    this.toast.displayToast('Logged Out');
  }

  onDrawerNav() {
    this.uiService.toggleDrawer();
  }

  public setupLocation(){
    var self = this;
    //var location;
    enableLocationRequest(true).then( function () {
        isEnabled().then(function (isLocationEnabled) {
            let message = "Location services are not available";
            if (isLocationEnabled) {
                message = "Location services are available";
                console.log("Location services are available");
            /*getCurrentLocation({
                desiredAccuracy: 3,
                timeout: 5000
            }).then(location => {
                    self.latitude = location.latitude;
                    self.longitude = location.longitude;

                }).catch(error => {
                    console.log("Location error received: " + error);
                    alert("Location error received: " + error);
                });*/
            }
        }, function (e) {
            console.log("Location error received: " + (e.message || e));
        });

    });
}

  ngOnDestroy() {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  }
}
