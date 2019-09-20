import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'ns-info-summary',
  templateUrl: './info-summary.component.html',
  styleUrls: ['./info-summary.component.scss'],
  moduleId: module.id,
})
export class InfoSummaryComponent implements OnInit {

  constructor(page: Page, private router: Router) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    
  }

  public navigateToSummaryPage(pageData){
    var urlConcat = "/info-".concat(pageData);
    this.router.navigate([urlConcat]);
  }

}
