import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ns-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss'],
  moduleId: module.id,
})
export class InfoDetailComponent implements OnInit {
  public pageTitle = "";
  constructor(private page: Page, private router: Router, private route: ActivatedRoute) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    var pageType = this.route.snapshot.paramMap.get('pageData');
    this.printData(pageType);
  }

  printData(pageType){
    switch(pageType) { 
      case 'healthyTeeth': { 
        this.pageTitle = "Healthy Teeth Tips";

        break;
      }

      case 'emergencyInfo': { 
        this.pageTitle = "Emergency Information";

        break;
      }

      case 'medicare': { 
        this.pageTitle = "Medicare Benefits";

        break;
      }

      case 'moreInfo': { 
        this.pageTitle = "More Information";

        break;
      }
    }
  }
  

}
