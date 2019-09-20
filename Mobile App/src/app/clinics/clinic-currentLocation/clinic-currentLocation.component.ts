import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import * as geocoding from "nativescript-geocoding";
import { Accuracy } from "tns-core-modules/ui/enums";
//Layouts
import { WrapLayout } from 'tns-core-modules/ui/layouts/wrap-layout';
//import { labelModule } from "tns-core-modules/ui/label";
import { waitForMap } from "@angular/router/src/utils/collection";

import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

class DentalOffices {
  constructor(public name: string) { }
}

let dentalLocationData = {"dentalOffices": [
  {"name": "Queensland Children's Hospital", "type": ["children", "adolescents"], "phone": "1300300850", "address": "Level 6, Lady Cilento Children's Hospital, Stanley Street", "lat": "-27.483957", "lng": "153.026573", "distance": "-1", "placeID": "ChIJJaBgXeRZkWsRWhWfHqf7wGo", "imgURL": "~/app/assets/clinicPhotos/QueenslandChildrensHospital.png"}, 
  {"name": "Stafford Dental Clinic", "type": ["adult", "children", "adolescents"], "phone": "1300300850", "address": "Balerang Street, Stafford QLD", "lat": "-27.412004", "lng": "153.018536", "distance": "-1", "placeID": "ChIJr0m6YylYkWsRJeYtN6Idfzo", "imgURL": "~/app/assets/clinicPhotos/StaffordDentalClinic.png"},
  {"name": "Herston Oral Health Centre", "type": ["adult", "children", "adolescents"], "phone": "1300300850", "address": "288 Herston Rd, Herston QLD 4006", "lat": "-27.448425", "lng": "153.024600", "distance": "-1", "placeID": "ChIJxRDAxuVZkWsRxq0mBl", "imgURL": "~/app/assets/clinicPhotos/HerstonOralHealthCentre.png"},
  {"name": "Ferny Hills School Dental Clinic", "type": ["children", "adolescents"], "phone": "1300300850", "address": "Illuta Ave, Ferny Hills QLD 4055", "lat": "-27.401670", "lng": "152.943982", "distance": "-1", "placeID": "ChIJFQlGEWBWkWsRtwfQ42BRiVU", "imgURL": "~/app/assets/clinicPhotos/FernyHillsDentalClinic.png"},
  {"name": "Boondall School Dental Clinic", "type": ["children", "adolescents"], "phone": "1300300850", "address": "568 Gympie Rd, Strathpine QLD 4500", "lat": "-27.298424", "lng": "152.986744", "distance": "-1", "placeID": "ChIJh45F9Pjik2sRn8JQVW0eNbQ", "imgURL": "~/app/assets/clinicPhotos/BoondallSchoolDentalClinic.png"},
]};

@Component({
  selector: 'ns-clinic-currentLocation',
  templateUrl: './clinic-currentLocation.component.html',
  styleUrls: ['./clinic-currentLocation.component.scss'],
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ClinicCurrentLocationComponent implements OnInit {
  public showClinicList = false;
  public showMap = false;
  public showSearchInputs = true;
  public dentalOffices: Array<DentalOffices>;
  public searchString = '';
  public location = new geocoding.Location();
  public showFindClinicControl = true;
  private stringDentalLocationData;
  private showResetButton = false;
  private latitude;
  private longitude;
  private isBusy = true;

  

  constructor(page: Page, private router: Router, private route: ActivatedRoute) { 
    page.actionBarHidden = true;
    var clinicData = JSON.parse(this.route.snapshot.paramMap.get('dentalLocationData'));

    this.dentalOffices = [];
    for (let i = 0; i < 5; i++) {
      this.dentalOffices.push(clinicData.dentalOffices[i]);
    }


  }

  ngOnInit() {
  }



  private resetSearch(){
    this.router.navigate(['/tabs']);
  }

  public navigateToSummary(clinic) {
    var clinicData = JSON.stringify(dentalLocationData.dentalOffices[clinic.index]);
    this.router.navigate(['/clinic-summary', clinicData]);
 }
}
