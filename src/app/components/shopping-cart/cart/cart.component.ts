import { Product } from './../../../models/product';
import { MessangerService } from './../../../services/messanger.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1, productId:3, productName: "Test 1", quantity:4, price: 300},
    // {id:2, productId:4, productName: "Test 4", quantity:1, price: 150},
    // {id:3, productId:2, productName: "Test 3", quantity:3, price: 200},
    // {id:4, productId:1, productName: "Test 2", quantity:5, price: 350},
  ];

  cartTotal = 0;

  constructor(private msg: MessangerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
        this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for(let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break
      }
    }

    if(!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
        
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }

}
