import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { FormGroup } from '@angular/forms';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { CheckBox } from 'nativescript-checkbox';
import { topmost } from 'tns-core-modules/ui/frame';
import { registerElement } from 'nativescript-angular/element-registry';
import * as email from 'nativescript-email'
import { Subject } from 'rxjs';
import { AuthService } from '~/app/auth/auth.service';
import { ToastService } from '~/app/toast.service';
import { take, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: 'ns-parentConsentForm',
  templateUrl: './parentConsentForm.component.html',
  styleUrls: ['./parentConsentForm.component.css'],
  moduleId: module.id,
})
export class ParentConsentFormComponent implements OnInit {
  public firstTx: string = "";
  public showConfirmation;
  private blankFormTemplate;
  private formData = {
    "title":"",
    "lastName":"",
    "firstName":"",
    "alternativeName":"",
    "dateOfBirth":"",
    "gender":"",
    "homeAddress":"",
    "postalAddress":"",
    "phoneHome":"",
    "phoneWork":"",
    "phoneMobile":"",
    "emergencyContactPerson":"",
    "emergencyContactPhone":"",
    "medicareNumber":"",
    "medicareLineNumber":"",
    "medicareExpiry":"",
    "healthcareCardNumber":"",
    "healthcareExpiryDate":"",
    "eligibilityForDentalTreatment":"",
    "schoolAttended":"",
    "schoolGrade":"",
    "consentChildReceivingTreatment":"",
    "consentTreatmentSignatory":"",
    "childOrigin":"",
    "childBirth":"",
    "languageSpokenAtHome":"",
    "interpreterRequired":"",
    "usualMedicalPracitionerDetails":"",
    "custodyDepartmentChildSafety":"",

    "custodyDepartmentChildSafetyDetails":"",
    "exchangingInformationConsent":"",
    "exchangingInformationConsentSignatory":"",
    "previouslyTreatedSchoolClinic":"",
    "previouslyTreatedSchoolClinicDetailsSchool":"",
    "previouslyTreatedSchoolClinicDetailsYear":"",
    "currentlyReceivingDentalTreatment":"",
    "currentlyReceivingDentalTreatmentDetails":"",
    "currentlyReceivingSpecialistTreatment":"",
    "currentlyReceivingSpecialistTreatmentDetails":"",
    "problemsWithChildsTeethDetails":"",
    "withholdingConfidentialInformation":"",
    "medicalConditions":[],
    "otherMedicalConditions":"",
    "medicareNumberConfirm":"",
    "medicareLineNumberConfirm":"",
    "medicareExpiryMth":"",
    "medicareExpiryYr":"",
    "childFirstName":"",
    "childLastName":"",
    "bulkBillConsent":"",
    "bulkBillSignatory":"",
   }


  form: FormGroup;

  constructor(
    private page: Page, 
    private router: Router,
    private auth: AuthService,
    private toast: ToastService,
    private http: HttpClient,
    private routerExtensions: RouterExtensions) {
    this.page.actionBarHidden = true;
   }

  ngOnInit() {
    this.showConfirmation = false;
    this.blankFormTemplate = this.formData;
  }
  
  onSubmit(){
    const lastName = this.form.get('email').value;
  }

  

  public onTextChange(args, varName) {
    let textField = <TextField>args.object;
    this.formData[varName] = textField.text;
  }



  //toggleConsentTreatment
  @ViewChild("consentTreatmentYes") consentTreatmentYes: ElementRef;
  public toggleConsentTreatment(){
    this.formData['consentChildReceivingTreatment'] = (!this.consentTreatmentYes.nativeElement.checked).toString();
  }

  @ViewChild("treatmentEligibilityYes") treatmentEligibilityYes: ElementRef;
  @ViewChild("treatmentEligibilityNo") treatmentEligibilityNo: ElementRef;
  public treatmentEligibilityToggle(selected) {
    switch (selected){//checked
      case 'yes':
        this.treatmentEligibilityNo.nativeElement.checked = false;
        this.formData['eligibilityForDentalTreatment'] = "yes";
        break;
      case 'no':
        this.treatmentEligibilityYes.nativeElement.checked = false;
        this.formData['eligibilityForDentalTreatment'] = "no";
        break;
    }
  }
  
