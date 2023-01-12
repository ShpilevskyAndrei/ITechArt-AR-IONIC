import { Injectable } from "@angular/core";

import { IAchievement } from "../interfaces/achievement.interface";

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private currentDate = this.getCurrentDate()

  public getCurrentDate(): IAchievement {
    return {
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }
  }

  public isAchievementsGotToday(achievement: IAchievement): boolean {
    return achievement.date === this.currentDate?.date &&
      achievement.month === this.currentDate?.month &&
      achievement.year === this.currentDate?.year
  }

  public getFormattedDate(achievement: any): string {
    if (this.isAchievementsGotToday(achievement)) {
      return `Today`
    }

    return this.getStringDate(achievement);
  }

  public getStringDate(achievement: IAchievement): string {
    switch (achievement.month) {
      case 0:
        return `Jan ${achievement.date}`;
      case 1:
        return `Feb ${achievement.date}`;
      case 2:
        return `Mar ${achievement.date}`;
      case 3:
        return `Apr ${achievement.date}`;
      case 4:
        return `May ${achievement.date}`;
      case 5:
        return `Jun ${achievement.date}`;
      case 6:
        return `Jul ${achievement.date}`;
      case 7:
        return `Aug ${achievement.date}`;
      case 8:
        return `Sep ${achievement.date}`;
      case 9:
        return `Oct ${achievement.date}`;
      case 10:
        return `Nov ${achievement.date}`;
      case 11:
        return `Dec ${achievement.date}`;
      default:
        return `Once`
    }
  }

}
