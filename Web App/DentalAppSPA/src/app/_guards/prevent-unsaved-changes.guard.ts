import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AccountEditComponent } from '../accounts_group/account-edit/account-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<AccountEditComponent> {
    canDeactivate(component: AccountEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changs will be lost');
        }
        return true;
    }
}
