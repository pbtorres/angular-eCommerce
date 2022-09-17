import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../products';

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
    private notification:NotificationService
  ) { }

  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const productId = Number(routParams.get("id"));

    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notification.notfy("Product added to cart");
  }

}
