import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ns-formsSummary',
  templateUrl: './formsSummary.component.html',
  styleUrls: ['./formsSummary.component.css'],
  moduleId: module.id,
})
export class FormsSummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  public navigateConsentForm(){
    this.router.navigateByUrl('./parentConsentForm');
  }

}
