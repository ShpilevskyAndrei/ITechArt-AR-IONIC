import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestsCountService {
  private questsCountToday: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  private questsCountOverall: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  public getQuestsCountToday(): Observable<number> {
    return this.questsCountToday.asObservable();
  }

  public setQuestsCountToday(newState: number): void {
    this.questsCountToday.next(newState);
  }

  public getQuestsCountOverall(): Observable<number> {
    return this.questsCountOverall.asObservable();
  }

  public setQuestsCountOverall(newState: number): void {
    this.questsCountOverall.next(newState);
  }

  public upQuestsCountToday(): void {
    this.questsCountToday.next(this.questsCountToday.getValue() + 1)
  }

  public upQuestsCountOverall(): void {
    this.questsCountOverall.next(this.questsCountOverall.getValue() + 1)
  }
}
