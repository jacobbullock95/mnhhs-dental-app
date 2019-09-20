import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
  moduleId: module.id,
})
export class RecordsComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
