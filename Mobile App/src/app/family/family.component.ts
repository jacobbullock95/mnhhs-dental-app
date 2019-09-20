import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../toast.service';
import { AccountService } from '../account/account.service';

import { Child } from './child.model';
import { take, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ns-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  moduleId: module.id,
})
export class FamilyComponent implements OnInit {
  form: FormGroup;
  editForm: FormGroup;
  creatingChild = false;
  editingChild = false;
  childExists = false;

  //edit child temp store
  editIndex = null;
  editFirstName = '';
  editLastName = '';
  editBirthday = '';
  editMedicareNumber = '';
  editMedicareCode = '';
  editMedicareExpiry = '';

  public data: {};

  public myChildren: Array<any>;


  public childFirstName: string;
  public childLastName: string;
  public childBirthday: string;
  public childMedicareNumber: string;
  public childMedicareCode: string;
  public childMedicareExpiry: string;


  constructor(
    private page: Page,
    private http: HttpClient,
    private auth: AuthService,
    private toast: ToastService,
    private account: AccountService
    ) { }

  ngOnInit() {
    this.fetchChildren();
    this.creatingChild = false;
    this.editingChild = false;
    this.page.actionBarHidden = true;

    

    this.form = new FormGroup({
      childFirstName: new FormControl(null,{
        updateOn: 'change'
      }),
      childLastName: new FormControl(null,{
        updateOn: 'change'
      }),
      childBirthday: new FormControl(null,{
        updateOn: 'change'
      }),
      childMedicareNumber: new FormControl(null,{
        updateOn: 'change'
      }),
      childMedicareCode: new FormControl(null,{
        updateOn: 'change'
      }),
      childMedicareExpiry: new FormControl(null,{
        updateOn: 'change'
      })
      
    });

    this.editForm = new FormGroup({
      childFirstName: new FormControl(null,{
        updateOn: 'change'
      }),
      childLastName: new FormControl(null,{
        updateOn: 'change'
      }),
      childBirthday: new FormControl(null,{
        updateOn: 'change'
      }),
      childMedicareNumber: new FormControl(null,{
        updateOn: 'change'
      }),
      childMedicareCode: new FormControl(null,{
        updateOn: 'change'
      }),
      childMedicareExpiry: new FormControl(null,{
        updateOn: 'change'
      })
      
    });
  }

  createMode(){
    this.creatingChild = true;
  }

  editMode(child, index){
    this.editIndex = index;
    this.editingChild = true;
    this.editFirstName = child.childFirstName;
    this.editLastName = child.childLastName;
    this.editBirthday = child.childBirthday;
    this.editMedicareNumber = child.childMedicareNumber;
    this.editMedicareCode = child.childMedicareCode;
    this.editMedicareExpiry = child.childMedicareExpiry;
  }

  closeCreate(){
    this.creatingChild = false;
  }

  closeEdit(){
    this.editIndex = null;
    this.editingChild = false;
    this.editFirstName = '';
    this.editLastName = '';
    this.editBirthday = '';
    this.editMedicareNumber = '';
    this.editMedicareCode = '';
    this.editMedicareExpiry = '';
  }

  addChild(){
    const childFirstName = this.form.get('childFirstName').value;
    const childLastName = this.form.get('childLastName').value;
    const childBirthday = this.form.get('childBirthday').value;
    const childMedicareNumber = this.form.get('childMedicareNumber').value;
    const childMedicareCode = this.form.get('childMedicareCode').value;
    const childMedicareExpiry = this.form.get('childMedicareExpiry').value;

    const newChild = new Child(childFirstName, childLastName, childBirthday, childMedicareNumber, childMedicareCode, childMedicareExpiry);

    this.auth.user.pipe(
      take(1),
      switchMap(
        currentUser => {
          return this.http.post(
            `https://mndental-606ae.firebaseio.com/account/${currentUser.id}/family.json?auth=${currentUser.token}`, 
            newChild
        ); 
        }
      )
    ).subscribe(res => {
      this.toast.displayToast('Family Member Created');
      console.log(res);
      this.fetchChildren();
      this.form.reset();
      this.creatingChild = false;
    });

  }


  fetchChildren(){
    return this.auth.user.pipe(
      take(1),
      switchMap(currentUser => {

      return this.http.get
      (`https://mndental-606ae.firebaseio.com/account/${currentUser.id}/family.json?auth=${currentUser.token}`)
  })).subscribe(data => {
    console.log(data);
    this.data = data;
    this.myChildren = (Object as any).values(data);
    console.log(this.myChildren);
  });
  }

  deleteChild(index){
    this.auth.user.pipe(
      take(1),
      switchMap(
        currentUser => {
          return this.http.delete(
            `https://mndental-606ae.firebaseio.com/account/${currentUser.id}/family.json?auth=${currentUser.token}` 
            
        ); 
        }
      )
    ).subscribe(res => {
      this.myChildren.splice(index, 1);      
      console.log(this.myChildren);
         for(let i = 0; i < this.myChildren.length; i++) {
          this.addChildAfterDelete(this.myChildren[i]);
        } 
        this.toast.displayToast('Child Deleted');
    });
    
  }

  addChildAfterDelete(child: Child){

    const newChild = new Child(child.childFirstName, child.childLastName, child.childBirthday, child.childMedicareNumber, child.childMedicareCode, child.childMedicareExpiry);

    this.auth.user.pipe(
      take(1),
      switchMap(
        currentUser => {
          return this.http.post(
            `https://mndental-606ae.firebaseio.com/account/${currentUser.id}/family.json?auth=${currentUser.token}`, 
            newChild
        ); 
        }
      )
    ).subscribe(res => {
      console.log(res);
    });

  }

  updateChild(){
    const updateIndex = this.editIndex;
    const childFirstName = this.editForm.get('childFirstName').value;
    const childLastName = this.editForm.get('childLastName').value;
    const childBirthday = this.editForm.get('childBirthday').value;
    const childMedicareNumber = this.editForm.get('childMedicareNumber').value;
    const childMedicareCode = this.editForm.get('childMedicareCode').value;
    const childMedicareExpiry = this.editForm.get('childMedicareExpiry').value;

    const newChild = new Child(childFirstName, childLastName, childBirthday, childMedicareNumber, childMedicareCode, childMedicareExpiry);

    this.myChildren.push(newChild);
    this.deleteChild(updateIndex);
    this.editForm.reset();
    this.editingChild = false;
    this.toast.displayToast('Child Updated');


  }

  

}
