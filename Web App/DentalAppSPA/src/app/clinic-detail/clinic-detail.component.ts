import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../_services/clinic.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Clinic } from '../_models/clinic';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.css']
})
export class ClinicDetailComponent implements OnInit {
  clinic: Clinic;
  mapsParams: string;

  constructor(private clinicService: ClinicService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.clinic = data['clinic'];
    });

    this.mapsParams = this.clinic.address.replace(/\s+/, '+');
  }

}
