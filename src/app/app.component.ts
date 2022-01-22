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
  headers = [
    {
      controlName: 'name',
      pTooltip: 'Name',
      tooltipPosition: 'bottom',
      header: 'Name',
      controlType: 'textEdit',
      errorMessages: {
        required: 'User name must be given.',
        pattern: 'User name contains invalid characters.',
      },
    },
  ];
  title = 'primeng-grid-using-reactive-forms';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }
}
