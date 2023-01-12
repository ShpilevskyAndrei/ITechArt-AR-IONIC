import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { QuestsCountService } from "../shared/services/quests-count-service";
import { IAchievement } from "../shared/interfaces/achievement.interface";
import { DateService } from "../shared/services/date.service";
import { AchievementsService } from "../shared/services/achievements.service";

@Component({
  selector: 'app-achievements-page-container',
  template: `<app-achievements-page
    [currentDate]="currentDate"
    [questsCountToday]="questsCountToday | async"
    [questsCountOverall]="questsCountOverall | async"
    [achievements]="achievements | async"
  ></app-achievements-page>`,
})
export class AchievementsPageComponentContainer implements OnInit {
  public currentDate!: IAchievement;
  public questsCountToday: Observable<number> = new Observable<number>;
  public questsCountOverall: Observable<number> = new Observable<number>;
  public achievements!: Observable<IAchievement[]>;

  constructor(
    private questsCountService: QuestsCountService,
    private dateService: DateService,
    private achievementsService: AchievementsService
  ) {}

  ngOnInit(): void {
    this.currentDate = this.dateService.getCurrentDate();
    this.achievements = this.achievementsService.getAchievements();
    this.getQuestsCountOverall();
    this.getQuestsCountToday();
  }

  public isAchievementsGotToday(achievement: IAchievement): boolean {
    return achievement.date === this.currentDate?.date &&
      achievement.month === this.currentDate?.month &&
      achievement.year === this.currentDate?.year
  }

  public getQuestsCountOverall(): void {
    this.questsCountOverall = this.questsCountService.getQuestsCountOverall()
  }

  public getQuestsCountToday(): void {
    this.questsCountToday = this.questsCountService.getQuestsCountToday()
  }
}
