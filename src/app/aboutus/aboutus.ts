import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule],
  templateUrl: './aboutus.html',
  styleUrl: "./aboutus.css",
})
export class Aboutus {
  employees=["mohamed","mareem","logy","lamar"]
}
