import { Injectable } from '@angular/core';
import { IProductCart } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: IProductCart[] = [];

  constructor() { }

  addToCart(product: IProductCart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items))
  }
  
  getCart() {
    return JSON.parse(localStorage.getItem("cart") || "");
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }

}
