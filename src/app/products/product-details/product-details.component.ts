import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct, IProductCart } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productsService:ProductsService,
    private route:ActivatedRoute,
    private notification:NotificationService,
    private cart:CartService
  ) { }

  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const productId = Number(routParams.get("id"));

    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notification.notfy("Product added to cart");
    const product: IProductCart = {
      ...this.product!,
      quantity: this.quantity
    }
    this.cart.addToCart(product);
  }

}
