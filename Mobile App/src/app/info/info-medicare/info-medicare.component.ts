import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router } from '@angular/router';
import * as utils from "tns-core-modules/utils/utils";



@Component({
  selector: 'ns-info-medicare',
  templateUrl: './info-medicare.component.html',
  styleUrls: ['./info-medicare.component.scss'],
  moduleId: module.id,
})
export class InfoMedicareComponent implements OnInit {

  constructor(page: Page, private router: Router) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    
  }

  private navigateToMedicare(){
    utils.openUrl("https://www.humanservices.gov.au/individuals/medicare");
  }

  /*public navigateToSummaryPage(pageData){
    this.router.navigate(['/info-detail', pageData]);
  }*/

}
