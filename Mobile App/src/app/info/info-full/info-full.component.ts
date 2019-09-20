import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-info-full',
  templateUrl: './info-full.component.html',
  styleUrls: ['./info-full.component.css'],
  moduleId: module.id,
})
export class InfoFullComponent implements OnInit {

  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
