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
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  removeCartItem(productId: Number) {
    this.items = this.items.filter(item => item.id!== productId);
    localStorage.setItem("cart", JSON.stringify(this.items))
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }

}
