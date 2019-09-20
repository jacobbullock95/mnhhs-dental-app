import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import * as utils from "tns-core-modules/utils/utils";
import * as TNSPhone from 'nativescript-phone';
import * as application from "tns-core-modules/application";


@Component({
  selector: 'ns-clinic-list',
  templateUrl: './clinic-summary.component.html',
  styleUrls: ['./clinic-summary.component.css'],
  moduleId: module.id,
})
export class ClinicSummaryComponent implements OnInit {
  public name;
  public type;
  public phone;
  public address;
  public placeID;
  public lat;
  public long;
  public imgURL;
  

  constructor(page: Page, private router: Router, private route: ActivatedRoute) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    var clinicData = JSON.parse(this.route.snapshot.paramMap.get('clinic'));
    console.log(clinicData);
    this.name = clinicData.name;
    this.imgURL = clinicData.imgURL;
    this.type = clinicData.type;
    this.phone = clinicData.phone;
    this.address = clinicData.address;
    this.placeID = clinicData.placeID;
    this.lat = clinicData.lat;
    this.long = clinicData.long;

    application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
      args.cancel = false;
    });
  }

  public openMap(){
    var mapURL = "https://www.google.com/maps/search/?api=1&query=".concat(this.lat, ",", this.long, "&query_place_id=", this.placeID);
    utils.openUrl(mapURL);
  }

  public openPhone(){
   TNSPhone.dial(this.phone, true);
  }
  

}