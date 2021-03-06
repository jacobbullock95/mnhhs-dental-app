import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui.service';
import { ChallengeService } from '../challenge.service';
import { Challenge } from '../challenge.model';
import { Subscription } from 'rxjs';
import { Day, DayStatus } from '../day.model';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.scss'],
  moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  currentChallenge: Challenge;
  private curChallengeSub: Subscription;

  constructor(private modal: ModalDialogService, 
              private vcRef: ViewContainerRef,
              private uiService: UIService,
              private challengeService: ChallengeService,
              private page: Page
              ) {

                this.page.actionBarHidden = true;
              }
    
    ngOnInit() {
      this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
        challenge => {
        this.currentChallenge = challenge;
      });
    }

    getIsSettable(dayInMonth: number){
      return dayInMonth <= new Date().getDate();
    }

    

    getRow(index: number, day: {dayInMonth: number, dayInWeek: number}){
      const startRow = 1;
      const weekRow = Math.floor(index / 7);
      const firstDay = new Date(
        new Date().getFullYear(), 
        new Date().getMonth(), 
        1
        ).getDay();
      const irregularRow = day.dayInWeek < firstDay ? 1 : 0;

      return startRow + weekRow + irregularRow;
    }

    onChangeStatus(day: Day) {
      if(!this.getIsSettable(day.dayInMonth)){
        return;
      }
      this.modal.showModal(DayModalComponent, {
        fullscreen: true,
        viewContainerRef: this.uiService.getRootVCRef() 
        ? this.uiService.getRootVCRef() 
        : this.vcRef,
        context: { date: day.date, status: day.status }
        
      }).then((status: DayStatus) => {
        if(status === DayStatus.Open){
          return;
        }
        this.challengeService.updateDayStatus(day.dayInMonth, status)
      });
    }

    ngOnDestroy() {
      if(this.curChallengeSub) {
        this.curChallengeSub.unsubscribe();
      }
    }

    startChallenge() {
      this.challengeService.createNewChallenge("Brush and Floss!", "Brush and Floss Your Teeth Twice Each Day");
    }
  
  }
