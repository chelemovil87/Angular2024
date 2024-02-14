import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'My First Angular App!';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 10;
  }
}
