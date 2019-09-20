import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from '../_models/clinic';



@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getClinics(): Observable<Clinic[]> {
  return this.http.get<Clinic[]>(this.baseUrl + 'clinics');
}

getClinic(id): Observable<Clinic> {
  return this.http.get<Clinic>(this.baseUrl + 'clinics/' + id);
}


}

