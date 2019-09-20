import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextField } from 'tns-core-modules/ui/text-field';
import { AuthService } from './auth.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { setString, getString, hasKey, remove } from 'tns-core-modules/application-settings';
import { AccountService } from '../account/account.service';
import { Account } from '../account/account.model';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id
})
export class AuthComponent implements OnInit {
  passwordMatch = false;
  form: FormGroup;
  accountForm: FormGroup;
  emailControlIsValid = true;
  passwordControlIsValid = true;

  isLogin = true;
  isLoading = false;
  @ViewChild('passwordEl') passwordEl: ElementRef<TextField>;

  @ViewChild('emailEl') emailEl: ElementRef<TextField>;

  constructor(
    private router: RouterExtensions, 
    private authService: AuthService,
    private page: Page,
    private accountService: AccountService,
    private http: HttpClient,
    private toast: ToastService,
    private routerExtensions: RouterExtensions,
    ) 
    {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.passwordMatch = false;
    this.form = new FormGroup({
      email: new FormControl(null, 
        {
          updateOn: 'blur', 
          validators: [Validators.required, Validators.email]
        }),
      password: new FormControl(null,
        {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl(null,
        {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

    this.form.get('email').statusChanges.subscribe(status => {
      this.emailControlIsValid = status === 'VALID';
    });

    this.form.get('password').statusChanges.subscribe(status => {
      this.passwordControlIsValid = status === 'VALID';
    });

   
    
  }




  onSubmit() {
    this.emailEl.nativeElement.focus();
    this.passwordEl.nativeElement.focus();

    this.passwordEl.nativeElement.dismissSoftInput();

    

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const confirmPassword = this.form.get('confirmPassword').value;

    if(password === confirmPassword){
      this.passwordMatch = true;
    }
    else{
      this.passwordMatch = false;
    }

    
    
    
    if(this.emailControlIsValid && this.passwordControlIsValid){
      console.log(email, password);
    }
    else{
      console.log('Email and or Password were invalid');
    }
    this.form.reset();
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;

    this.isLoading = true;

    //Logging In
    if(this.isLogin) {
      this.authService.login(email,password).subscribe(resData => {
        this.isLoading = false;
        this.toast.displayToast('Logged In Succesfully');
        this.router.navigate(['/home'], { clearHistory: true });
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    }
    //Signing Up
    else{
      if(this.passwordMatch){
        this.authService.signUp(email, password).subscribe(resData => {
        
          this.toast.displayToast('Registration was Successful');
          this.isLoading = false;
          this.router.navigate(['/home'], { clearHistory: true });
        }, err => {
          console.log(err);
          this.isLoading = false;
        });
      }
      else{
        alert('Passwords Don\'t Match');
        this.isLoading = false;
      }
      
    }
    
  }

  switchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  resetGetStarted(){
    remove('getStarted');
    this.router.navigate(['/'], {clearHistory: true});
  }


  continueAsGuest(){
    this.routerExtensions.navigate(["/home"], { clearHistory: true });
  }

  
}
