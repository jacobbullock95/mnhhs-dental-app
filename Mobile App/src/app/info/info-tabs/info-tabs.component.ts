import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-info-tabs',
  templateUrl: './info-tabs.component.html',
  styleUrls: ['./info-tabs.component.scss'],
  moduleId: module.id,
})
export class InfoTabsComponent implements OnInit {

  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page
    ) { }

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: { infoSummary: ['info-summary'], infoFull: ['info-full'] }
        }
      ],
      {
        relativeTo: this.active
      }
    );
    this.page.actionBarHidden = true;
  }

}
