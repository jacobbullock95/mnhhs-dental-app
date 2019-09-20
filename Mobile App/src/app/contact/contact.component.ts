import { Component, OnInit } from '@angular/core';
import * as TNSPhone from 'nativescript-phone';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormControl } from '@angular/forms';
import { Callback } from './callback.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take, switchMap } from 'rxjs/operators';
import { ToastService } from '../toast.service';
import { RouterExtensions } from 'nativescript-angular/router';



@Component({
  selector: 'ns-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  moduleId: module.id,
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  

  constructor(

    private page: Page,
    private http: HttpClient,
    private auth: AuthService,
    private toast: ToastService,
    private router: RouterExtensions
  ) { 
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
   

    this.form = new FormGroup({
      firstName: new FormControl(null,{
        updateOn: 'change'
      }),
      lastName: new FormControl(null,{
        updateOn:'change',
      }),
      phone: new FormControl(null,{
        updateOn:'change',
      }),
      message: new FormControl(null,{
        updateOn:'change',
      })

    });
  }

  callOH(){
    TNSPhone.dial('0736468111', true);
  }

  requestCall(){
    const firstName = this.form.get('firstName').value;
    const lastName = this.form.get('lastName').value;
    const phone = this.form.get('phone').value;
    const message = this.form.get('message').value;

    const newCallback = new Callback(firstName, lastName, phone, message, '', new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"}));
    console.log(newCallback);

    this.auth.user.pipe(
      take(1),
      switchMap(
        currentUser => {
          newCallback.userId = currentUser.id;
          return this.http.post(
            `https://mndental-606ae.firebaseio.com/callback.json?auth=${currentUser.token}`, 
            newCallback
        ); 
        }
      )
    ).subscribe(res => {
      console.log(res);
      this.toast.displayToast('Callback Request Succesful');
      this.router.navigate(['/home']);
    });

  }

}
