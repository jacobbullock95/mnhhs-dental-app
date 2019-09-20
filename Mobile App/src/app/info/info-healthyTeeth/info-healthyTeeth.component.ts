import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'ns-info-healthyTeeth',
  templateUrl: './info-healthyTeeth.component.html',
  styleUrls: ['./info-healthyTeeth.component.scss'],
  moduleId: module.id,
})
export class InfoHealthyTeethComponent implements OnInit {

  constructor(page: Page, private router: Router) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    
  }

  /*public navigateToSummaryPage(pageData){
    this.router.navigate(['/info-detail', pageData]);
  }*/

}
