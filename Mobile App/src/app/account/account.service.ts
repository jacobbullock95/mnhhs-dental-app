import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, of, Subscription } from "rxjs";
import { take, tap, switchMap } from 'rxjs/operators';

import { Account } from './account.model';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AccountService implements OnDestroy {
    private _account = new BehaviorSubject<Account>(null);
    private userSub: Subscription;
    get currentAccount() {
        return this._account.asObservable();
    }

    constructor(
        private http: HttpClient, 
        private authService: AuthService
        ){
            this.userSub = this.authService.user.subscribe(user => {
                if(!user){
                    this._account.next(null);
                }
            });
        }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }    

    fetchAccount(){
        return this.authService.user.pipe(
            take(1),
            switchMap(currentUser => {
            if(!currentUser || !currentUser.isAuth){
                return of(null);
            }
            return this.http.get<{
                firstName: string,
                lastName: string,
                phone: string,
                medicareNumber: string,
                medicareCode: string,
                medicareExpiry: string
            }>(`https://mndental-606ae.firebaseio.com/account/${currentUser.id}.json?auth=${currentUser.token}`)
        }),tap(resData => {
            if(resData){
                const loadedAccount = new Account(
                    resData.firstName, 
                    resData.lastName, 
                    resData.phone, 
                    resData.medicareNumber, 
                    resData.medicareCode,
                    resData.medicareExpiry
                );
                this._account.next(loadedAccount);
            }
            
        }));
    }

    createNewAccount(firstName: string, lastName: string, phone: string, medicareNumber: string, medicareCode: string, medicareExpiry: string){
        const newAccount = new Account(
            firstName,
            lastName,
            phone,
            medicareNumber,
            medicareCode,
            medicareExpiry
        );
        //Save to server
        this.saveToServer(newAccount);

        this._account.next(newAccount);
    }

    updateAccount(firstName: string, lastName: string, phone: string, medicareNumber: string, medicareCode: string, medicareExpiry: string){
        this._account.pipe(take(1)).subscribe(challenge => {
            const updatedAccount = new Account(
                firstName,
                lastName,
                phone,
                medicareNumber,
                medicareCode,
                medicareExpiry
                );
                //Send to server
                this.saveToServer(updatedAccount);
                this._account.next(updatedAccount);
        })
    }

    private saveToServer(account: Account){
        this.authService.user
        .pipe(
            take(1),
            switchMap(currentUser => {
                if(!currentUser || !currentUser.isAuth){
                    return of(null);
                }
                return this.http.put(
                    `https://mndental-606ae.firebaseio.com/account/${currentUser.id}.json?auth=${currentUser.token}`, 
                    account
                );   
            })).subscribe(res => {
                    console.log(res);
                });
    }

}