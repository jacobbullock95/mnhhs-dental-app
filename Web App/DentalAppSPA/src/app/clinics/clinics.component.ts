import { Component, OnInit } from '@angular/core';
import { Clinic } from '../_models/clinic';
import { ClinicService } from '../_services/clinic.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {

  clinics: Clinic[];

  clinic: Clinic;

  constructor(private clinicService: ClinicService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.clinics = data['clinics'];
    });
  }

}
