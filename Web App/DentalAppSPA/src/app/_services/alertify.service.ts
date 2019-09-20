import { Injectable } from '@angular/core';
// for tslint errors
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallback: () => any) {
  alertify.set('confirm', 'position', 'bottom-center');
  alertify.confirm(message, function(e) {
    if (e) {
      okCallback();
    } else {}
  });
}

success(message: string) {
  alertify.set('notifier', 'position', 'bottom-center');
  alertify.success(message);
}

error(message: string) {
  alertify.set('notifier', 'position', 'bottom-center');
  alertify.error(message);
}

warning(message: string) {
  alertify.set('notifier', 'position', 'bottom-center');
  alertify.warning(message);
}

message(message: string) {
  alertify.set('notifier', 'position', 'bottom-center');
  alertify.message(message);
}

}
