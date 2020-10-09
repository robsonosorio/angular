import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  postProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  putProducts(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  deleteProducts(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`);
  }
}
