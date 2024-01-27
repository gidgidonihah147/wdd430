import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  currentInterval = 0;


  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.currentInterval + 1);
      this.currentInterval++;
    }, 1000);

  }
  onGameEnd() {
    clearInterval(this.interval);
  }
}
