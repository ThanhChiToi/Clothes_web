import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  discountPrice?: number;
  description: string;
  isFeatured: boolean;
  categoryName: string;
  mainImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);
  urlAPI: string = ""
  constructor() {
    this.urlAPI = 'https://localhost:7195'
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI + '/api/Products')
  }

  getProduct(id : number): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI + '/api/Products/'+ id)
  }
}
