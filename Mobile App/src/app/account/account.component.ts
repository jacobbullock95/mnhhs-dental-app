import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '../auth/auth.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { AccountService } from './account.service';
import { Account } from './account.model';
import { Subscription } from 'rxjs';
import { ToastService } from '../toast.service';

@Component({
  selector: 'ns-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  moduleId: module.id,
})
export class AccountComponent implements OnInit {
  form: FormGroup;
  currentAccount: Account;
  private curAccountSub: Subscription;
  isLoading = false;

  constructor(
    private router: RouterExtensions,
    private accountService: AccountService,
    private page: Page,
    private toast: ToastService
  ) { 
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.isLoading = true;
    this.accountService.fetchAccount().subscribe(res => {
      console.log('Fetched Account...');
      this.isLoading = false;

    }, err => {
      console.log(err);
      this.isLoading = false;

    });
    this.curAccountSub = this.accountService.currentAccount.subscribe(account => {
      if(account){
        this.currentAccount = account;
        console.log('Has Account');
      }
      else{
        console.log('No Account');
      }
      
    });

    

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
      medicareNumber: new FormControl(null,{
        updateOn:'change',
      }),
      medicareCode: new FormControl(null,{
        updateOn:'change',
      }),
      medicareExpiry: new FormControl(null,{
        updateOn:'change',
      }),

    });

    
  }

  onSubmit(){
    const firstName = this.form.get('firstName').value;
    const lastName = this.form.get('lastName').value;
    const phone = this.form.get('phone').value;
    const medicareNumber = this.form.get('medicareNumber').value;
    const medicareCode = this.form.get('medicareCode').value;
    const medicareExpiry = this.form.get('medicareExpiry').value;

    this.accountService.updateAccount(firstName,lastName,phone,medicareNumber,medicareCode,medicareExpiry);
    this.router.navigate(['/account-nav']);
    this.toast.displayToast('Account Updated Succesfully');
  }



}