  @ViewChild("genderMale") genderMaleCheck: ElementRef;
  @ViewChild("genderFemale") genderFemaleCheck: ElementRef;
  @ViewChild("genderOther") genderOtherCheck: ElementRef;
  public genderToggleCheck(selected) {
    switch (selected){
      case 'male':
        this.genderFemaleCheck.nativeElement.checked = false;
        this.genderOtherCheck.nativeElement.checked = false;
        break;
      case 'female':
        this.genderMaleCheck.nativeElement.checked = false;
        this.genderOtherCheck.nativeElement.checked = false;
        break;
      case 'other':
        this.genderMaleCheck.nativeElement.checked = false;
        this.genderFemaleCheck.nativeElement.checked = false;
        break;
    }

    this.formData['gender'] = selected;
  }

  @ViewChild("originNo") originNo: ElementRef;
  @ViewChild("originAboriginal") originAboriginal: ElementRef;
  @ViewChild("originTorres") originTorres: ElementRef;
  @ViewChild("originSouthSea") originSouthSea: ElementRef;
  public originCheckboxToggle(selected) {
    switch (selected){
      case 'no':
        this.originAboriginal.nativeElement.checked = false;
        this.originTorres.nativeElement.checked = false;
        this.originSouthSea.nativeElement.checked = false;
        break;
      case 'aboriginal':
        this.originNo.nativeElement.checked = false;
        this.originTorres.nativeElement.checked = false;
        this.originSouthSea.nativeElement.checked = false;
        break;
      case 'torresStraitIslander':
        this.originNo.nativeElement.checked = false;
        this.originAboriginal.nativeElement.checked = false;
        this.originSouthSea.nativeElement.checked = false;
        break;
      case 'southSeaIslander':
        this.originNo.nativeElement.checked = false;
        this.originAboriginal.nativeElement.checked = false;
        this.originTorres.nativeElement.checked = false;
        break;
    }

    this.formData['childOrigin'] = selected;
  }

  public showBirthCountryField = false;
  @ViewChild("birthAustralia") birthAustralia: ElementRef;
  @ViewChild("birthOther") birthOther: ElementRef;
  public birthCheckboxToggle(selected) {
    switch (selected){
      case 'australia':
        this.showBirthCountryField = false;
        this.birthOther.nativeElement.checked = false;
        this.formData['childBirth'] = selected;
        break;
      case 'other':
        this.showBirthCountryField = true;
        this.birthAustralia.nativeElement.checked = false;
        this.formData['childBirth'] = selected;

        if(this.birthOther.nativeElement.checked){
          this.showBirthCountryField = false;
        }
        break;
    }
  }

  public onBirthLocationChange(args){
    let textField = <TextField>args.object;
    if(this.birthOther.nativeElement.checked){
      if(textField.text != null || textField.text != ""){
        this.formData['childBirth'] = textField.text;
      }
    }
  }

  @ViewChild("interpreterYes") interpreterYes: ElementRef;
  @ViewChild("interpreterNo") interpreterNo: ElementRef;
  public interpreterCheckboxToggle(selected) {
    switch (selected){//checked
      case 'yes':
        this.interpreterNo.nativeElement.checked = false;
        this.formData['interpreterRequired'] = "yes";
        break;
      case 'no':
        this.interpreterYes.nativeElement.checked = false;
        this.formData['interpreterRequired'] = "no";
        break;
    }
  }

