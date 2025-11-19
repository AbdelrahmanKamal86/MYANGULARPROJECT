import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aboutus } from "./componnants/aboutus/aboutus";
import { Navbar } from "./componnants/navbar/navbar";
import { Footer } from "./componnants/footer/footer";
import { Products } from "./componnants/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aboutus, Navbar, Footer, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
