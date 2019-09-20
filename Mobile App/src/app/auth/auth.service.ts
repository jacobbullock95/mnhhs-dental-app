import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap, take, switchMap } from "rxjs/operators";
import { throwError, BehaviorSubject, of } from "rxjs";
import { alert } from 'tns-core-modules/ui/dialogs';
import { User } from "./user.model";
import { RouterExtensions } from "nativescript-angular/router";
import { setString, getString, hasKey, remove } from 'tns-core-modules/application-settings';
import { Account } from "../account/account.model";
import { ToastService } from '../toast.service';

const FIREBASE_API_KEY = 'AIzaSyAQ0rcziOh1SVDu_X2nuWho8vbb7ft_G3Y';

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;

}

@Injectable({ providedIn: 'root'})
export class AuthService {

    private _user = new BehaviorSubject<User>(null);
    private tokenEpiration: number;

    constructor(private http: HttpClient, private router: RouterExtensions ){}

    get user() {
        return this._user.asObservable();
    }

    login(email: string, password: string){
        return this.http
        .post<AuthResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_API_KEY}`
        , {email: email, password: password, returnSecureToken: true }
        ).pipe(catchError(err => {
            this.handleError(err.error.error.message);
            return throwError(err);
        }),
        tap(resData => {
            if (resData && resData.idToken){
                this.handleAuth(
                    email, 
                    resData.idToken, 
                    resData.localId,
                    parseInt(resData.expiresIn)
                )
            }
        }));    
    }

    signUp(email: string, password: string ){
        return this.http
        .post<AuthResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}`
        , {email: email, password: password, returnSecureToken: true }
        ).pipe(catchError(err => {
            this.handleError(err.error.error.message);
            return throwError(err);
        }),
        tap(resData => {

            

            if (resData && resData.idToken){
                
                this.handleAuth(
                    email, 
                    resData.idToken, 
                    resData.localId,
                    parseInt(resData.expiresIn)
                    )
                
                    
            }
        })
        );

    }

    deleteAccount(){
        this.user
        .pipe(
            take(1),
            switchMap(currentUser => {
                if(!currentUser || !currentUser.isAuth){
                    return of(null);
                }
                return this.http.post(
                    `https://www.googleapis.com/identitytoolkit/v3/relyingparty/deleteAccount?key=${FIREBASE_API_KEY}`, 
                    {idToken: currentUser.token}
                );   
            })).subscribe(res => {
                    console.log(res);
                });
    }

    private initAccount() {
        const newAccount = new Account('','','','','','');

        this.user
        .pipe(
            take(1),
            switchMap(currentUser => {
                if(!currentUser || !currentUser.isAuth){
                    return of(null);
                }
                return this.http.put(
                    `https://mndental-606ae.firebaseio.com/account/${currentUser.id}.json?auth=${currentUser.token}`, 
                    newAccount
                );   
            })).subscribe(res => {
                    console.log(res);
                });
    }

    logout() {
        this._user.next(null);
        remove('userData');
        if(this.tokenEpiration){
            clearTimeout(this.tokenEpiration);
        }
        this.router.navigate(['/auth'], {clearHistory: true});
    }

    private handleAuth(email: string, token: string, userId: string, expiresIn: number){
        const expiration = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(
            email, 
            userId, 
            token, 
            expiration
            );
        setString('userData',JSON.stringify(user));
        this.autoLogout(user.timeToExpiry);
        this._user.next(user);
    }

    checkLogin(){
        if(!hasKey('userData')){
            return false;
        } else {
            return true;
        }
    }

    autoLogin(){
        if(!hasKey('userData')){
            return of(false);
        }
        const userData: {
            email: string, 
            id: string, 
            _token: string, 
            _tokenExpirationDate: string
        } = JSON.parse(getString('userData'));

        const loadedUser = new User(
            userData.email, 
            userData.id, 
            userData._token, 
            new Date(userData._tokenExpirationDate)
            );
        
            if(loadedUser.isAuth){
                this._user.next(loadedUser);
                this.autoLogout(loadedUser.timeToExpiry);
                return of(true);
            }
            return of(false);

    }

    autoLogout(expiry: number){
        this.tokenEpiration = <any>setTimeout(() => this.logout(), expiry);
    }

    private handleError(errorMessage: string){
        switch(errorMessage){
            case 'EMAIL_EXISTS':
                alert('This email address already exists.');
                break;
            case 'INVALID_PASSWORD':
                alert('The password entered was incorrect.');
                break;
            case 'EMAIL_NOT_FOUND':
                alert('There is no account with this email address.');
                break;
            default:
                alert('Authentication failed, check your credentials.');
        }
    }
}