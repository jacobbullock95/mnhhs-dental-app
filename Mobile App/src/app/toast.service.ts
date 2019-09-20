import { Injectable } from '@angular/core';
import * as Toast from "nativescript-toast";

@Injectable({ providedIn: 'root' })
export class ToastService {


  displayToast(message: string){
    Toast.makeText(message).show();
  }
}