import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { IAchievement } from "./shared/interfaces/achievement.interface";
import { AchievementsService } from "./shared/services/achievements.service";

@Component({
  selector: 'app-root-container',
  template: `<app-root [achievements]="achievements | async"></app-root>`,
})
export class AppComponentContainer {
  public achievements!: Observable<IAchievement[]>;

  constructor(
    private achievementsService: AchievementsService
  ) {}

  ngOnInit(): void {
    this.achievements = this.achievementsService.getAchievements()
  }
}
