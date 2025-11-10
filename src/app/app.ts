import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aboutus } from "./aboutus/aboutus";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aboutus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