  public showCustodyField = false;
  @ViewChild("custodyYes") custodyYes: ElementRef;
  @ViewChild("custodyNo") custodyNo: ElementRef;
  public custodyCheckboxToggle(selected) {
    switch (selected){
      case 'yes':
        this.showCustodyField = true;
        this.custodyNo.nativeElement.checked = false;
        this.formData['custodyDepartmentChildSafety'] = selected;

        if(this.custodyYes.nativeElement.checked){
          this.showCustodyField = false;
        }

        break;
      case 'no':
        this.showCustodyField = false;
        this.custodyYes.nativeElement.checked = false;
        this.formData['custodyDepartmentChildSafety'] = selected;
        break;
    }
  }

  public previouslyTreatedSchool = false;
  @ViewChild("previouslyTreatedSchoolYes") previouslyTreatedSchoolYes: ElementRef;
  @ViewChild("previouslyTreatedSchoolNo") previouslyTreatedSchoolNo: ElementRef;
  public previouslyTreatedSchoolCheckboxToggle(selected) {
    switch (selected){
      case 'yes':
        this.previouslyTreatedSchool = true;
        this.previouslyTreatedSchoolNo.nativeElement.checked = false;
        this.formData['previouslyTreatedSchoolClinic'] = selected;

        if(this.previouslyTreatedSchoolYes.nativeElement.checked){
          this.previouslyTreatedSchool = false;
        }

        break;
      case 'no':
        this.previouslyTreatedSchool = false;
        this.previouslyTreatedSchoolYes.nativeElement.checked = false;
        this.formData['previouslyTreatedSchoolClinic'] = selected;
        break;
    }
  }

  public previouslyTreatedSchoolDetails(args, varName) {
    if(this.previouslyTreatedSchoolYes.nativeElement.checked){
      let textField = <TextField>args.object;
      this.formData[varName] = textField.text;
    }
  }

  public otherDentistTreatment = false;
  @ViewChild("otherDentistTreatmentYes") otherDentistTreatmentYes: ElementRef;
  @ViewChild("otherDentistTreatmentNo") otherDentistTreatmentNo: ElementRef;
  public otherDentistTreatmentCheckboxToggle(selected) {
    switch (selected){
      case 'yes':
        this.otherDentistTreatment = true;
        this.otherDentistTreatmentNo.nativeElement.checked = false;
        this.formData['currentlyReceivingDentalTreatment'] = selected;

        if(this.otherDentistTreatmentYes.nativeElement.checked){
          this.otherDentistTreatment = false;
        }

        break;
      case 'no':
        this.otherDentistTreatment = false;
        this.otherDentistTreatmentYes.nativeElement.checked = false;
        this.formData['currentlyReceivingDentalTreatment'] = selected;
        break;
    }
  }

  public otherDentistTreatmentDetailsChangeDetails(args, varName) {
    if(this.otherDentistTreatmentYes.nativeElement.checked){
      let textField = <TextField>args.object;
      this.formData[varName] = textField.text;
    }
  }

  public specialistTreatment = false;
  @ViewChild("specialistTreatmentYes") specialistTreatmentYes: ElementRef;
  @ViewChild("specialistTreatmentNo") specialistTreatmentNo: ElementRef;
  public specialistTreatmentCheckboxToggle(selected) {
    switch (selected){
      case 'yes':
        this.specialistTreatment = true;
        this.specialistTreatmentNo.nativeElement.checked = false;
        this.formData['currentlyReceivingDentalTreatment'] = selected;

        if(this.specialistTreatmentYes.nativeElement.checked){
          this.specialistTreatment = false;
        }

        break;
      case 'no':
        this.specialistTreatment = false;
        this.specialistTreatmentYes.nativeElement.checked = false;
        this.formData['currentlyReceivingDentalTreatment'] = selected;
        break;
    }
  }

  public specialistTreatmentDetailsChangeDetails(args, varName) {
    if(this.specialistTreatmentYes.nativeElement.checked){
      let textField = <TextField>args.object;
      this.formData[varName] = textField.text;
    }
  }
  
  @ViewChild("confidentialInformationCheckbox") confidentialInformationCheckbox: ElementRef;
  public toggleConfidentialCheckbox(){
    this.formData['confidentialInformationCheckbox'] = (!this.confidentialInformationCheckbox.nativeElement.checked).toString();
  }

