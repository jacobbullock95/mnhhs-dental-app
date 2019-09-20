import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.css'],
  moduleId: module.id,
})
export class AccountNavComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
