import { Component,  } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter = {{counter}}</h3>
  <button (click)="increaseBy(+1)" class="btn btn-primary mx-2">+1</button>
  <button (click)="resetCounter()" class="btn btn-primary mx-2">Reset</button>
  <button (click)="increaseBy(-1)" class="btn btn-primary mx-2">-1</button>
  <hr>
  `})

export class CounterComponent {
  public counter: number = 10;


  public increaseBy(value: number): void {
    this.counter += value;
  }
  public resetCounter() {
    this.counter = 10;
  }
}
