import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[] = [];
  gridHeaders = ['name', 'Name', 'Category', 'Country'];
  title = 'primeng-grid-using-reactive-forms';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }
}
