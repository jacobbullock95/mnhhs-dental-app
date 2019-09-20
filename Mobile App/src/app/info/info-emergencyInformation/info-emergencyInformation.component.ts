import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'ns-info-emergencyInformation',
  templateUrl: './info-emergencyInformation.component.html',
  styleUrls: ['./info-emergencyInformation.component.scss'],
  moduleId: module.id,
})
export class InfoEmergencyInformationComponent implements OnInit {
  private data1;
  private data2;
  private navigateButtonText;

  constructor(page: Page, private router: Router) { 
    page.actionBarHidden = true;
    this.data1 = true;
    this.data2 = false;
  }

  ngOnInit() {
    this.data1 = true;
    this.data2 = false;
    this.navigateButtonText = "Next";
  }

  private changeDataShown(){
    this.data1 = !this.data1;
    this.data2 = !this.data2;

    if(this.data1) this.navigateButtonText = "Next";
    if(this.data2) this.navigateButtonText = "Previous"
  }
}
