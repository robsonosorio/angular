import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    logo: '',
    manual: '',
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    console.log(this.product);
  }

  upload(event) {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      console.log(file)
    }
    reader.readAsDataURL(file)
  }

  createProduct(): void {
    this.productService.postProducts(this.product).subscribe(() => {
    this.productService.showMessage('Produto cadastrado com sucesso.')
    this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
