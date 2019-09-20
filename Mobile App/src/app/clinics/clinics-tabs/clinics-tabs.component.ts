import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-clinics-tabs',
  templateUrl: './clinics-tabs.component.html',
  styleUrls: ['./clinics-tabs.component.scss'],
  moduleId: module.id,
})
export class ClinicsTabsComponent implements OnInit {

  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page
    ) { }

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: { clinicSearch: ['clinic-search'], clinicList: ['clinic-list'] }
        }
      ],
      {
        relativeTo: this.active
      }
    );
    this.page.actionBarHidden = true;
  }

}
