import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = [ 'id', 'name', 'description', 'logo', 'manual', 'action' ]

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