  public toggleMedicalCondition(data){
    var self = this;
    var exists = false;
    var tempMedicalConditions = [];
    var matchingIndex = -1;


    this.formData['medicalConditions'].forEach(function (medicalCondition, index){
      if(medicalCondition == data){
        matchingIndex = index;
        exists = true;
      }
    });

    if(!exists){
      this.formData['medicalConditions'].push(data);
      return;
    } else{
      this.formData['medicalConditions'].forEach(function (medicalCondition, index){
        if(matchingIndex != index){
          tempMedicalConditions.push(medicalCondition);
        }
      });
    }

    this.formData['medicalConditions'] = tempMedicalConditions;
  }

  @ViewChild("bulkBillConsent") bulkBillConsent: ElementRef;
  public bulkBillCheckboxToggle(){
    this.formData['bulkBillConsent'] = (!this.bulkBillConsent.nativeElement.checked).toString();
    console.log(this.formData['bulkBillConsent']);
  }

  @ViewChild("formScroll") formScroll:ElementRef;
  public scrollToPosition(n){
    this.formScroll.nativeElement.scrollToVerticalOffset(n);
  }
  
  composeOptions: email.ComposeOptions;
  

  public submitForm(){
    this.showConfirmation = true;
    console.log(this.formData);
    this.auth.user.pipe(
      take(1),
      switchMap(
        currentUser => {
          return this.http.post(
            `https://mndental-606ae.firebaseio.com/account/${currentUser.id}/forms.json?auth=${currentUser.token}`, 
            this.formData
        ); 
        }
      )
    ).subscribe(res => {
      console.log(res);
      this.toast.displayToast('Form Submitted Succesfully');
      //this.router.navigate(['/home']);
      this.showConfirmation = true;
    });
    
  }

  public navigateToPage(route){
    this.showConfirmation = false;
    this.formData = {
      "title":"",
      "lastName":"",
      "firstName":"",
      "alternativeName":"",
      "dateOfBirth":"",
      "gender":"",
      "homeAddress":"",
      "postalAddress":"",
      "phoneHome":"",
      "phoneWork":"",
      "phoneMobile":"",
      "emergencyContactPerson":"",
      "emergencyContactPhone":"",
      "medicareNumber":"",
      "medicareLineNumber":"",
      "medicareExpiry":"",
      "healthcareCardNumber":"",
      "healthcareExpiryDate":"",
      "eligibilityForDentalTreatment":"",
      "schoolAttended":"",
      "schoolGrade":"",
      "consentChildReceivingTreatment":"",
      "consentTreatmentSignatory":"",
      "childOrigin":"",
      "childBirth":"",
      "languageSpokenAtHome":"",
      "interpreterRequired":"",
      "usualMedicalPracitionerDetails":"",
      "custodyDepartmentChildSafety":"",
  
      "custodyDepartmentChildSafetyDetails":"",
      "exchangingInformationConsent":"",
      "exchangingInformationConsentSignatory":"",
      "previouslyTreatedSchoolClinic":"",
      "previouslyTreatedSchoolClinicDetailsSchool":"",
      "previouslyTreatedSchoolClinicDetailsYear":"",
      "currentlyReceivingDentalTreatment":"",
      "currentlyReceivingDentalTreatmentDetails":"",
      "currentlyReceivingSpecialistTreatment":"",
      "currentlyReceivingSpecialistTreatmentDetails":"",
      "problemsWithChildsTeethDetails":"",
      "withholdingConfidentialInformation":"",
      "medicalConditions":[],
      "otherMedicalConditions":"",
      "medicareNumberConfirm":"",
      "medicareLineNumberConfirm":"",
      "medicareExpiryMth":"",
      "medicareExpiryYr":"",
      "childFirstName":"",
      "childLastName":"",
      "bulkBillConsent":"",
      "bulkBillSignatory":"",
     }



    var routeConcat = "/".concat(route);
    this.routerExtensions.navigate([routeConcat], { clearHistory: true });

}
}

