import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ns-calendarSummary',
  templateUrl: './calendarSummary.component.html',
  styleUrls: ['./calendarSummary.component.css'],
  moduleId: module.id,
})
export class CalendarSummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  public navigateConsentForm(){
    this.router.navigate(["/cform"]);
  }

}
