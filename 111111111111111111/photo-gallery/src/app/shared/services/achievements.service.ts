import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { IAchievement } from "../interfaces/achievement.interface";
import { achievementsData } from "../../achievements-page/constants/achievements-data";

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  private achievements: BehaviorSubject<IAchievement[]> =
    new BehaviorSubject<IAchievement[]>(achievementsData);

  public getAchievements(): Observable<IAchievement[]> {
    return this.achievements.asObservable();
  }

  public setAchievements(newState: IAchievement[]): void {
    this.achievements.next(newState);
  }
}
