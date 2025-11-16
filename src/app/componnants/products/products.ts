import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products:Iproduct[]
  totaleOrderPrice:number=0;
  constructor(){
    this.products=[
      {id:100,name:'dell',price:52444,quantity:3,imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/portfolio/laptop-promo-above-dell.png?fmt=png-alpha&wid=800&hei=640',catId:1},
      {id:101,name:'hp',price:50444,quantity:5,imageUrl:'https://m.media-amazon.com/images/I/71TN45+oJ0L._AC_SX425_.jpg',catId:1},
      {id:102,name:'iphone',price:52444,quantity:3,imageUrl:'https://www.raneen.com/media/catalog/product/m/a/ma225_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000',catId:2},
      {id:103,name:'samsung',price:52444,quantity:3,imageUrl:'https://m.media-amazon.com/images/I/61NUR7kNpZL._AC_SX425_.jpg',catId:2},
      {id:104,name:'haire',price:5444,quantity:3,imageUrl:'https://m.media-amazon.com/images/I/718WA8+FlFL._AC_SY355_.jpg',catId:3},
      {id:105,name:'toshiba',price:15444,quantity:5,imageUrl:'https://m.media-amazon.com/images/I/71t7QToZliL._AC_SY445_SX342_QL70_ML2_.jpg',catId:1},
      {id:106,name:'waking machine',price:19744,quantity:3,imageUrl:'https://m.media-amazon.com/images/I/51dFuD+PZAL._AC_SX425_.jpg',catId:2},
      {id:107,name:'samsung',price:52444,quantity:3,imageUrl:'https://m.media-amazon.com/images/I/61NUR7kNpZL._AC_SX425_.jpg',catId:2},
      {id:108,name:'dell',price:52444,quantity:3,imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/portfolio/laptop-promo-above-dell.png?fmt=png-alpha&wid=800&hei=640',catId:1},
      {id:109,name:'hp',price:50444,quantity:5,imageUrl:'https://m.media-amazon.com/images/I/71TN45+oJ0L._AC_SX425_.jpg',catId:1},
      {id:110,name:'iphone',price:52444,quantity:3,imageUrl:'https://www.raneen.com/media/catalog/product/m/a/ma225_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000',catId:2},
      {id:111,name:'samsung',price:52444,quantity:3,imageUrl:'https://m.media-amazon.com/images/I/61NUR7kNpZL._AC_SX425_.jpg',catId:2},
    ]

  }
  buy(count:string,price:number){
    this.totaleOrderPrice+= +count*price;
  }
}
