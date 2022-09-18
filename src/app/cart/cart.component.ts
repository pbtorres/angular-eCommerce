import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IProductCart } from '../products/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  itemsCart: IProductCart[] = [];
  totalValue = 0;
  
  constructor(
    private cart:CartService,
    private route:Router,
    private snackBar:MatSnackBar 
  ) { }

  ngOnInit(): void {
    this.itemsCart = this.cart.getCart();
    this.calcTotalValue();
  }

  removeItem(productId: Number) {
    this.itemsCart = this.itemsCart.filter(item => item.id !== productId);
    this.cart.removeCartItem(productId); 
    this.calcTotalValue();
  }

  calcTotalValue() {
    this.totalValue = this.itemsCart.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }

  buy() {
    this.snackBar.open("Compra Realizada com Sucesso!", "Ok", {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
    this.cart.clearCart();
    this.route.navigate(["products"]);
  }

}
