import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { Day, DayStatus } from '../day.model';
import { Subscription } from 'rxjs';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id,
})
export class TodayComponent implements OnInit, OnDestroy {
  currentDay: Day;
  private curChallengeSub: Subscription;

  constructor(private challengeService: ChallengeService, private page: Page) {
    this.page.actionBarHidden = true;
   }

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(challenge => {
      if(challenge){
        this.currentDay = challenge.currentDay;
      }
      else{
        this.startChallenge();
      }
      
    });
  }

  ngOnDestroy() {
    if(this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
  onActionSelected(action: DayStatus){
    this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
  }

  getActionName() {
    if(this.currentDay.status === DayStatus.Completed){
      return 'complete';
    }
    if (this.currentDay.status === DayStatus.Failed){
      return 'fail';
    }
    return null;
  }

  startChallenge() {
    this.challengeService.createNewChallenge("Brush and Floss!", "Brush and Floss Your Teeth Twice Each Day");
  }

}
