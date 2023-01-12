import { Component, Input } from '@angular/core';

import { QuestsCountService } from "./shared/services/quests-count-service";
import { IAchievement } from "./shared/interfaces/achievement.interface";
import { DateService } from "./shared/services/date.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @Input() public achievements: IAchievement[] | null = [];

  constructor(
    private questsCountService: QuestsCountService,
    private dateService: DateService,
  ) {}

  ngOnInit(): void {
    this.setQuestsCountOverall();
    this.setQuestsCountToday();
  }

  public setQuestsCountOverall(): void {
    let count = 0;

    for (let i = 0; i < this.achievements!.length; i++) {
      count += this.achievements![i].count!
    }

    this.questsCountService.setQuestsCountOverall(count);
  }

  public setQuestsCountToday(): void {
    for (let i = 0; i < this.achievements!.length; i++) {
      if (this.dateService.isAchievementsGotToday(this.achievements![i])) {
        this.questsCountService.setQuestsCountToday(this.achievements![i].count!);
      }
    }
  }
}
