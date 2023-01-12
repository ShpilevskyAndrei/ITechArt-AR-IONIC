import { Component } from '@angular/core';
import { Observable } from "rxjs";

import { QuestsCountService } from "../shared/services/quests-count-service";
import { AchievementsService } from "../shared/services/achievements.service";
import { IAchievement } from "../shared/interfaces/achievement.interface";
import { DateService } from "../shared/services/date.service";

@Component({
  selector: 'app-camera-marker-based',
  templateUrl: 'camera-marker-based.page.html',
  styleUrls: ['camera-marker-based.page.scss']
})
export class CameraMarkerBasedPage {
  public questsCountToday = new Observable<number>;
  public questsCountOverall = new Observable<number>;
  public isButtonDisabled = false;
  public isCongrats = false;
  public isCongratsClosing = false;
  public isSuccessMessage = false;

  constructor(
    private questsCountService: QuestsCountService,
    private achievementsService: AchievementsService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.getQuestsCountOverall();
    this.getQuestsCountToday();
  }

  public createNewDoneQuestInfo(): void {
    let achievement = this.dateService.getCurrentDate();
    achievement.count = 0
    let achievements: IAchievement[] | undefined;

    this.achievementsService.getAchievements().subscribe({
      next: (data) => {
        achievements = data;
      }
    })

    for (let i = 0; i < achievements!.length; i++) {
      if (
        achievement.month === achievements![i].month &&
        achievement.date === achievements![i].date &&
        achievement.year === achievements![i].year
      ) {
        achievements![i].count! +=1
        this.achievementsService.setAchievements(achievements!)
        this.achievementsService.getAchievements()
        this.updateQuestsCounts();
        return;
      }
    }

    achievements?.unshift(achievement)
    achievements![0]!.count! +=1
    this.achievementsService.setAchievements(achievements!)
    this.achievementsService.getAchievements()
    this.updateQuestsCounts()
  }

  public updateQuestsCounts(): void {
    this.questsCountService.upQuestsCountToday()
    this.questsCountService.upQuestsCountOverall()
  }

  public getQuestsCountOverall(): void {
    this.questsCountOverall = this.questsCountService.getQuestsCountOverall()
  }

  public getQuestsCountToday(): void {
    this.questsCountToday = this.questsCountService.getQuestsCountToday()
  }

  public closeModal(event: boolean): void {
    this.isCongratsClosing = !event;
    this.isSuccessMessage = !this.isSuccessMessage
    setTimeout(() => {
      this.isCongrats = event;
      this.isCongratsClosing = event
    }, 500)
  }
}
