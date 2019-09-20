import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router } from '@angular/router';
import * as utils from "tns-core-modules/utils/utils";


@Component({
  selector: 'ns-info-moreInfo',
  templateUrl: './info-moreInfo.component.html',
  styleUrls: ['./info-moreInfo.component.scss'],
  moduleId: module.id,
})
export class InfoMoreInfoComponent implements OnInit {

  constructor(page: Page, private router: Router) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    
  }

  private navigateToMetroNorth(){
    utils.openUrl("https://metronorth.health.qld.gov.au/");
  }

  /*public navigateToSummaryPage(pageData){
    this.router.navigate(['/info-detail', pageData]);
  }*/

}
