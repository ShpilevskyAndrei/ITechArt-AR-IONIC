import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss'],
})
export class CongratsComponent {
  @Output() newItemEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isConfettiDisabled = false;

  public closeModal(): void {
    this.newItemEvent.emit(false);
  }

  public ngOnInit(): void {
    setTimeout(() => { this.isConfettiDisabled = true; }, 9000)
  }
}
