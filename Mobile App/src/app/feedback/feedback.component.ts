import { Component, OnInit } from '@angular/core';

import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormControl } from '@angular/forms';
import { Feedback } from './feedback.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take, switchMap } from 'rxjs/operators';
import { ToastService } from '../toast.service';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('StarRating', () => require('nativescript-star-ratings').StarRating);


@Component({
  selector: 'ns-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  moduleId: module.id,
})
export class FeedbackComponent implements OnInit {
  form: FormGroup;
  constructor(
    private page: Page,
    private http: HttpClient,
    private auth: AuthService,
    private toast: ToastService
  ) { 
    this.page.actionBarHidden = true;
    
  }

  ngOnInit() {

    this.form = new FormGroup({
      rating: new FormControl(null,{
        updateOn: 'change'
      }),
      message: new FormControl(null,{
        updateOn:'change',
      })

    });
  }

  submitFeedback(){
    const rating = this.form.get('rating').value;
    const message = this.form.get('message').value;

    const newFeedback = new Feedback(rating,message, new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"}));
    console.log(newFeedback);

    this.auth.user.pipe(
      take(1),
      switchMap(
        currentUser => {
          return this.http.post(
            `https://mndental-606ae.firebaseio.com/feedback.json?auth=${currentUser.token}`, 
            newFeedback
        ); 
        }
      )
    ).subscribe(res => {
      this.toast.displayToast('Feedback Submitted');
      console.log(res);
    });

  }

}
