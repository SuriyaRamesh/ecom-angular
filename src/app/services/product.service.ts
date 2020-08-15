import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // products: Product[] = [
  //   new Product(1,"Product 1", "This is product 1 description. The product is really awesome.", 100),
  //   new Product(2,"Product 2", "This is product 2 description. The product is really awesome.", 150),
  //   new Product(3,"Product 3", "This is product 3 description. The product is really awesome.", 200),
  //   new Product(4,"Product 4", "This is product 4 description. The product is really awesome.", 130),
  //   new Product(5,"Product 5", "This is product 5 description. The product is really awesome.", 300),
  //   new Product(6,"Product 6", "This is product 6 description. The product is really awesome.", 250),
  //   new Product(7,"Product 7", "This is product 7 description. The product is really awesome.", 340),
  //   new Product(8,"Product 8", "This is product 8 description. The product is really awesome.", 280)
  // ]

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl); 
  }

}
