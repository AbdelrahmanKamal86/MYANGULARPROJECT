import { Component } from '@angular/core';
import { Istore } from '../../models/istore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
myStore:Istore;
constructor(){
this.myStore={
  name:'abdo',
  imageUrl:'https://www.shutterstock.com/shutterstock/photos/230619400/display_1500/stock-vector-shop-icon-store-230619400.jpg',
  branches:['caro','geza','fayoum','alex']
    }
  }
}
