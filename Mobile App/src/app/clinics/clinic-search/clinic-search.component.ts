import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from "@angular/core";
import { SearchBar } from 'tns-core-modules/ui/search-bar';
import {isAndroid} from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import * as geocoding from "nativescript-geocoding";
import { Accuracy } from "tns-core-modules/ui/enums";
//Layouts
import { WrapLayout } from 'tns-core-modules/ui/layouts/wrap-layout'
//import labelModule = require("tns-core-modules/ui/label");
import { waitForMap } from "@angular/router/src/utils/collection";
;
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";

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
  selector: 'ns-clinic-search',
  templateUrl: './clinic-search.component.html',
  styleUrls: ['./clinic-search.component.scss'],
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ClinicSearchComponent implements OnInit {
  public showClinicList = false;
  public showMap = false;
  public showSearchInputs = true;
  public dentalOffices: Array<DentalOffices>;
  public searchString = '';
  public location = new geocoding.Location();
  public showFindClinicControl = true;
  private stringDentalLocationData;
  private showResetButton = false;
  private loadingDisplay = false;

  @ViewChild('searchEl') searchEl: ElementRef<SearchBar>;

  constructor(page: Page, private router: Router) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
    this.stringDentalLocationData = JSON.stringify(dentalLocationData.dentalOffices);
  }

  onSearchLoaded() {
    if (isAndroid){ this.searchEl.nativeElement.android.clearFocus(); }
  }

private latitude;
private longitude;

  public searchClinics(searchBy, args, index) {
    if(searchBy == "currentLocation"){
      this.loadingDisplay = true;
      this.useCurrentLocation();
      //this.router.navigate(['/clinic-currentLocation']);
    } else if(searchBy == "name"){
      this.searchByName(args, index);

    } else if(searchBy == "viewMap"){
      this.router.navigate(['/clinic-map', 'false']);
    }
}

public searchByName(args, index){
  this.loadingDisplay = true;
  var self = this;
  let searchBar = <SearchBar>args.object;
  geocoding.getLocationListFromName(searchBar.text, 5).then(locations => {
      console.log('Found ', locations.length);

      if (locations.length > 0) {
          this.location = locations[0];
          console.log(locations[0]);

          dentalLocationData.dentalOffices.forEach(function(element){
            var distance = self.calculateDistance(locations[0].latitude, locations[0].longitude, element.lat, element.lng);
            var roundedDistance = parseFloat(distance.toFixed(2));
            element.distance = roundedDistance.toString();
        });

        //console.log(dentalLocationData);
  
        self.sortByDistance();
        this.loadingDisplay = false;
        this.router.navigate(['/clinic-searchByName', JSON.stringify(dentalLocationData)]);
      }
  }, function (e) {
      console.log('Error: ' + (e.message || e));
  });
}

public toggleSearchInputs(){
  if(this.showSearchInputs){
    this.showSearchInputs = false;
  } else{
    this.showSearchInputs = true;
  }
}

public calculateDistance(curLat, curLng, lat, lng){
  if ((curLat == lat) && (curLng == lng)) {
      return 0;
  } else {
      var radlat1 = Math.PI * curLat/180;
      var radlat2 = Math.PI * lat/180;
      var theta = curLng-lng;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
          dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;
      
      return dist;
  }
}

public useCurrentLocation(){
  var self = this;
  getCurrentLocation({
    desiredAccuracy: 3,
    timeout: 5000
}).then(location => {
        self.latitude = location.latitude;
        self.longitude = location.longitude;
        dentalLocationData.dentalOffices.forEach(function(element){
          var distance = self.calculateDistance(self.latitude, self.longitude, element.lat, element.lng);
          var roundedDistance = parseFloat(distance.toFixed(2));
          element.distance = roundedDistance.toString();
      });

      this.sortByDistance();
      this.loadingDisplay = false;
      this.router.navigate(['/clinic-currentLocation', JSON.stringify(dentalLocationData)]);
        

    }).catch(error => {
        console.log("Location error received: " + error);
        alert("Location error received: " + error);
    });
}

public sortByDistance(){
  var i, j;
  var self = this;
  var tempDentalLocationData = dentalLocationData;
  var length = tempDentalLocationData.dentalOffices.length;

  for(i = 0; i<length-1; i++){
      for(j=0; j<length-i-1; j++){
          var check1 = tempDentalLocationData.dentalOffices[j];
          var check2 = tempDentalLocationData.dentalOffices[j+1]
          if(parseFloat(check1.distance) > parseFloat(check2.distance)){
              var temp = check1;
              tempDentalLocationData.dentalOffices[j] = tempDentalLocationData.dentalOffices[j+1];
              tempDentalLocationData.dentalOffices[j+1] = temp;
          }
      }
  }

  dentalLocationData = tempDentalLocationData;

  this.dentalOffices = [];
  for (let i = 0; i < 5; i++) {
      this.dentalOffices.push(dentalLocationData.dentalOffices[i]);
  }
}

public showSearchOptions(){
  console.log("working");
}

private resetSearch(){
  this.showClinicList = false;
  this.showMap = false;
  this.showSearchInputs = true;
  this.searchString = "";
  this.location = new geocoding.Location();
  this.showResetButton = false;
}




  @ViewChild("map") public mapbox: ElementRef;
  public onMapReady(args: any) {
      var self = this;
      dentalLocationData.dentalOffices.forEach(function(element){
          self.mapbox.nativeElement.addMarkers([{
              lat: element.lat,
              lng: element.lng,
              title: element.name,
          }])
          
      });

      args.map.setCenter(
          {
              lat: -27.467477,
              lng: 153.024629,
              animated: false,
              zoomLevel: 8
          })        
  }
}
