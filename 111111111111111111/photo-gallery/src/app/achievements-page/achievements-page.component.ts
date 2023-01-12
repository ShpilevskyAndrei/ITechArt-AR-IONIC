import { Component, Input } from '@angular/core';

import { IAchievement } from "../shared/interfaces/achievement.interface";
import { DateService } from "../shared/services/date.service";

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.scss'],
})
export class AchievementsPageComponent {
  @Input() public currentDate!: IAchievement | null;
  @Input() public questsCountToday!: number | null;
  @Input() public questsCountOverall!: number | null;
  @Input() public achievements!: IAchievement[] | null;

  constructor(private dateService: DateService) {
  }

  public ngOnInit(): void {
    // this.outNum(this.questsCountOverall, "#out");
  }

  public isLastAchievement(achievement: IAchievement): boolean {
    return this.achievements!.indexOf(achievement) + 1 === this.achievements!.length
  }

  public getFormattedDate(achievement: IAchievement): string {
    return this.dateService.getFormattedDate(achievement);
  }

  // public time = 10000;
  // public step = 1;
  //
  // public outNum(num: any, elem: any) {
  //   let e = document.querySelector("#out");
  //   let n = 0;
  //   let t = Math.round(this.time / (num / this.step));
  //   let interval = setInterval(() => {
  //     n = n + this.step;
  //     if (n == num) {
  //       clearInterval(interval);
  //     }
  //     e!.innerHTML = String(n);
  //   }, t);
  // }
}
